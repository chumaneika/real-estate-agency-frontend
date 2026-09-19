"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarCheck, Check, Clock, LoaderCircle, MessageSquareText } from "lucide-react";
import { formatViewingDate, localDateValue, validateViewing, VIEWING_TIMES } from "@/lib/viewings";
import styles from "@/styles/pages/Properties.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
const initialValues = { date: "", time: "", comment: "" };

export default function ViewingRequestForm({ property }) {
  const [accountStatus, setAccountStatus] = useState("loading");
  const [accountAttempt, setAccountAttempt] = useState(0);
  const [minimumDate, setMinimumDate] = useState("");
  const [values, setValues] = useState(initialValues);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => { setMinimumDate(localDateValue()); }, []);

  useEffect(() => {
    const controller = new AbortController();
    setAccountStatus("loading");
    async function loadAccount() {
      try {
        const response = await fetch(`${API_URL}/api/v1/auth/me`, {
          credentials: "include", cache: "no-store", signal: controller.signal,
        });
        if (response.status === 401) {
          setAccountStatus("guest");
          return;
        }
        if (!response.ok) throw new Error("Account request failed");
        await response.json();
        if (!controller.signal.aborted) setAccountStatus("ready");
      } catch (requestError) {
        if (requestError.name !== "AbortError") setAccountStatus("error");
      }
    }
    loadAccount();
    return () => controller.abort();
  }, [accountAttempt]);

  function update(name, value) {
    setValues(current => ({ ...current, [name]: value }));
    setError("");
  }

  async function submit(event) {
    event.preventDefault();
    const validationError = validateViewing(values);
    if (validationError) {
      setError(validationError);
      return;
    }
    setSubmitStatus("submitting");
    setError("");
    try {
      const response = await fetch(`${API_URL}/api/v1/viewing-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          propertyId: property.id,
          viewingDate: values.date,
          viewingTime: values.time,
          comment: values.comment.trim(),
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (response.status === 401) {
        setAccountStatus("guest");
        throw new Error("Your session expired. Sign in and try again.");
      }
      if (!response.ok) throw new Error(payload.message || "We couldn’t send your request. Please try again.");
      setConfirmation(payload);
      setSubmitStatus("success");
    } catch (requestError) {
      setError(requestError.message || "We couldn’t send your request. Please try again.");
      setSubmitStatus("error");
    }
  }

  function reset() {
    setValues(initialValues);
    setConfirmation(null);
    setSubmitStatus("idle");
    setError("");
  }

  return (
    <section className={`${styles.detailCard} ${styles.viewingCard}`} aria-labelledby="viewing-title">
      <div className={styles.viewingHeading}>
        <span className={styles.viewingIcon}><CalendarCheck size={20} aria-hidden="true" /></span>
        <div><h2 id="viewing-title">Request a viewing</h2><p>Choose a time that works for you.</p></div>
      </div>

      {accountStatus === "loading" ? <p className={styles.viewingStatus} role="status">Checking your account…</p>
        : accountStatus === "error" ? <div className={styles.viewingStatus}><p role="alert">We couldn’t check your account.</p><button type="button" className={styles.textButton} onClick={() => setAccountAttempt(value => value + 1)}>Try again</button></div>
        : accountStatus === "guest" ? <div className={styles.viewingGuest}><p>Sign in to send a viewing request and receive a confirmation.</p><Link href="/login" className={styles.button}>Sign in to continue</Link>{error && <p className={styles.formError} role="alert">{error}</p>}</div>
        : submitStatus === "success" && confirmation ? <div className={styles.confirmation} role="status" aria-live="polite">
          <span className={styles.confirmationIcon}><Check size={24} aria-hidden="true" /></span>
          <p className={styles.eyebrow}>REQUEST RECEIVED</p>
          <h3>We’ll be in touch.</h3>
          <p>Your viewing request for <strong>{formatViewingDate(confirmation.viewingDate, confirmation.viewingTime.slice(0, 5))}</strong> has been saved.</p>
          <div className={styles.confirmationMeta}><span>Reference #{confirmation.id}</span><span>Pending review</span></div>
          <button type="button" className={styles.outlineButton} onClick={reset}>Request another time</button>
        </div> : <form className={styles.viewingForm} onSubmit={submit} noValidate>
          <div className={styles.viewingFields}>
            <label className={styles.formField}>Preferred date<input type="date" min={minimumDate} value={values.date} onChange={event => update("date", event.target.value)} disabled={submitStatus === "submitting"} required /></label>
            <label className={styles.formField}>Preferred time<span className={styles.selectWithIcon}><Clock size={16} aria-hidden="true" /><select value={values.time} onChange={event => update("time", event.target.value)} disabled={submitStatus === "submitting"} required><option value="">Choose a time</option>{VIEWING_TIMES.map(time => <option key={time} value={time}>{time}</option>)}</select></span></label>
          </div>
          <label className={styles.formField}>Comment <span>(optional)</span><span className={styles.commentControl}><MessageSquareText size={16} aria-hidden="true" /><textarea value={values.comment} onChange={event => update("comment", event.target.value)} maxLength={1000} rows={4} disabled={submitStatus === "submitting"} placeholder="Anything our agent should know?" /></span><small>{values.comment.length}/1000</small></label>
          {error && <p className={styles.formError} role="alert">{error}</p>}
          <button type="submit" className={styles.submitViewing} disabled={submitStatus === "submitting"} aria-busy={submitStatus === "submitting"}>
            {submitStatus === "submitting" ? <><LoaderCircle className={styles.spinner} size={18} aria-hidden="true" />Sending request…</> : "Send viewing request"}
          </button>
          <p className={styles.formNote}>Your request will be reviewed by the PrimeKey team.</p>
        </form>}
    </section>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Eye, EyeOff, KeyRound, LoaderCircle, LockKeyhole } from "lucide-react";
import styles from "@/styles/pages/Auth.module.css";
import PreferencesControls from "@/components/PreferencesControls";
import { usePreferences } from "@/components/AppProviders";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

const AuthScreen = ({ mode = "login" }) => {
  const isRegistration = mode === "register";
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { t } = usePreferences();

  useEffect(() => {
    if (!isRegistration) {
      const rememberedEmail = window.localStorage.getItem("primekey-email");
      if (rememberedEmail) {
        setEmail(rememberedEmail);
        setRememberMe(true);
      }
    }
  }, [isRegistration]);

  const validate = () => {
    if (isRegistration && username.trim() && username.trim().length < 3) {
      return "Username must contain at least 3 characters.";
    }
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      return "Enter a valid email address.";
    }
    if (password.length < 6) {
      return "Password must contain at least 6 characters.";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    const loginEmail = email.trim().toLowerCase();

    try {
      const response = await fetch(`${API_URL}/api/v1/auth/${isRegistration ? "register" : "login"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(
          isRegistration
            ? { username: username.trim(), email: email.trim(), password }
            : { email: loginEmail, password }
        ),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        const loginHint = response.status === 401 && !isRegistration
          ? "Incorrect email or password. Check your password and try again."
          : "";
        throw new Error(loginHint || payload.message || "We could not complete your request. Please try again.");
      }

      if (!isRegistration) {
        if (rememberMe) {
          window.localStorage.setItem("primekey-email", loginEmail);
        } else {
          window.localStorage.removeItem("primekey-email");
        }
        window.localStorage.removeItem("primekey-username");
        setSuccess(`Welcome back, ${payload.username}. You are signed in.`);
        router.replace("/home");
      } else {
        setSuccess("Your account is ready. You can now sign in.");
        setPassword("");
      }
    } catch (requestError) {
      setError(requestError.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={`authPage ${styles.page}`}>
      <PreferencesControls compact />
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.tint} aria-hidden="true" />

      <section className={styles.shell} aria-labelledby="auth-title">
        <div className={styles.brand}>
          <span className={styles.brandMark}><KeyRound size={18} strokeWidth={2.2} /></span>
          <span>PrimeKey</span>
          <i>Real Estate</i>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.eyebrow}>{t(isRegistration ? "auth.registerEyebrow" : "auth.loginEyebrow")}</span>
            <h1 id="auth-title">{t(isRegistration ? "auth.createTitle" : "auth.welcome")}</h1>
            <p>{t(isRegistration ? "auth.registerSubtitle" : "auth.loginSubtitle")}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {isRegistration && <label className={styles.field}>
              <span>{t("auth.usernameOptional")}</span>
              <input
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Created from your email if blank"
                aria-invalid={Boolean(error)}
              />
            </label>}

            <label className={styles.field}>
              <span>{t("auth.email")}</span>
              <input
                autoComplete="email"
                inputMode="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                aria-invalid={Boolean(error)}
              />
            </label>

            <label className={styles.field}>
              <span>{t("auth.password")}</span>
              <span className={styles.passwordControl}>
                <input
                  autoComplete={isRegistration ? "new-password" : "current-password"}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder={t("auth.passwordPlaceholder")}
                  aria-invalid={Boolean(error)}
                />
                <button
                  className={styles.visibilityButton}
                  type="button"
                  onClick={() => setShowPassword((isVisible) => !isVisible)}
                  aria-label={t(showPassword ? "auth.hidePassword" : "auth.showPassword")}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
            </label>

            {!isRegistration && (
              <div className={styles.options}>
                <label className={styles.remember}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                  />
                  <span>{t("auth.remember")}</span>
                </label>
                <button type="button" className={styles.textButton} onClick={() => setError(t("auth.recovery"))}>
                  {t("auth.forgot")}
                </button>
              </div>
            )}

            {(error || success) && (
              <p className={error ? styles.error : styles.success} role={error ? "alert" : "status"}>
                {error || success}
              </p>
            )}

            <button className={styles.submit} type="submit" disabled={isLoading}>
              {isLoading ? <LoaderCircle className={styles.loader} size={19} /> : <>{t(isRegistration ? "auth.create" : "auth.signIn")}<ArrowRight size={18} /></>}
            </button>
          </form>

          <p className={styles.switchMode}>
            {t(isRegistration ? "auth.hasAccount" : "auth.new")}
            <Link href={isRegistration ? "/login" : "/register"}>{t(isRegistration ? "auth.signIn" : "auth.create")}</Link>
          </p>
        </div>

        <p className={styles.assurance}><LockKeyhole size={14} /> {t("auth.assurance")}</p>
      </section>
    </main>
  );
};

export default AuthScreen;

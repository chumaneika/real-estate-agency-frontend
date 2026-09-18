"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Eye, EyeOff, KeyRound, LoaderCircle, LockKeyhole } from "lucide-react";
import styles from "@/styles/pages/Auth.module.css";

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

  useEffect(() => {
    if (!isRegistration) {
      const rememberedUsername = window.localStorage.getItem("primekey-username");
      if (rememberedUsername) {
        setUsername(rememberedUsername);
        setRememberMe(true);
      }
    }
  }, [isRegistration]);

  const validate = () => {
    if (!isRegistration && username.trim().length < 3) {
      return "Username must contain at least 3 characters.";
    }
    if (isRegistration && username.trim() && username.trim().length < 3) {
      return "Username must contain at least 3 characters.";
    }
    if (isRegistration && !/^\S+@\S+\.\S+$/.test(email)) {
      return "Enter a valid email address.";
    }
    if (password.length < 6) {
      return "Password must contain at least 6 characters.";
    }
    return "";
  };

  const resolveUsername = (value) => value.trim().split("@", 1)[0];

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
    const resolvedUsername = resolveUsername(username);

    try {
      const response = await fetch(`${API_URL}/api/v1/auth/${isRegistration ? "register" : "login"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(
          isRegistration
            ? { username: username.trim(), email: email.trim(), password }
            : { username: resolvedUsername, password }
        ),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        const loginHint = response.status === 401 && !isRegistration
          ? "Incorrect username or password. Check your password and try again."
          : "";
        throw new Error(loginHint || payload.message || "We could not complete your request. Please try again.");
      }

      if (!isRegistration) {
        if (rememberMe) {
          window.localStorage.setItem("primekey-username", resolvedUsername);
        } else {
          window.localStorage.removeItem("primekey-username");
        }
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
            <span className={styles.eyebrow}>{isRegistration ? "Your next chapter" : "Private client access"}</span>
            <h1 id="auth-title">{isRegistration ? "Create your account" : "Welcome back"}</h1>
            <p>{isRegistration ? "Save the homes that feel like yours." : "Sign in to manage your property journey."}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className={styles.field}>
              <span>{isRegistration ? "Username (optional)" : "Username or email"}</span>
              <input
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder={isRegistration ? "Created from your email if blank" : "malik9 or malik9@primekey.local"}
                aria-invalid={Boolean(error)}
              />
            </label>

            {isRegistration && (
              <label className={styles.field}>
                <span>Email</span>
                <input
                  autoComplete="email"
                  inputMode="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                />
              </label>
            )}

            <label className={styles.field}>
              <span>Password</span>
              <span className={styles.passwordControl}>
                <input
                  autoComplete={isRegistration ? "new-password" : "current-password"}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  aria-invalid={Boolean(error)}
                />
                <button
                  className={styles.visibilityButton}
                  type="button"
                  onClick={() => setShowPassword((isVisible) => !isVisible)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
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
                  <span>Remember me</span>
                </label>
                <button type="button" className={styles.textButton} onClick={() => setError("Password recovery will be available soon.")}>
                  Forgot password?
                </button>
              </div>
            )}

            {(error || success) && (
              <p className={error ? styles.error : styles.success} role={error ? "alert" : "status"}>
                {error || success}
              </p>
            )}

            <button className={styles.submit} type="submit" disabled={isLoading}>
              {isLoading ? <LoaderCircle className={styles.loader} size={19} /> : <>{isRegistration ? "Create account" : "Sign in"}<ArrowRight size={18} /></>}
            </button>
          </form>

          <p className={styles.switchMode}>
            {isRegistration ? "Already have an account?" : "New to PrimeKey?"}
            <Link href={isRegistration ? "/login" : "/register"}>{isRegistration ? "Sign in" : "Create account"}</Link>
          </p>
        </div>

        <p className={styles.assurance}><LockKeyhole size={14} /> Your information is protected with bank-level encryption.</p>
      </section>
    </main>
  );
};

export default AuthScreen;

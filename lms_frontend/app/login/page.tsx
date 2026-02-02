"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useAuth } from "@/lib/auth";

function isValidEmail(value: string): boolean {
  // Simple pragmatic check; backend should do authoritative validation.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

type FieldErrors = Partial<Record<"email" | "password", string>>;

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return email.trim().length > 0 && password.length > 0 && !isSubmitting;
  }, [email, password, isSubmitting]);

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(email)) next.email = "Enter a valid email address.";

    if (!password) next.password = "Password is required.";
    else if (password.length < 8) next.password = "Password must be at least 8 characters.";

    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const nextErrors = validate();
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      await login({ email: email.trim(), password });
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Login failed.";
      setFormError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-2xl bg-surface shadow-soft border border-black/5 p-6">
        <h1 className="text-2xl font-semibold tracking-tight">Log in</h1>
        <p className="mt-2 text-sm text-muted">
          Enter your credentials to continue. (Backend integration is stubbed via <code className="font-semibold">/auth/login</code>
          .)
        </p>

        {formError ? (
          <div className="mt-4 rounded-xl border border-danger/20 bg-danger/10 px-4 py-3 text-sm text-ink">
            <div className="font-semibold">Unable to log in</div>
            <div className="mt-1 text-muted break-words">{formError}</div>
          </div>
        ) : null}

        <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
          <label className="block">
            <span className="text-sm font-medium">Email</span>
            <input
              className={[
                "mt-1 w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2",
                fieldErrors.email ? "border-danger/40 focus:ring-danger/20" : "border-black/10 focus:ring-primary/30"
              ].join(" ")}
              placeholder="you@example.com"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "login-email-error" : undefined}
              disabled={isSubmitting}
            />
            {fieldErrors.email ? (
              <div id="login-email-error" className="mt-1 text-xs text-danger">
                {fieldErrors.email}
              </div>
            ) : null}
          </label>

          <label className="block">
            <span className="text-sm font-medium">Password</span>
            <input
              className={[
                "mt-1 w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2",
                fieldErrors.password ? "border-danger/40 focus:ring-danger/20" : "border-black/10 focus:ring-primary/30"
              ].join(" ")}
              placeholder="••••••••"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={Boolean(fieldErrors.password)}
              aria-describedby={fieldErrors.password ? "login-password-error" : undefined}
              disabled={isSubmitting}
            />
            {fieldErrors.password ? (
              <div id="login-password-error" className="mt-1 text-xs text-danger">
                {fieldErrors.password}
              </div>
            ) : null}
          </label>

          <button
            type="submit"
            disabled={!canSubmit}
            className={[
              "w-full rounded-xl px-4 py-2 font-medium focus:outline-none focus:ring-2",
              canSubmit
                ? "bg-primary text-white hover:opacity-95 focus:ring-primary/40"
                : "bg-black/10 text-muted cursor-not-allowed"
            ].join(" ")}
          >
            {isSubmitting ? "Signing in…" : "Continue"}
          </button>
        </form>

        <div className="mt-5 text-sm text-muted">
          New here?{" "}
          <Link className="text-primary font-medium hover:underline" href="/register">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

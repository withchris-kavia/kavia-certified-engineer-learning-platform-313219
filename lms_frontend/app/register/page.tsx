import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-2xl bg-surface shadow-soft border border-black/5 p-6">
        <h1 className="text-2xl font-semibold tracking-tight">Create account</h1>
        <p className="mt-2 text-sm text-muted">
          Placeholder UI. Wire this to backend registration later.
        </p>

        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Name</span>
            <input
              className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Ada Lovelace"
              type="text"
              name="name"
              autoComplete="name"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Email</span>
            <input
              className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="you@example.com"
              type="email"
              name="email"
              autoComplete="email"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Password</span>
            <input
              className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="••••••••"
              type="password"
              name="password"
              autoComplete="new-password"
            />
          </label>

          <button
            type="button"
            className="w-full rounded-xl bg-primary px-4 py-2 text-white font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Create account
          </button>
        </form>

        <div className="mt-5 text-sm text-muted">
          Already have an account?{" "}
          <Link className="text-primary font-medium hover:underline" href="/login">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

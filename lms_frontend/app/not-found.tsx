import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-2xl bg-surface shadow-soft border border-black/5 p-6">
      <h1 className="text-xl font-semibold">Page not found</h1>
      <p className="mt-2 text-muted">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-white font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        Go home
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-muted">
            Placeholder progress overview. Later: enrollments, completion %, streaks.
          </p>
        </div>

        <Link
          href="/courses"
          className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-white font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          Go to courses
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Courses enrolled", value: "2" },
          { label: "Lessons completed", value: "7" },
          { label: "Current streak", value: "3 days" }
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-surface shadow-soft border border-black/5 p-5"
          >
            <div className="text-sm text-muted">{s.label}</div>
            <div className="mt-2 text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-surface shadow-soft border border-black/5 p-6">
        <h2 className="text-lg font-semibold">Continue learning</h2>
        <p className="mt-2 text-sm text-muted">
          Next up: “Lesson 3: Topic overview” in “Kavia Certified Engineer: Foundations”.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/lessons/lesson-3"
            className="rounded-xl bg-accent px-4 py-2 text-white font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-accent/40"
          >
            Resume lesson
          </Link>
          <button
            type="button"
            className="rounded-xl border border-black/10 bg-white px-4 py-2 font-medium hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            View progress details
          </button>
        </div>
      </div>
    </div>
  );
}

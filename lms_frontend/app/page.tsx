import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-surface shadow-soft border border-black/5 p-6">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome to Kavia LMS</h1>
        <p className="mt-2 text-muted">
          A light, modern learning experience inspired by learn.deeplearning.ai.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-white font-medium shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
            href="/courses"
          >
            Browse courses
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 font-medium hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
            href="/login"
          >
            Log in
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 font-medium hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
            href="/register"
          >
            Create account
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Courses",
            desc: "Enroll and navigate modules and lessons.",
            href: "/courses"
          },
          { title: "Dashboard", desc: "Track progress at a glance.", href: "/dashboard" },
          { title: "Lesson", desc: "See lesson reading experience.", href: "/lessons/lesson-1" }
        ].map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="rounded-2xl bg-surface shadow-soft border border-black/5 p-5 hover:translate-y-[-1px] transition-transform focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <div className="text-lg font-semibold">{c.title}</div>
            <div className="mt-1 text-sm text-muted">{c.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

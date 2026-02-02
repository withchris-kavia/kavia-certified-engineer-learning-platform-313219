import Link from "next/link";

const demoCourses = [
  { id: "course-1", title: "Kavia Certified Engineer: Foundations", lessons: 12 },
  { id: "course-2", title: "Production FastAPI Patterns", lessons: 10 },
  { id: "course-3", title: "Next.js App Router for Product Teams", lessons: 9 }
];

export default function CoursesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Courses</h1>
          <p className="mt-1 text-sm text-muted">
            Browse available courses. Placeholder data for now.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 font-medium hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          View dashboard
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {demoCourses.map((c) => (
          <Link
            key={c.id}
            href={`/courses/${c.id}`}
            className="rounded-2xl bg-surface shadow-soft border border-black/5 p-5 hover:translate-y-[-1px] transition-transform focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold">{c.title}</div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {c.lessons} lessons
              </span>
            </div>
            <div className="mt-2 text-sm text-muted">
              Start learning with structured modules and hands-on practice.
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

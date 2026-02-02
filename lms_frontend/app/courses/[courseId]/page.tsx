import Link from "next/link";

export default async function CourseDetailPage({
  params
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;

  const lessons = Array.from({ length: 8 }).map((_, i) => ({
    id: `lesson-${i + 1}`,
    title: `Lesson ${i + 1}: Topic overview`,
    duration: `${8 + i} min`
  }));

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Course: {courseId}</h1>
          <p className="mt-1 text-sm text-muted">
            Placeholder course details. Later this will load from the backend.
          </p>
        </div>

        <Link
          href="/courses"
          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 font-medium hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          Back to courses
        </Link>
      </div>

      <div className="rounded-2xl bg-surface shadow-soft border border-black/5 p-5">
        <h2 className="text-lg font-semibold">Lessons</h2>
        <ul className="mt-3 divide-y divide-black/5">
          {lessons.map((l) => (
            <li key={l.id} className="py-3 flex items-center justify-between gap-4">
              <div>
                <div className="font-medium">{l.title}</div>
                <div className="text-sm text-muted">{l.duration}</div>
              </div>
              <Link
                href={`/lessons/${l.id}`}
                className="rounded-xl bg-accent px-3 py-1.5 text-white text-sm font-semibold hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-accent/40"
              >
                Open
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

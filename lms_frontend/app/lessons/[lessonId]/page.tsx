import Link from "next/link";

export default async function LessonPage({
  params
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;

  return (
    <article className="space-y-5">
      <header className="rounded-2xl bg-surface shadow-soft border border-black/5 p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Lesson: {lessonId}</h1>
            <p className="mt-2 text-sm text-muted">
              Placeholder lesson content. Later: markdown, video, quiz blocks, and progress.
            </p>
          </div>
          <Link
            href="/courses"
            className="rounded-xl border border-black/10 bg-white px-4 py-2 font-medium hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            Courses
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Reading
          </span>
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            Practice
          </span>
        </div>
      </header>

      <section className="rounded-2xl bg-surface shadow-soft border border-black/5 p-6 space-y-4">
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="text-muted leading-relaxed">
          This lesson page is structured for a clean, focused reading experience. Add blocks like
          callouts, code snippets, quizzes, and interactive exercises later.
        </p>

        <div className="rounded-2xl border border-black/10 bg-background p-4">
          <div className="text-sm font-semibold">Interactive block placeholder</div>
          <div className="mt-1 text-sm text-muted">
            Here you can embed quizzes / code editor / video components.
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            className="rounded-xl bg-primary px-4 py-2 text-white font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Mark complete
          </button>
          <button
            type="button"
            className="rounded-xl border border-black/10 bg-white px-4 py-2 font-medium hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            Next lesson
          </button>
        </div>
      </section>
    </article>
  );
}

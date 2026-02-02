import Link from "next/link";
import SidebarSection from "@/components/nav/SidebarSection";

const demoCourse = {
  id: "course-1",
  title: "Foundations",
  lessons: [
    { id: "lesson-1", title: "Welcome & setup" },
    { id: "lesson-2", title: "How the platform works" },
    { id: "lesson-3", title: "FastAPI + Next.js integration" }
  ]
};

export default function AppSidebar() {
  return (
    <div className="rounded-2xl bg-surface shadow-soft border border-black/5 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold text-muted uppercase tracking-wide">
            Navigation
          </div>
          <div className="mt-1 text-base font-semibold">Your learning</div>
        </div>
        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          Beta
        </span>
      </div>

      <div className="mt-4 space-y-4">
        <SidebarSection title="Courses">
          <Link
            href="/courses"
            className="block rounded-xl px-3 py-2 hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            Browse all courses
          </Link>
          <Link
            href={`/courses/${demoCourse.id}`}
            className="block rounded-xl px-3 py-2 hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {demoCourse.title}
          </Link>
        </SidebarSection>

        <SidebarSection title="Lessons (placeholder)">
          <ul className="space-y-1">
            {demoCourse.lessons.map((l) => (
              <li key={l.id}>
                <Link
                  href={`/lessons/${l.id}`}
                  className="block rounded-xl px-3 py-2 text-sm hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </SidebarSection>

        <SidebarSection title="API status">
          <div className="rounded-xl border border-black/10 bg-background px-3 py-2 text-sm">
            <div className="font-semibold">Backend base URL</div>
            <div className="mt-1 text-muted break-all">
              {process.env.NEXT_PUBLIC_BACKEND_URL || process.env.NEXT_PUBLIC_API_BASE || "(not set)"}
            </div>
          </div>
        </SidebarSection>
      </div>
    </div>
  );
}

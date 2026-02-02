import Link from "next/link";
import NavLink from "@/components/nav/NavLink";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6">
        <div className="h-[68px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-lg">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary/90 to-accent/90 shadow-sm" />
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">Kavia LMS</div>
              <div className="text-xs text-muted">Certified Engineer track</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="/courses">Courses</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/register" variant="primary">
              Register
            </NavLink>
          </nav>

          <div className="md:hidden">
            <Link
              href="/courses"
              className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-medium hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              Menu
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

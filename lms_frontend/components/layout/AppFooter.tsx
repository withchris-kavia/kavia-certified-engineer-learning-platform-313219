import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="border-t border-black/5 bg-white mt-10">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-semibold">Kavia LMS</div>
            <p className="mt-2 text-sm text-muted">
              A minimal, modern learning interface with primary <span className="font-semibold text-primary">#3b82f6</span>{" "}
              and accent <span className="font-semibold text-accent">#06b6d4</span>.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Resources</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link className="hover:underline" href="/courses">
                  Course catalog
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/dashboard">
                  Progress dashboard
                </Link>
              </li>
              <li>
                <a className="hover:underline" href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">
                  FastAPI docs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Links</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link className="hover:underline" href="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/register">
                  Register
                </Link>
              </li>
              <li>
                <a className="hover:underline" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
                  Next.js docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <div>© {new Date().getFullYear()} Kavia</div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <span>UI scaffold ready for API integration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

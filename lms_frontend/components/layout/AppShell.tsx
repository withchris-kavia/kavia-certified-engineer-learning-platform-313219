import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/layout/AppSidebar";
import AppFooter from "@/components/layout/AppFooter";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-ink">
      <AppHeader />

      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 py-6">
          <aside className="lg:sticky lg:top-[84px] h-fit">
            <AppSidebar />
          </aside>

          <main className="min-w-0">{children}</main>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}

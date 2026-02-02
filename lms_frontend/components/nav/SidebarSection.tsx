export default function SidebarSection({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="text-xs font-semibold text-muted uppercase tracking-wide">{title}</div>
      <div className="mt-2 space-y-1">{children}</div>
    </section>
  );
}

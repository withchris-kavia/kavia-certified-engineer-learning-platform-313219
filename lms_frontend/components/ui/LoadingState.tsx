export default function LoadingState({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="rounded-2xl bg-surface shadow-soft border border-black/5 p-6">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-primary/10 animate-pulse" />
        <div>
          <div className="font-semibold">{title}</div>
          {description ? <div className="text-sm text-muted">{description}</div> : null}
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="h-4 w-2/3 rounded bg-black/5 animate-pulse" />
        <div className="h-4 w-1/2 rounded bg-black/5 animate-pulse" />
        <div className="h-4 w-3/4 rounded bg-black/5 animate-pulse" />
      </div>
    </div>
  );
}

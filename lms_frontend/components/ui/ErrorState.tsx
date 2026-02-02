"use client";

export default function ErrorState({
  title,
  description,
  onRetry
}: {
  title: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="rounded-2xl bg-surface shadow-soft border border-black/5 p-6">
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 rounded-xl bg-danger/10" />
        <div className="min-w-0">
          <div className="text-lg font-semibold">{title}</div>
          {description ? (
            <div className="mt-1 text-sm text-muted break-words">{description}</div>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="rounded-xl bg-primary px-4 py-2 text-white font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Retry
          </button>
        ) : null}
        <a
          href="/"
          className="rounded-xl border border-black/10 bg-white px-4 py-2 font-medium hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

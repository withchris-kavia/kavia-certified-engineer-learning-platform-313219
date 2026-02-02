type ApiErrorPayload = {
  message?: string;
  detail?: unknown;
};

/**
 * PUBLIC_INTERFACE
 * getApiBaseUrl returns the configured backend base URL for API calls.
 * It prioritizes NEXT_PUBLIC_BACKEND_URL, then NEXT_PUBLIC_API_BASE.
 */
export function getApiBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    process.env.NEXT_PUBLIC_API_BASE ||
    "http://localhost:3001"
  );
}

/**
 * PUBLIC_INTERFACE
 * apiFetch is a small wrapper around fetch() that prefixes the backend base URL,
 * adds JSON defaults, and throws a typed Error on non-2xx responses.
 */
export async function apiFetch<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const base = getApiBaseUrl();
  const url = path.startsWith("http") ? path : `${base}${path.startsWith("/") ? "" : "/"}${path}`;

  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {})
    }
  });

  if (!res.ok) {
    let payload: ApiErrorPayload | undefined;
    try {
      payload = (await res.json()) as ApiErrorPayload;
    } catch {
      // ignore
    }
    const msg =
      payload?.message ||
      (typeof payload?.detail === "string" ? payload.detail : undefined) ||
      `Request failed (${res.status})`;
    throw new Error(msg);
  }

  // allow empty body
  const text = await res.text();
  if (!text) return undefined as T;
  return JSON.parse(text) as T;
}

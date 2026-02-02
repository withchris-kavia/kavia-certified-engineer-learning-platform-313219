"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  variant = "default"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "primary";
}) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  if (variant === "primary") {
    return (
      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-white text-sm font-semibold hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium",
        "hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-primary/30",
        active ? "text-primary bg-primary/10" : "text-ink"
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

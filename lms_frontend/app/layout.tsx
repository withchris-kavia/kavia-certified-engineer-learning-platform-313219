import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";
import { AuthProvider } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Kavia LMS",
  description: "Learning platform for Kavia Certified Engineers"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}

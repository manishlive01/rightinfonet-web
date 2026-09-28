import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-[#f07a3a]">Error 404</p>
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-lg text-foreground/70">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-[#f07a3a] px-6 py-3 font-semibold text-[#0d0d0c] transition hover:-translate-y-0.5"
      >
        Back to home &rarr;
      </Link>
    </main>
  );
}

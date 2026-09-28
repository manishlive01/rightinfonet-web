import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-zinc-50 px-6 text-center font-sans dark:bg-black">
      <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
        Page not found
      </h1>
      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        The page you are looking for does not exist or has been moved.
      </p>
    </main>
  );
}

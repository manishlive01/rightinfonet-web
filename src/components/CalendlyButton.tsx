// NEXT_PUBLIC_ values are inlined at build time, so this works in server and client components.
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ?? "";

/** "Book a 20-min call" link to the owner's Calendly. Renders nothing while the env var is empty. */
export default function CalendlyButton({ className }: { className?: string }) {
  if (!/^https:\/\//.test(CALENDLY_URL)) return null;
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-track="calendly"
    >
      Book a 20-min call <span aria-hidden="true">&#8599;</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

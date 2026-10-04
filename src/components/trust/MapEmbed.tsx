import styles from "./Trust.module.css";
import { siteConfig } from "@/lib/site-config";

/** Lazy Google Maps iframe for the office. Renders nothing until siteConfig.mapEmbedUrl is set. */
export default function MapEmbed({ className = styles.map }: { className?: string }) {
  const src = siteConfig.mapEmbedUrl.trim();
  if (!src) return null;
  return (
    <iframe
      src={src}
      title={`${siteConfig.name} office location on Google Maps`}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}

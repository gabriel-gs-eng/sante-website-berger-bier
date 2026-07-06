export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.6 21V13.2h2.2l.4-2.6h-2.6V8.9c0-.75.25-1.26 1.34-1.26h1.44V5.3c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.24-3.5 3.5v2h-2.3v2.6h2.3V21"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronIcon({
  direction,
  ...props
}: { direction: "left" | "right" } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
      className={`${direction === "right" ? "rotate-180" : ""} ${props.className ?? ""}`}
    >
      <path
        d="M15 5l-7 7 7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BeerGlassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 8h16l-1.6 30.4A3 3 0 0 1 25.4 41H18.6a3 3 0 0 1-3-2.6L14 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M15 15h14" stroke="currentColor" strokeWidth="2" />
      <path
        d="M30 17c4-1 6.5 3.5 3 6-2 1.5-4 1-4.6 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2c-5.46 0-9.9 4.43-9.9 9.9 0 1.75.46 3.45 1.33 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9a9.86 9.86 0 0 0-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.04 8.04 0 0 1 2.37 5.73c0 4.46-3.63 8.09-8.1 8.09a8.2 8.2 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.98-.2-.31a8.03 8.03 0 0 1-1.26-4.3c0-4.46 3.63-8.09 8.1-8.09Zm-4.6 4.32c-.22 0-.57.08-.87.4-.3.33-1.14 1.12-1.14 2.73s1.17 3.17 1.33 3.39c.16.22 2.3 3.52 5.58 4.8 2.73 1.06 3.29.85 3.88.8.59-.05 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.22-.63-.38-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.26-.19.22-.37.24-.69.08-.32-.16-1.36-.5-2.58-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.22.05-.4-.03-.56-.08-.16-.71-1.78-1-2.43-.26-.6-.53-.52-.72-.53l-.62-.01Z" />
    </svg>
  );
}

export function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.82 6.2 20.36l1.11-6.46-4.7-4.58 6.49-.94L12 2.5Z" />
    </svg>
  );
}

export function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 12a4 4 0 0 1 4-4c1.05 0 1.98.36 2.72 1.05l-1.15 1.15A2.5 2.5 0 0 0 12 9.5 2.5 2.5 0 1 0 14.4 13H12v-1.6h4.2c.06.32.1.66.1 1a4.3 4.3 0 0 1-4.3 4.3A4.3 4.3 0 0 1 8 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

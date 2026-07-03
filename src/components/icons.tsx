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

import Link from "next/link";
import { FacebookIcon, GoogleIcon, InstagramIcon } from "./icons";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Google", href: "https://google.com", Icon: GoogleIcon },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#topo"
      className={`font-display text-xl font-bold tracking-wide text-cream ${className}`}
    >
      Berger<span className="text-amber-light">Bier</span>
    </Link>
  );
}

export default function Header() {
  return (
    <header
      id="topo"
      className="absolute inset-x-0 top-0 z-30 w-full px-5 py-5 sm:px-8 sm:py-6"
    >
      {/* Mobile: centered static logo, no social icons */}
      <div className="flex items-center justify-center md:hidden">
        <Logo />
      </div>

      {/* Desktop: logo left, social icons right */}
      <div className="hidden items-center justify-between md:flex">
        <Logo />
        <nav aria-label="Redes sociais" className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-amber-light hover:text-amber-light"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

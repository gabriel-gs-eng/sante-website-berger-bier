import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/cervejariabergerbier/",
    icon: "/icons/instagram.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/cervejariabergerbier/?locale=gl_ES",
    icon: "/icons/facebook.svg",
  },
  {
    label: "Google",
    href: "https://www.google.com/maps/place/Cervejaria+Bergerbier/data=!4m2!3m1!1s0x0:0x7f09409ff8c93803?sa=X&ved=1t:2428&ictx=111",
    icon: "/icons/google.svg",
  },
];

function Logo({ imgClassName = "h-14 w-auto sm:h-16" }: { imgClassName?: string }) {
  return (
    <Link href="#topo" className="block">
      <Image
        src="/brand/logo.webp"
        alt="Berger Bier — Cervejaria Artesanal"
        width={317}
        height={175}
        priority
        className={imgClassName}
      />
    </Link>
  );
}

export default function Header() {
  return (
    <header
      id="topo"
      className="fixed inset-x-0 top-0 z-30 w-full bg-bark/70 px-5 py-5 backdrop-blur-sm sm:px-8 sm:py-6 md:absolute md:bg-transparent md:backdrop-blur-none"
    >
      {/* Mobile: centered static logo, no social icons — width reduced 35% from desktop size */}
      <div className="flex items-center justify-center md:hidden">
        <Logo imgClassName="h-[2.275rem] w-auto sm:h-[2.6rem]" />
      </div>

      {/* Desktop: logo centered, social icons right */}
      <div className="hidden grid-cols-[1fr_auto_1fr] items-center md:grid">
        <div />
        <Logo />
        <nav aria-label="Redes sociais" className="flex items-center justify-end gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 bg-white transition hover:scale-105 hover:border-amber-light"
            >
              <Image src={icon} alt="" aria-hidden="true" width={20} height={20} className="h-5 w-5" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

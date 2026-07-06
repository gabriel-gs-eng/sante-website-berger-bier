import Image from "next/image";

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

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-bark px-6 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Image
            src="/brand/logo.webp"
            alt="Berger Bier"
            width={317}
            height={175}
            className="h-14 w-auto"
          />
          <p className="mt-2 max-w-sm text-sm text-cream-dark/70">
            Cultura cervejeira desde 2007, com raízes familiares que remontam a 1872.
          </p>
        </div>

        <nav aria-label="Redes sociais" className="flex items-center gap-4">
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

      <div className="mx-auto mt-10 max-w-6xl border-t border-cream/10 pt-6 text-xs text-cream-dark/60">
        <p>
          Beba com moderação. Venda proibida para menores de 18 anos. © {new Date().getFullYear()}{" "}
          Berger Bier. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

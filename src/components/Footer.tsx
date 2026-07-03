import Image from "next/image";
import { FacebookIcon, GoogleIcon, InstagramIcon } from "./icons";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Google", href: "https://google.com", Icon: GoogleIcon },
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
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:border-amber-light hover:text-amber-light"
            >
              <Icon className="h-4 w-4" />
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

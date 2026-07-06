import Image from "next/image";

export default function SellWithUs() {
  return (
    <section id="vender" className="bg-bark px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-3xl uppercase leading-none text-cream sm:text-4xl">
          Quer vender a Berger Bier no seu local?
        </h2>
        <p className="mt-4 text-cream-dark/80 sm:text-lg">
          Entre em contato no WhatsApp e solicite o seu orçamento!
        </p>

        <a
          href="https://wa.me/5527999322356"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-[10.8px] rounded-full bg-[#25D366] px-[21.6px] py-[8.1px] text-[13.5px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#1EBE5A]"
        >
          <Image
            src="/icons/whatsapp.svg"
            alt=""
            aria-hidden="true"
            width={19}
            height={19}
            className="h-[18.9px] w-[18.9px]"
          />
          Entrar em contato
        </a>
      </div>
    </section>
  );
}

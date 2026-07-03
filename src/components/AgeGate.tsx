"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "bergerbier:age-verified";

type Status = "checking" | "hidden" | "asking" | "blocked";

export default function AgeGate() {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of a browser-only API (localStorage) on mount; there is no way to know this synchronously during SSR.
    setStatus(window.localStorage.getItem(STORAGE_KEY) === "yes" ? "hidden" : "asking");
  }, []);

  if (status === "checking" || status === "hidden") return null;

  const confirm = () => {
    window.localStorage.setItem(STORAGE_KEY, "yes");
    setStatus("hidden");
  };

  const deny = () => setStatus("blocked");
  const reconsider = () => setStatus("asking");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Confirmação de idade"
      className="fixed inset-0 z-50 flex items-center justify-center bg-bark px-6 py-10 text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(178,118,25,0.18),transparent_60%)]" />

      {status === "asking" && (
        <div className="relative flex w-full max-w-sm flex-col items-center gap-8 sm:max-w-md">
          <span className="font-display text-3xl uppercase tracking-wide text-amber sm:text-4xl">
            Berger Bier
          </span>
          <div className="flex flex-col items-center gap-3">
            <p className="font-display text-2xl uppercase text-cream sm:text-3xl">
              Você tem mais de 18 anos?
            </p>
            <p className="text-sm text-cream-dark/80">
              Este site contém conteúdo sobre bebida alcoólica. É necessário confirmar
              sua idade para continuar.
            </p>
          </div>
          <div className="flex w-full gap-4 sm:w-auto sm:gap-6">
            <button
              type="button"
              onClick={confirm}
              className="flex-1 rounded-full bg-crimson px-8 py-3 font-semibold uppercase tracking-wide text-cream transition hover:bg-garnet sm:flex-none sm:px-10"
            >
              Sim
            </button>
            <button
              type="button"
              onClick={deny}
              className="flex-1 rounded-full border border-cream-dark/40 px-8 py-3 font-semibold uppercase tracking-wide text-cream transition hover:border-cream-dark hover:bg-white/5 sm:flex-none sm:px-10"
            >
              Não
            </button>
          </div>
        </div>
      )}

      {status === "blocked" && (
        <div className="relative flex w-full max-w-sm flex-col items-center gap-6 sm:max-w-md">
          <p className="font-display text-2xl uppercase text-cream">
            Conteúdo restrito
          </p>
          <p className="text-sm text-cream-dark/80">
            Este site é destinado exclusivamente a maiores de 18 anos. Volte quando
            tiver a idade permitida para consumo de bebidas alcoólicas.
          </p>
          <button
            type="button"
            onClick={reconsider}
            className="rounded-full border border-cream-dark/40 px-8 py-3 font-semibold uppercase tracking-wide text-cream transition hover:border-cream-dark hover:bg-white/5"
          >
            Voltar
          </button>
        </div>
      )}
    </div>
  );
}

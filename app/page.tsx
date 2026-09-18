import { storeConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
      <div className="max-w-xl">
        <p className="text-sm font-medium text-pine">Módulo 1 — estrutura base</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {storeConfig.tagline}
        </h1>
        <p className="mt-4 text-ink/70">
          Este é o esqueleto inicial da loja {storeConfig.name}: header,
          footer, tipografia e cores já configurados. A partir do próximo
          módulo entram categorias, produtos em destaque, depoimentos e o
          restante da homepage.
        </p>
      </div>
    </section>
  );
}


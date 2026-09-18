import Link from "next/link";
import { storeConfig } from "@/lib/config";

const columns = [
  {
    title: "Institucional",
    links: [
      { label: "Sobre a loja", href: "/sobre" },
      { label: "Perguntas frequentes", href: "/faq" },
      { label: "Fale conosco", href: "/contato" },
    ],
  },
  {
    title: "Políticas",
    links: [
      { label: "Trocas e devoluções", href: "/politicas/trocas" },
      { label: "Privacidade", href: "/politicas/privacidade" },
      { label: "Termos de uso", href: "/politicas/termos" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "Meus pedidos", href: "/conta/pedidos" },
      { label: "Formas de pagamento", href: "/formas-de-pagamento" },
      { label: "Prazo de entrega", href: "/entrega" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              {storeConfig.name}
            </p>
            <p className="mt-2 max-w-[220px] text-sm text-ink/60">
              {storeConfig.tagline}
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium text-ink">{column.title}</p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink/60 transition-colors hover:text-pine"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-ink/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {storeConfig.name}. Todos os
            direitos reservados.
          </p>
          <p>{storeConfig.contactEmail}</p>
        </div>
      </div>
    </footer>
  );
}

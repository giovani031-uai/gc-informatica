"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { storeConfig } from "@/lib/config";

const categories = [
  { label: "Notebooks", href: "/categoria/notebooks" },
  { label: "Periféricos", href: "/categoria/perifericos" },
  { label: "Componentes", href: "/categoria/componentes" },
  { label: "Acessórios", href: "/categoria/acessorios" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink"
        >
          {storeConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="text-sm text-ink/70 transition-colors hover:text-pine"
            >
              {category.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 md:flex">
          <Search size={16} className="text-ink/40" />
          <input
            type="search"
            placeholder="Buscar produtos"
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-1">
          <Link
            href="/conta"
            className="hidden rounded-full p-2 text-ink/70 transition-colors hover:bg-surface hover:text-ink sm:inline-flex"
            aria-label="Minha conta"
          >
            <User size={20} />
          </Link>
          <Link
            href="/carrinho"
            className="relative rounded-full p-2 text-ink/70 transition-colors hover:bg-surface hover:text-ink"
            aria-label="Carrinho"
          >
            <ShoppingCart size={20} />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full p-2 text-ink/70 transition-colors hover:bg-surface hover:text-ink md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-paper px-4 pb-4 pt-2 md:hidden">
          <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
            <Search size={16} className="text-ink/40" />
            <input
              type="search"
              placeholder="Buscar produtos"
              className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
            />
          </div>
          <nav className="flex flex-col gap-1">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-ink/80 transition-colors hover:bg-surface"
              >
                {category.label}
              </Link>
            ))}
            <Link
              href="/conta"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-ink/80 transition-colors hover:bg-surface"
            >
              Minha conta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

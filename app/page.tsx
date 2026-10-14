import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, ChartColumn, Heart, TriangleAlert, Users } from "lucide-react";
import { CardCategoria } from "@/components/CardCategoria";
import { IconeCirculo, LinkSeta, TituloSecao } from "@/components/ui";
import { passosAjuda, perfis, situacoes } from "@/data/home";
import { categorias } from "@/lib/categorias";
import type { Cor } from "@/lib/cores";

/** Atalhos da seção "Para saber mais". */
const saibaMais: { titulo: string; texto: string; href: string; icone: typeof Brain; cor: Cor }[] = [
  {
    titulo: "Entenda o TEA",
    texto: "O que é, como se manifesta e mitos comuns, em linguagem simples.",
    href: "/entenda",
    icone: Brain,
    cor: "lilas",
  },
  {
    titulo: "Dados e fontes",
    texto: "Números e informações de instituições oficiais, com referência.",
    href: "/dados",
    icone: ChartColumn,
    cor: "azul",
  },
  {
    titulo: "Profissionais",
    texto: "Quem faz o quê no cuidado de crianças com TEA em Teresina.",
    href: "/profissionais",
    icone: Users,
    cor: "verde",
  },
];

export default function Inicio() {
  return (
    <>
      {/* 1. Topo */}
      <section aria-labelledby="titulo-inicio" className="relative overflow-hidden bg-fundo-suave">
        <div className="container-pagina relative z-10 grid lg:min-h-[30rem] lg:grid-cols-12">
          <div className="py-14 lg:col-span-6 lg:py-20">
            <h1 id="titulo-inicio" className="text-display">
              Informação confiável.
              <br />
              Cuidado que <span className="text-azul">acolhe</span>.
            </h1>
            <p className="mt-5 max-w-lg text-lead text-texto">
              Orientações práticas e uma rede de apoio para o dia a dia de crianças com
              Transtorno do Espectro Autista (TEA).
            </p>

            <p className="mt-9 font-titulo text-nota font-bold text-marinho">Comece por aqui:</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {perfis.map(({ rotulo, href, icone: Icone, cor }) => (
                <li key={href}>
                  <Link href={href} className={`botao text-branco hover:text-branco hover:opacity-90 ${cor}`}>
                    <Icone aria-hidden="true" className="h-5 w-5" />
                    {rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Foto: à direita no computador, abaixo do texto no celular */}
        <div className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]">
          <Image
            src="/images/hero-mae-e-filho.jpg"
            alt="Mãe e filho sorrindo juntos no sofá de casa."
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-[30%_40%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-2/5 bg-linear-to-r from-fundo-suave to-transparent lg:block"
          />
          <p className="absolute right-4 bottom-4 max-w-60 rotate-[-4deg] rounded-[48%_52%_44%_56%/56%_46%_54%_44%] bg-azul-circ px-7 py-6 font-manuscrita text-manuscrito text-marinho sm:right-8 lg:right-10 lg:bottom-10">
            Cada criança tem seu tempo, suas formas e um jeito único de ver o mundo.
          </p>
        </div>
      </section>

      {/* 2. Biblioteca */}
      <section aria-labelledby="titulo-biblioteca" className="container-pagina mt-20">
        <TituloSecao
          id="titulo-biblioteca"
          titulo="Explore a biblioteca"
          subtitulo="Conteúdos organizados por temas, com orientações para o dia a dia."
          link={{ href: "/biblioteca", rotulo: "Ver todos os conteúdos" }}
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((c) => (
            <li key={c.id}>
              <CardCategoria categoria={c} />
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Meu filho está... + Precisa de ajuda agora? */}
      <div className="container-pagina mt-20 grid gap-6 lg:grid-cols-[1.45fr_1fr]">
        <section aria-labelledby="titulo-situacoes" className="rounded-bloco bg-azul-bg p-6 sm:p-8">
          <h2 id="titulo-situacoes" className="text-h2">Meu filho está...</h2>
          <p className="mt-1.5 text-texto-suave">Orientações para situações comuns do dia a dia.</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {situacoes.map((s) => (
              <li key={s.rotulo}>
                <Link
                  href={s.href}
                  className="group flex min-h-14 items-center gap-3 rounded-campo bg-fundo px-3 py-2 text-marinho no-underline shadow-suave hover:text-azul"
                >
                  <IconeCirculo icone={s.icone} cor={s.cor} tamanho="sm" />
                  <span className="flex-1 font-titulo text-nota font-semibold group-hover:underline">{s.rotulo}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 text-texto-suave" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <LinkSeta href="/biblioteca#crises-e-regulacao-sensorial">Ver mais situações</LinkSeta>
          </p>
        </section>

        <section
          aria-labelledby="titulo-ajuda"
          className="rounded-bloco border border-alerta-borda bg-alerta-bg p-6 sm:p-8"
        >
          <h2 id="titulo-ajuda" className="flex items-center gap-3 text-h2 text-alerta-titulo">
            <TriangleAlert aria-hidden="true" className="h-7 w-7 shrink-0" strokeWidth={2} />
            Precisa de ajuda agora?
          </h2>
          <p className="mt-1.5 text-texto">Se a criança está em crise ou muito sobrecarregada:</p>
          <ol className="mt-5 space-y-3">
            {passosAjuda.map((passo, i) => (
              <li key={passo} className="flex items-center gap-3 font-titulo text-nota font-semibold text-marinho">
                <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-alerta-num text-mini font-extrabold">
                  {i + 1}
                </span>
                {passo}
              </li>
            ))}
          </ol>
          <p className="mt-5">
            <LinkSeta href="/biblioteca/crise-e-sobrecarga-o-que-fazer">Ver orientação completa</LinkSeta>
          </p>
          <p className="mt-5 border-t border-alerta-borda pt-4 text-nota text-texto">
            Em emergência, ligue{" "}
            <a href="tel:192" className="font-bold">SAMU 192</a>. Apoio emocional:{" "}
            <a href="tel:188" className="font-bold">CVV 188</a>.
          </p>
        </section>
      </div>

      {/* 4. Para saber mais */}
      <section aria-labelledby="titulo-saiba-mais" className="container-pagina mt-20">
        <TituloSecao id="titulo-saiba-mais" titulo="Para saber mais" />
        <ul className="grid gap-4 md:grid-cols-3">
          {saibaMais.map(({ titulo, texto, href, icone, cor }) => (
            <li key={href}>
              <Link href={href} className="card group flex h-full flex-col gap-4 p-6 no-underline hover:shadow-elevada">
                <IconeCirculo icone={icone} cor={cor} />
                <span>
                  <span className="block font-titulo text-h3 font-extrabold text-marinho group-hover:underline">{titulo}</span>
                  <span className="mt-1.5 block text-nota text-texto-suave">{texto}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Rede de apoio */}
      <section aria-labelledby="titulo-rede" className="container-pagina mt-20">
        <div className="grid overflow-hidden rounded-bloco bg-verde-bg lg:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col items-start justify-center gap-5 p-6 sm:p-10">
            <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-verde-circ">
              <Heart className="h-7 w-7 fill-verde-agua text-verde-tom" strokeWidth={1.6} />
            </span>
            <div>
              <h2 id="titulo-rede" className="text-h2">Rede de apoio e AMA-PI</h2>
              <p className="mt-1.5 max-w-xl text-texto">
                Conheça serviços, iniciativas e canais de atendimento que podem apoiar você e sua
                família em Teresina.
              </p>
            </div>
            <Link href="/rede-de-apoio" className="botao botao-escuro">
              Ver rede de apoio <ArrowRight aria-hidden="true" className="h-4.5 w-4.5" />
            </Link>
          </div>
          <div className="relative h-56 lg:h-auto">
            <Image src="/images/rede-de-apoio.jpg" alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}

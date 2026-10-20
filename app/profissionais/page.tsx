import type { Metadata } from "next";
import Link from "next/link";
import { Users } from "lucide-react";
import { CabecalhoPagina, Nota } from "@/components/ui";

export const metadata: Metadata = {
  title: "Profissionais",
  description:
    "Quem faz o quê no cuidado de crianças com TEA e como chegar a esses profissionais pelo SUS em Teresina - PI.",
};

const areas = [
  ["Neuropediatria e psiquiatria", "Médicos que podem fazer o diagnóstico e acompanhar a saúde."],
  ["Psicologia", "Avaliação, terapias e orientação para a família."],
  ["Fonoaudiologia", "Comunicação, linguagem, fala e alimentação."],
  ["Terapia ocupacional", "Autonomia, questões sensoriais e atividades do dia a dia."],
  ["Odontologia", "Saúde bucal com atendimento adaptado."],
  ["Cuidadoras(es)", "Apoio nas atividades da rotina, em casa ou na escola."],
];

export default function Profissionais() {
  return (
    <>
      <CabecalhoPagina rotulo="Profissionais" titulo="Quem cuida e como chegar" icone={Users}>
        <p>
          O cuidado de uma criança com TEA costuma envolver profissionais de áreas diferentes.
          Veja o que cada um faz e por onde começar em Teresina.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <section aria-labelledby="quem-faz" className="rounded-bloco bg-fundo-suave p-6 sm:p-8">
          <h2 id="quem-faz" className="text-h3">
            Quem faz o quê
          </h2>
          <dl className="mt-5 grid gap-5 sm:grid-cols-2">
            {areas.map(([t, d]) => (
              <div key={t}>
                <dt className="font-titulo font-bold text-marinho">{t}</dt>
                <dd className="mt-0.5 text-nota text-texto-suave">{d}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div>
          <Nota titulo="Pelo SUS" cor="verde">
            <p>
              O caminho começa na Unidade Básica de Saúde (UBS) mais perto de casa. A equipe da UBS
              pode encaminhar para serviços especializados, como o Cetea e o CEIR. Veja a{" "}
              <Link href="/rede-de-apoio">rede de apoio em Teresina</Link>.
            </p>
          </Nota>
        </div>
      </div>
    </>
  );
}

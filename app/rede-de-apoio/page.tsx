import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Clock, ExternalLink, HeartHandshake, Hospital, MapPin, Phone, Scale, School } from "lucide-react";
import { CabecalhoPagina, Fontes, IconeCirculo } from "@/components/ui";
import { fontes } from "@/lib/fontes";
import type { Cor } from "@/lib/cores";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Rede de apoio",
  description:
    "Serviços, instituições e canais de atendimento para pessoas autistas e suas famílias em Teresina - PI, incluindo a AMA-PI.",
};

type Servico = {
  nome: string;
  tipo: string;
  descricao: string;
  endereco?: string;
  telefones?: string[];
  horario?: string;
  url?: string;
  icone: LucideIcon;
  cor: Cor;
};

// Informações conferidas nos sites oficiais em 20 de outubro de 2026.
// Endereços, telefones e horários podem mudar: confirme direto com cada instituição.
const servicos: Servico[] = [
  {
    nome: "AMA-PI — Associação de Amigos dos Autistas do Piauí",
    tipo: "Associação sem fins lucrativos",
    descricao:
      "Organização formada por famílias, amigos e pessoas autistas, em Teresina desde 2000. Oferece atendimento multiprofissional e ações para promover autonomia e dignidade da pessoa autista e da família.",
    endereco: "Rua José Clemente Pereira, 2384, Primavera, Teresina - PI",
    telefones: ["(86) 99520-0940"],
    horario: "Das 8h às 11h e das 14h às 17h",
    icone: HeartHandshake,
    cor: "verde",
  },
  {
    nome: "Cetea-PI — Centro Especializado em Transtorno do Espectro Autista",
    tipo: "Governo do Estado do Piauí · gratuito",
    descricao:
      "Centro público estadual com equipe de várias especialidades para diagnóstico e terapias. Para ser atendido, peça na UBS um encaminhamento para “consulta triagem Cetea-PI” e depois confirme pela central de marcação.",
    endereco: "Av. Higino Cunha, 1552, Cristo Rei, Teresina - PI",
    telefones: ["(86) 2222-7150 (central de marcação)"],
    horario: "Segunda a sexta, das 8h às 17h",
    url: "https://www.seid.pi.gov.br/blog/primeiro-centro-especializado-em-autismo-do-piaui-ja-realizou-10-mil-atendimentos/",
    icone: Building2,
    cor: "lilas",
  },
  {
    nome: "CEIR — Centro Integrado de Reabilitação",
    tipo: "Atendimento pelo SUS",
    descricao:
      "Centro de reabilitação com equipe multiprofissional, que também atende pessoas com TEA. O acesso é por encaminhamento médico da rede pública, a partir da Unidade Básica de Saúde.",
    endereco: "Av. Higino Cunha, 1515, Ilhotas, Teresina - PI",
    telefones: ["(86) 3198-1500"],
    horario: "Segunda a sexta, das 7h às 17h",
    url: "https://www.reabilitar.org.br/ceir/como-chegar/",
    icone: Hospital,
    cor: "azul",
  },
  {
    nome: "Unidade Básica de Saúde (UBS)",
    tipo: "Porta de entrada do SUS",
    descricao:
      "O primeiro passo para avaliação e encaminhamento. Procure a UBS mais perto de casa e conte o que você tem observado. Leve RG, CPF, cartão do SUS e comprovante de residência.",
    icone: Hospital,
    cor: "rosa",
  },
  {
    nome: "Defensoria Pública do Estado do Piauí",
    tipo: "Orientação jurídica gratuita",
    descricao: "Pode ajudar quando um direito for negado, como matrícula escolar, tratamento ou atendimento prioritário.",
    endereco: "Rua Nogueira Tapety, 138, Noivos, Teresina - PI",
    horario: "Segunda a sexta, das 8h às 14h",
    url: "https://www.defensoria.pi.def.br/",
    icone: Scale,
    cor: "amarelo",
  },
  {
    nome: "Secretaria de Educação e escola",
    tipo: "Inclusão escolar",
    descricao:
      "Para dúvidas sobre matrícula, atendimento educacional especializado e acompanhante em sala, procure a direção da escola e a secretaria de educação responsável.",
    icone: School,
    cor: "azul",
  },
];

export default function RedeDeApoio() {
  return (
    <>
      <CabecalhoPagina rotulo="Rede de apoio" titulo="Rede de apoio em Teresina" icone={HeartHandshake} cor="verde">
        <p>
          Serviços, instituições e canais que podem apoiar pessoas autistas e suas famílias em
          Teresina e região.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10">
        <div className="grid overflow-hidden rounded-bloco bg-verde-bg md:grid-cols-[1fr_22rem]">
          <div className="p-6 sm:p-8">
            <p className="font-manuscrita text-manuscrito text-azul-escuro">Ninguém precisa caminhar sozinho.</p>
            <p className="mt-3 max-w-texto">
              A rede de apoio reúne serviços de saúde, educação, assistência e associações de
              famílias. Conhecer esses caminhos ajuda a encontrar atendimento, informação e
              acolhimento.
            </p>
          </div>
          <div className="relative h-48 md:h-auto">
            <Image src="/images/rede-de-apoio.jpg" alt="Mãos de várias pessoas unidas no centro de uma roda, em sinal de apoio." fill sizes="(min-width: 768px) 22rem, 100vw" className="object-cover" />
          </div>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {servicos.map((s) => (
            <li key={s.nome} className="card flex gap-4 p-5">
              <IconeCirculo icone={s.icone} cor={s.cor} />
              <div>
                <p className="text-mini font-bold text-texto-suave uppercase">{s.tipo}</p>
                <h2 className="mt-1 text-h4">{s.nome}</h2>
                <p className="mt-2 text-nota text-texto">{s.descricao}</p>
                {(s.endereco || s.telefones || s.horario) && (
                  <ul className="mt-3 space-y-1.5 text-nota text-texto">
                    {s.endereco && (
                      <li className="flex gap-2">
                        <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-texto-suave" />
                        <span>
                          <span className="sr-only">Endereço: </span>
                          {s.endereco}
                        </span>
                      </li>
                    )}
                    {s.telefones?.map((t) => (
                      <li key={t} className="flex gap-2">
                        <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-texto-suave" />
                        <span>
                          <span className="sr-only">Telefone: </span>
                          <a href={`tel:+55${t.replace(/\D/g, "")}`}>{t}</a>
                        </span>
                      </li>
                    ))}
                    {s.horario && (
                      <li className="flex gap-2">
                        <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-texto-suave" />
                        <span>
                          <span className="sr-only">Horário: </span>
                          {s.horario}
                        </span>
                      </li>
                    )}
                  </ul>
                )}
                {s.url && (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-nota font-bold">
                    Site oficial
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <section aria-labelledby="emergencia" className="mt-10 rounded-bloco border border-alerta-borda bg-alerta-bg p-6 sm:p-8">
          <h2 id="emergencia" className="flex items-center gap-3 text-h3">
            <Phone aria-hidden="true" className="h-6 w-6 text-alerta-titulo" />
            Em caso de emergência
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li>
              <a href="tel:192" className="font-titulo text-h3 font-extrabold no-underline">SAMU 192</a>
              <p className="text-nota">Emergência médica, 24 horas.</p>
            </li>
            <li>
              <a href="tel:188" className="font-titulo text-h3 font-extrabold no-underline">CVV 188</a>
              <p className="text-nota">Apoio emocional gratuito, 24 horas.</p>
            </li>
          </ul>
        </section>

        <p className="mt-8 max-w-texto text-nota text-texto-suave">
          Informações conferidas nos sites oficiais em outubro de 2026. Endereços, telefones e
          horários podem mudar: confirme diretamente com cada instituição antes de ir.
        </p>

        <Fontes fontes={[fontes.amaPi, fontes.ceir, fontes.cetea, fontes.defensoriaPi, fontes.cvv]} />
      </div>
    </>
  );
}

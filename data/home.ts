import {
  Frown,
  GraduationCap,
  Heart,
  Moon,
  Toothbrush,
  Users,
  Utensils,
  Volume2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Cor } from "@/lib/cores";

// ---------------------------------------------------------------
// Conteúdo da página inicial. Edite aqui para trocar textos e links.
// ---------------------------------------------------------------

/** Botões de perfil logo abaixo do topo. */
export const perfis: { rotulo: string; href: string; icone: LucideIcon; cor: string }[] = [
  { rotulo: "Sou Pai/Mãe", href: "/para-familias", icone: Users, cor: "bg-azul-tom" },
  { rotulo: "Sou Professor", href: "/para-educadores", icone: GraduationCap, cor: "bg-verde-tom" },
  { rotulo: "Sou Cuidador", href: "/para-cuidadores", icone: Heart, cor: "bg-lilas-tom" },
];

/** "Meu filho está..." — cada item leva a uma página de orientação. */
export const situacoes: { rotulo: string; href: string; icone: LucideIcon; cor: Cor }[] = [
  { rotulo: "Muito agitado", href: "/biblioteca/muito-agitado", icone: Zap, cor: "amarelo" },
  { rotulo: "Não quer escovar os dentes", href: "/biblioteca/escovacao-dos-dentes", icone: Toothbrush, cor: "azul" },
  { rotulo: "Tendo uma crise", href: "/biblioteca/crise-e-sobrecarga-o-que-fazer", icone: Frown, cor: "rosa" },
  { rotulo: "Não quer comer", href: "/biblioteca/seletividade-alimentar", icone: Utensils, cor: "amarelo" },
  { rotulo: "Não consegue dormir", href: "/biblioteca/hora-de-dormir", icone: Moon, cor: "azul" },
  { rotulo: "Com sensibilidade a sons", href: "/biblioteca/sensibilidade-a-sons", icone: Volume2, cor: "lilas" },
];

/** Passos da caixa "Precisa de ajuda agora?" */
export const passosAjuda = [
  "Mantenha a calma",
  "Reduza estímulos",
  "Dê espaço",
  "Fale pouco e de forma simples",
  "Observe possíveis gatilhos",
];

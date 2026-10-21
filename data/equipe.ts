// EDITE AQUI: nome e e-mail de cada integrante do grupo.
// A lista aparece na página Sobre, na seção "Quem somos", e serve como contato do projeto.
export const equipe: { nome: string; email: string }[] = [
  { nome: "Carlos Saulo Fernandes de Siqueira", email: "carlossaulofsiqueira@gmail.com" },
  { nome: "João Pedro Soares Oliveira", email: "joaopedrosoaresoliveira2006@gmail.com" },
  { nome: "Jose Wilson Oliveira Rodrigues", email: "joseoliveirarodrigues65@gmail.com" },
  { nome: "Leonardo Santana Fernandes Segundo", email: "lsantan30@gmail.com" },
  { nome: "Luis Guilherme de Oliveira Caminha Leal", email: "lg3545396@gmail.com" },
  { nome: "Ramon Frota Assuncao", email: "ramoncorporativoexe@gmail.com" },
];

/** Há pelo menos um e-mail para contato? Controla os links "Fale conosco" do site. */
export const temContato = equipe.some((p) => p.email);

export const curso = "Ciência da Computação";
export const instituicao = "Uninassau";
export const orientacao = "Profa. Alice Alencar";
export const parceria = "AMA-PI (Associação de Amigos dos Autistas do Piauí)";

// Redes sociais do projeto. Deixe "" enquanto a conta não existir:
// o ícone só aparece no rodapé quando tiver link.
export const redesSociais = {
  instagram: "",
  youtube: "",
  spotify: "",
};

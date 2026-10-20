# Conexões que Incluem: Guia Digital de Apoio ao Autismo

Site informativo sobre o Transtorno do Espectro Autista (TEA) para pessoas autistas, familiares, cuidadores e quem quer aprender. Projeto acadêmico.

Feito com Next.js (App Router) + TypeScript, Tailwind CSS. Publicado na Vercel.

## Rodar no seu computador

```bash
npm install        # só na primeira vez
npm run dev        # abre em http://localhost:3000
```

## Onde editar cada coisa

| O que | Arquivo |
|---|---|
| Cores, fontes e tamanhos (design tokens) | `app/globals.css` |
| Itens do menu e telefones de emergência | `lib/navegacao.ts` |
| Membros do grupo, instituição e e-mail de contato | `data/equipe.ts` |
| Artigos da biblioteca | `content/biblioteca/*.mdx` (veja o modelo `_modelo.mdx`) |
| Fontes oficiais citadas | `lib/fontes.ts` |

### Adicionar um artigo novo

1. Copie `content/biblioteca/_modelo.mdx` e renomeie (ex.: `banho-e-higiene.mdx`). Use só letras minúsculas, números e hífens.
2. Preencha o bloco `metadata` (título, resumo, categoria, data e fontes).
3. Escreva o texto em Markdown. O artigo aparece sozinho na Biblioteca.

## Acessibilidade

- Botão "Reduzir estímulos" e controle de tamanho do texto em todas as páginas. A escolha fica salva no navegador.
- Respeita `prefers-reduced-motion`.
- Contraste WCAG AA verificado com axe-core nos modos normal, reduzido e texto maior.
- Link "Pular para o conteúdo", foco visível e HTML semântico.

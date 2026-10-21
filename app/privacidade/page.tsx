import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { CabecalhoPagina, Fontes, ListaMarcada, Secao } from "@/components/ui";
import Link from "next/link";
import { temContato } from "@/data/equipe";
import { fontes } from "@/lib/fontes";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "O Conexões que Incluem não coleta dados pessoais e não usa cookies de rastreamento.",
};

export default function Privacidade() {
  return (
    <>
      <CabecalhoPagina rotulo="Privacidade" titulo="Política de Privacidade" icone={ShieldCheck} cor="verde">
        <p>Em poucas palavras: este site não coleta dados pessoais de quem visita.</p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10 max-w-texto">
        <p className="mb-8 text-nota text-texto-suave">Última atualização: 20 de outubro de 2026.</p>

        <Secao id="dados" titulo="Dados pessoais">
          <ListaMarcada
            cor="verde"
            itens={[
              "Não pedimos cadastro, login ou qualquer formulário com seus dados.",
              "Não guardamos nome, e-mail, telefone, endereço ou informações de saúde.",
              "Não vendemos nem compartilhamos informações de quem visita o site.",
            ]}
          />
        </Secao>

        <Secao id="cookies" titulo="Cookies">
          <p>
            O Conexões que Incluem não usa cookies de rastreamento nem de publicidade. As
            preferências de tamanho do texto e de redução de estímulos ficam salvas só no seu
            navegador e não são enviadas para nós. Você pode apagá-las limpando os dados do site no
            navegador.
          </p>
        </Secao>

        <Secao id="links" titulo="Links para outros sites">
          <p>
            Algumas páginas têm links para sites oficiais, como o do Ministério da Saúde ou o da
            AMA-PI. Ao abrir esses links, vale a política de privacidade de cada um deles.
          </p>
        </Secao>

        {temContato && (
          <Secao id="duvidas" titulo="Dúvidas">
            <p>
              Escreva para a equipe: os e-mails estão na página{" "}
              <Link href="/sobre#contato">Sobre o projeto</Link>.
            </p>
          </Secao>
        )}

        <Fontes fontes={[fontes.lgpd]} />
      </div>
    </>
  );
}

# Site DIB — entrega para Cloudflare Workers

Esta pasta contém o rascunho do site da lista cívica Democratici in Brasile para as eleições COMITES 2026 na circunscrição de São Paulo. É um site estático: `public/index.html`, `public/styles.css` e `public/assets/`. Não há processo de compilação nem API própria.

## Prévia e publicação

1. Extraia o ZIP e abra um terminal nesta pasta, onde está `wrangler.jsonc`.
2. Execute `npx wrangler dev` e confira a página local, imagens e links.
3. Depois da revisão da campanha, execute `npx wrangler deploy` na conta Cloudflare correta. A configuração publica apenas os arquivos de `public/` como ativos estáticos do Worker.
4. Teste primeiro no endereço de prévia/`workers.dev`. Associe `democratici.com.br` ao Worker como Custom Domain apenas quando for hora de substituir o site em construção, após conferir a configuração atual do domínio.

O arquivo `wrangler.jsonc` não define domínio nem rota. Se já houver um Worker para esse domínio, integre `public/` e a configuração de ativos ao projeto existente antes de fazer o deploy; não substitua a configuração atual sem revisá-la. O antigo `server.cjs` usado na prévia local não faz parte deste pacote e não é necessário no Cloudflare.

## Pontos de revisão antes de publicar

- Os 22 cards já incluem foto, dados básicos e minibio fornecidos pela campanha.
- A agenda presencial e as missões itinerantes, bem como a data de verificação no rodapé, são conteúdo estático. Revisar com a campanha antes de publicar e quando houver alterações do Consulado.
- O banner de fase é calculado no navegador com o fuso `America/Sao_Paulo`: apoio até 3/10/2026, inscrição até 4/11/2026 e chegada do voto ao Consulado até 4/12/2026. A troca de fase não altera automaticamente os demais textos da página.
- Conferir os destinos externos: aplicativo de inscrição (`escaesco.com.br/comites2026/`), e-mail eleitoral do Consulado, WhatsApp da Central, Instagram e Facebook.

## Estrutura

```text
wrangler.jsonc
README.md
public/
  index.html
  styles.css
  assets/
    (logo, ícone e fotos dos candidatos)
```

# Frutos do Amanhã — redesign "da semente ao fruto"

Nova versão do site, em andamento. Por enquanto só a **Home** (`index.html`) está pronta;
as outras páginas (`sobre.html`, `projetos.html`, `como-ajudar.html`, `transparencia.html`,
`noticias.html`, `contato.html`) vêm na próxima etapa — os links para elas já estão no menu.

## Como rodar

Não tem build. Abra a pasta **raiz do repositório** num servidor local, por exemplo:

- VS Code → extensão **Live Server** → clique com o botão direito em `redesign/index.html` → *Open with Live Server*
- ou no terminal, na raiz do repositório: `npx serve .` (ou `python -m http.server`) e acesse `/redesign/`

> Abrir o arquivo com duplo clique também funciona, mas as fotos e as fontes carregam melhor via servidor.

## Fotos

Enquanto as fotos reais não chegam, o site lê as imagens de `../fotos-provisorias/`
(pasta na raiz do repositório), com estes nomes:

`hero`, `pilar-educacao`, `pilar-cultura`, `pilar-esporte`, `pilar-empreendedorismo`,
`feirinha-1`, `feirinha-2`, `estudando-1`, `estudando-2`, `quermesse-1`, `quermesse-2`
(`.jpg`, `.jpeg`, `.png` ou `.webp`).

Se a foto não existe, aparece uma moldura hachurada escrito "foto provisória". Quando a foto
é salva com o nome certo, ela entra sozinha — sem mexer em código.

Para publicar: mova as fotos finais para `assets/img/fotos/` e troque `pastaFotos` em
`assets/js/nucleo.js`.

## Estrutura

```
redesign/
├── index.html
├── assets/
│   ├── css/  tokens.css (cores, fontes, espaços, easing) · base.css · components.css · home.css
│   ├── js/   nucleo.js (config, Lenis, fotos) · efeitos.js (compartilhado) · home.js
│   └── img/  logo.svg · favicon.svg · rasgo*.svg (bordas rasgadas) · pix-qr-exemplo.svg
```

## Bibliotecas (via CDN, com `defer`)

| Biblioteca | Para quê |
| --- | --- |
| GSAP + ScrollTrigger | raiz desenhada no scroll, galeria horizontal fixada, contadores, loader |
| GSAP SplitText | títulos revelados linha a linha com máscara |
| Lenis | rolagem suave (desligada no toque e com "reduzir movimento") |

Fontes: Fraunces (Google Fonts) e Satoshi (Fontshare).

## Acessibilidade e movimento

- Intro: fica na tela até a pessoa rolar (mouse, arrastar no celular ou seta/espaço/Enter no teclado). Aparece só na primeira visita da sessão.
- `prefers-reduced-motion`: sem intro animada, raiz já desenhada, números finais, galeria vira carrossel.
- Celular/toque: sem cursor customizado nem botões magnéticos; galeria com `scroll-snap`.
- Sem JavaScript: todo o conteúdo aparece normalmente.

## Pendências de conteúdo — [CONTEÚDO REAL AQUI]

- Fotos reais com autorização de imagem
- Confirmar números de impacto (~300/~250 do site atual × +144/+88)
- WhatsApp, e-mail, link do Facebook
- Chave Pix real (a atual é fictícia) e QR code real
- Imagem de compartilhamento `assets/img/og-home.jpg` (1200×630)

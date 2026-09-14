# Landing page — ONG Frutos do Amanhã

Página institucional estática (HTML + CSS + JS puro, sem build e sem dependências).
Abra `index.html` no navegador ou publique direto no GitHub Pages.

## Estrutura

```
.
├── index.html                  # marcação e conteúdo da página
├── assets/
│   ├── css/style.css           # estilos (tokens, seções e breakpoints)
│   ├── js/main.js              # menu mobile + botão "copiar chave PIX"
│   └── img/                    # fotos da ONG (ver assets/img/README.md)
└── README.md
```

## Seções

1. Hero — missão, slogan e foto de destaque
2. Missão e os 4 pilares (educação, cultura, esporte, empreendedorismo)
3. Projetos em destaque — Feirinha da Criança e Estudando para o Amanhã
4. Como ajudar — chave PIX (ilustrativa), itens aceitos e ponto de coleta
5. Notícias recentes — Quermesse Beneficente e outros eventos
6. Rodapé — endereço, telefone, redes sociais e menu secundário

Menu principal fixo (sticky) em todas as seções, com versão colapsável no mobile.

## Paleta

| Nome | Hex | Uso |
|---|---|---|
| Verde-copa | `#1F3D2B` | cabeçalho, rodapé, faixas escuras |
| Verde-broto | `#EEF3E2` | fundo principal |
| Amarelo-manga | `#F0A93B` | selos, números, ícones |
| Vermelho-acerola | `#D8492E` | exclusivo do CTA de doação |
| Azul-maré | `#1F5D6B` | links e rótulos informativos |
| Grafite-terra | `#262820` | texto do corpo |

Tipografia: **Fraunces** (títulos) e **Public Sans** (corpo), via Google Fonts.
Os valores ficam em `:root` no início de `assets/css/style.css`.

## Antes de publicar

- Trocar as fotos em `assets/img/` (nomes em `assets/img/README.md`).
- Substituir a **chave PIX ilustrativa** em `index.html` (`#pix-key`) pela real.
- Substituir o telefone `(13) 0000-0000` no rodapé.
- Ajustar o link do Facebook para a URL exata da página da ONG.
- Conferir as datas e textos da seção de notícias.

## Responsividade

Mobile primeiro; breakpoints em `700px` (tablet) e `960px` (desktop).

## Acessibilidade

Link "pular para o conteúdo", foco visível em amarelo-manga, menu operável por
teclado, `alt` em todas as imagens, contraste de texto ≥ 4.5:1 e aviso de cópia
do PIX anunciado via `aria-live`.

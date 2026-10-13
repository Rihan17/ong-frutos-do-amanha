# Site institucional — ONG Frutos do Amanhã

Site estático em HTML + CSS + JavaScript puro, sem build e sem dependências.
Abra `index.html` no navegador ou publique direto na Vercel ou no GitHub Pages.

## Estrutura

```
.
├── index.html                      # home
├── quem-somos.html · projetos.html · como-ajudar.html
├── noticias.html · contato.html · transparencia.html
├── voluntariado.html · solicitar-vaga.html
├── privacidade.html · termos.html · mapa-do-site.html · 404.html
├── projeto-*.html                  # páginas de projeto
├── noticia-*.html                  # posts de notícia
├── cadastro.html · login.html · confirmar-email.html
├── esqueci-senha.html · redefinir-senha.html
├── conta*.html                     # área do usuário
├── doar-sucesso.html · doar-pendente.html · doar-falha.html
├── admin*.html                     # painel administrativo
└── assets/
    ├── css/style.css               # tokens, componentes e breakpoints
    ├── js/main.js                  # menu e botão de copiar PIX
    ├── js/formularios.js           # validação de todos os formulários
    └── img/                        # fotos da ONG, logo e favicon
```

## Paleta

| Nome | Hex | Uso |
|---|---|---|
| Verde-copa | `#1F3D2B` | cabeçalho, rodapé, faixas escuras |
| Verde-broto | `#EEF3E2` | fundo principal |
| Amarelo-manga | `#F0A93B` | selos, números, faixa de vagas, foco de teclado |
| Vermelho-acerola | `#C23C22` | exclusivo do CTA de doação |
| Azul-maré | `#1F5D6B` | links e rótulos informativos |
| Grafite-terra | `#262820` | texto do corpo |

Tipografia: **Fraunces** (títulos) e **Public Sans** (corpo), via Google Fonts.
Os valores ficam em `:root` no início de `assets/css/style.css`.

## Responsividade e acessibilidade

Mobile primeiro, com breakpoints em `700px`, `960px` (painel) e `1040px`.
Link "pular para o conteúdo", foco visível em amarelo-manga, menu operável por
teclado, `alt` em todas as imagens, contraste de texto acima de 4,5:1,
mensagens de erro anunciadas por `aria-live` e tabela equivalente para o
gráfico do painel.

## Antes de publicar

- Substituir a **chave PIX ilustrativa** em `como-ajudar.html` (`#pix-key`) pela real.
- Substituir o telefone `(13) 0000-0000` (o WhatsApp já está com o número real).
- Confirmar os dados da ONG em `transparencia.html` (razão social, percentuais e números do ano).
- Confirmar os textos marcados como exemplo: missão, visão, valores, áreas de
  voluntariado, corpo das notícias e detalhes dos projetos.
- Conferir a **autorização de uso de imagem** de todas as crianças que aparecem nas fotos.
- Remover os blocos `.nota-dev` quando o back-end estiver conectado.

## Telas ainda sem back-end

Cadastro, login, recuperação de senha, doação pelo Mercado Pago, candidatura de
voluntário, solicitação de vaga e todo o painel administrativo validam os dados
no navegador e avisam que a gravação não está conectada. Nenhuma delas simula
sucesso. Os pontos de integração estão comentados em `assets/js/formularios.js`.

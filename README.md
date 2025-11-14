# Landing Page — Escola de Idiomas

Landing page estática em português (pt-BR) para uma escola de idiomas. O projeto apresenta a proposta da escola: 4 idiomas, metodologia de ensino, depoimentos, planos, CTAs para aula gratuita e newsletter, além de um bloco de contato com mapa.

## Objetivos do Projeto
- Apresentar a oferta da escola e seus diferenciais.
- Gerar leads via CTAs (aula experimental gratuita e assinatura de newsletter).
- Mostrar formatos de estudo: online, presencial e particular.
- Reforçar prova social com depoimentos e “números grandes”.
- Fornecer interface responsiva, rápida e agradável sem dependências externas.

## Principais Funcionalidades
- Design responsivo (desktop → mobile) com breakpoints customizados.
- Menu mobile com ícone hambúrguer (`menuShow()` em `script.js`).
- Animações de entrada ao rolar (IntersectionObserver: classes `hiden`/`show`).
- Sliders sem bibliotecas:
  - Depoimentos: navegação via radio buttons e deslocamento por CSS.
  - Planos (mobile): carrossel horizontal com seletores CSS.
- Google Maps incorporado na seção de contato.
- Google Fonts (Manrope, Nunito Sans) e paleta consistente.

## Tecnologias
- HTML5 (seções semânticas).
- CSS3 (grid, media queries, estados e efeitos).
- JavaScript (vanilla) para menu e animações de scroll.
- Assets estáticos em `assets/` (ícones, imagens, logotipo).

## Estrutura do Projeto
```
index.html
style.css
script.js
assets/
```
Seções-chave: `header` (navegação), `hero`, `sobre` (sobre a escola), `idiomas` (idiomas), `metodologia`, `depoimentos`, `planos`, `cta`, `contato`, `footer`.

## Como Executar Localmente
Abra `index.html` diretamente no navegador ou sirva os arquivos com um servidor estático:

```bash
# Opção 1: Python 3
python3 -m http.server 8000
# Depois acesse http://localhost:8000

# Opção 2: Node (se tiver http-server)
npx http-server -p 8000
# Depois acesse http://localhost:8000
```

## Deploy
- Compatível com GitHub Pages, Netlify, Vercel ou qualquer hosting estático.
- GitHub Pages (resumo):
  - Ative Pages nas configurações do repositório e selecione a branch `main` (root).
  - O site ficará disponível em `https://<user>.github.io/<repo>/`.

## Conteúdo e Idioma
- Idioma da interface: português (pt-BR).
- Público-alvo: candidatos e adultos que buscam cursos de idiomas no Brasil.

## Guia de Estilo (pt-BR)
- Títulos: frase-sentença (apenas a primeira palavra e nomes próprios em maiúscula). Sem ponto final em H1/H2/H3.
- CTAs: imperativo e concisos, sem ponto final (ex.: "Garanta sua aula gratuita", "Quero agendar uma aula gratuita").
- Ortografia: usar "língua", "Inglês", "E-mail" (com hífen), "online" (minúsculo), "WhatsApp" (capitalização oficial).
- Números: milhar com ponto ("5.000"), decimais com vírgula, percentuais com "%" ("95%").
- Pontuação e tom: voz ativa, direta; evitar vírgulas desnecessárias; quando houver duas orações, preferir dois-pontos quando fizer sentido (ex.: "Comece hoje: o futuro fala a sua língua").
- Acessibilidade: `alt` descritivo em português (evitar genéricos como "imagem"/"ícone"); elementos interativos devem ter rótulos e estados ARIA.
- Formulários: rótulo "E-mail"; placeholders claros ("Seu melhor e-mail"); usar `type="email"`.

## Correções Já Aplicadas
- `index.html`:
  - Ortografia e acentuação: "Inglês", "língua", "ritmo", "Endereço".
  - Consistência de CTAs e microcopy (voz ativa; "Quero agendar uma aula gratuita", "Comece hoje a sua jornada").
  - `lang` ajustado para `pt-BR` e `alt` descritivos para todas as imagens/ícones (incl. redes sociais).
  - Labels e campos: "E-mail" e `type="email"`; ajustes de pontuação em títulos e textos.
  - SEO: meta `description`, `theme-color`, `canonical`, Open Graph e Twitter Cards.
  - A11y sliders: ARIA roles (`region`, `tablist`, `tab`), labels, `aria-live="polite"`, `aria-roledescription="carrossel"` para depoimentos e planos.
- `script.js`:
  - Menu móvel: `role="button"`, `tabindex="0"`, `aria-controls`, `aria-expanded` no ícone; `aria-hidden` no contêiner; suporte a teclado (Enter/Espaço); atualização dinâmica do `alt` (Abrir/Fechar menu).
  - Navegação por teclado nos sliders: setas (← → ↑ ↓), Home/End; foco e `aria-selected` gerenciados automaticamente.
- `style.css`:
  - Focus styles: `:focus-visible` com `outline` 3px roxo para links, botões, inputs, hamburger e controles de slider, melhorando visibilidade no teclado.

## Melhorias Futuras (Sugestões)
- Processamento de formulários (CTA e newsletter):
  - Validação de e-mail no cliente e integração com backend/serviço (Formspree, Netlify Forms, API).
- Performance:
  - Lazy-loading de imagens, compressão de assets, formatos modernos (WebP/AVIF).
  - Gerar OG:image otimizado (1200×630) para social preview.
- A11y avançada:
  - Melhorar contrastes em textos sobre backgrounds coloridos; testes com leitores de tela.
  - Landmarks HTML5 semânticos adicionais.
- i18n:
  - Suporte a múltiplos idiomas do site (pt/en/es/ru).
- Sliders:
  - Autoplay opcional com pausa ao hover/foco; gesto de swipe em mobile.

## Licença e Assets
- O arquivo LICENSE não está presente. Antes de uso público, defina uma licença.
- As imagens em `assets/` acompanham o projeto e podem ter direitos de terceiros. Verifique o uso público ou substitua por imagens próprias.

## Autoria e Contribuições
- PRs com correções de texto/UX são bem-vindos.
- Mantenha o estilo existente e evite dependências desnecessárias.

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

## Pequenas Correções de Texto na Página
- `Inlgês` → `Inglês`.
- `ritiomo` → `ritmo` (título “Aprenda no seu ritiomo, do seu jeito”).
- `Enderço` → `Endereço`.
- `lingua` → `língua` (“sua lingua” → “sua língua”).

As correções podem ser feitas diretamente em `index.html`.

## Melhorias Futuras (Sugestões)
- Processamento de formulários (CTA e newsletter):
  - Validação de e-mail no cliente e integração com backend/serviço (Formspree, Netlify Forms, API).
- SEO e social preview:
  - `<meta name="description">` descritiva, Open Graph e Twitter Cards; revisar/completar `alt` das imagens.
- Acessibilidade (A11y):
  - Melhorar contrastes, estados de foco, e `aria-*` para navegação e sliders.
- Performance:
  - Lazy-loading de imagens, compressão de assets, formatos modernos (WebP/AVIF).
- i18n:
  - Suporte a múltiplos idiomas do site (pt/en/es/ru).
- Sliders:
  - Autoplay opcional, navegação por teclado e gesto de swipe em mobile.

## Licença e Assets
- O arquivo LICENSE não está presente. Antes de uso público, defina uma licença.
- As imagens em `assets/` acompanham o projeto e podem ter direitos de terceiros. Verifique o uso público ou substitua por imagens próprias.

## Autoria e Contribuições
- PRs com correções de texto/UX são bem-vindos.
- Mantenha o estilo existente e evite dependências desnecessárias.

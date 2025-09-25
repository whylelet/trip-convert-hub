# DW Viagens - Página Secundária

Esta página foi otimizada para ser integrada como uma página secundária em um sistema maior.

## Características da Página

- **Dimensões Otimizadas**: Preparada para funcionar com barras de navegação superiores e inferiores
- **Padding Ajustado**: Espaço reservado para elementos externos (60px topo + 80px rodapé)
- **Altura Reduzida**: Hero section com 80vh ao invés de 100vh para melhor encaixe
- **Espaçamentos Compactos**: Seções com padding reduzido para melhor aproveitamento do espaço

## Como Integrar

### 1. Via iframe
```html
<iframe src="dw-viagens.html" width="100%" height="800px" frameborder="0"></iframe>
```

### 2. Via link direto
```html
<a href="dw-viagens.html" target="_blank">Acessar DW Viagens</a>
```

### 3. Integração inline
Copie o conteúdo do `<body>` para dentro do seu container principal.

## Ajustes de CSS Necessários

Se você precisar de dimensões diferentes, ajuste estas variáveis no styles.css:

```css
.secondary-page {
    padding-top: 60px; /* Ajuste conforme sua barra superior */
    padding-bottom: 80px; /* Ajuste conforme sua barra inferior */
}

.hero-section {
    min-height: 80vh; /* Ajuste a altura do hero */
    margin-top: -60px; /* Deve ser o negativo do padding-top */
}

.footer {
    margin-bottom: -80px; /* Deve ser o negativo do padding-bottom */
}
```

## Funcionalidades Mantidas

- ✅ Formulário de captura de leads
- ✅ Seleção múltipla de destinos
- ✅ Animações suaves
- ✅ Design responsivo
- ✅ Todas as informações de contato
- ✅ Links para WhatsApp funcionais

## Arquivos Necessários

- `index.html` (página principal)
- `styles.css` (estilos)
- `script.js` (funcionalidades JavaScript)
- `src/assets/hero-beach.jpg` (imagem de fundo)
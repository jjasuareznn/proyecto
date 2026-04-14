---
name: frontend-tailwind-minimal
description: "Apply professional minimalist UI design with Tailwind CSS using a refined black, gray, and coffee brown color palette. Use when building responsive, clean component designs for modern web applications."
---

# Frontend Tailwind Minimal Style

Professional minimalist design system for SvelteKit with Tailwind CSS, featuring a carefully curated **black, gray, and coffee brown** palette.

## 🎨 Color Palette

### Primary Colors
- **Black**: `#0F1C2E` – Deep navy-black
- **Black Lighter**: `#1A2B3D` – Softer black
- **Gray**: `#7F8C8D` – Neutral gray
- **Gray Light**: `#ECF0F1` – Light gray
- **Gray Dark**: `#34495E` – Dark gray

### Accent Colors
- **Coffee Brown**: `#8B6F47` – Primary accent
- **Coffee Light**: `#A0815C` – Lighter brown
- **Coffee Dark**: `#6F5736` – Darker brown

## 🛠️ Tailwind Configuration

### Setup: `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAF9F7',
          100: '#F5F3F0',
          950: '#0F1C2E'
        },
        neutral: {
          950: '#0F1C2E',
          900: '#1A2B3D',
          500: '#7F8C8D',
          100: '#ECF0F1'
        },
        coffee: {
          50: '#FDFBF7',
          100: '#F9F6F1',
          400: '#A0815C',
          600: '#8B6F47',
          900: '#6F5736'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem'
      }
    }
  },
  plugins: []
} satisfies Config;
```

## 📐 Design Principles

1. **Minimalist**: Remove visual clutter, embrace whitespace
2. **Accessible**: High contrast, clear typography, intuitive interactions
3. **Responsive**: Mobile-first design
4. **Purposeful**: Every element serves a function
5. **Consistent**: Uniform spacing, typography, and color usage

## 🧩 Component Patterns

### Hero Section (Dark)
```svelte
<section class="bg-neutral-950 text-neutral-100 py-20 px-4">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-5xl font-bold mb-4">Minimalist Title</h1>
    <p class="text-lg text-neutral-500">Descriptive subtitle with purpose</p>
  </div>
</section>
```

### Card (Light Background)
```svelte
<div class="bg-neutral-100 border border-neutral-500 rounded-lg p-6">
  <h3 class="text-lg font-semibold text-neutral-950 mb-2">Card Title</h3>
  <p class="text-neutral-500 mb-4">Clean, readable content</p>
  <button class="bg-coffee-600 text-neutral-100 px-4 py-2 rounded hover:bg-coffee-700 transition">
    Action
  </button>
</div>
```

### Button Variants
```svelte
<!-- Primary (Coffee Brown) -->
<button class="bg-coffee-600 text-neutral-100 px-4 py-2 rounded-md font-medium hover:bg-coffee-700 transition">
  Primary
</button>

<!-- Secondary (Gray) -->
<button class="bg-neutral-500 text-neutral-100 px-4 py-2 rounded-md font-medium hover:bg-neutral-600 transition">
  Secondary
</button>

<!-- Ghost (Outline) -->
<button class="border border-neutral-500 text-neutral-950 px-4 py-2 rounded-md font-medium hover:bg-neutral-100 transition">
  Ghost
</button>
```

### Input Fields
```svelte
<input
  type="text"
  placeholder="Minimalist input"
  class="w-full bg-neutral-100 border border-neutral-500 rounded-md px-4 py-2 text-neutral-950 placeholder:text-neutral-500 focus:outline-none focus:border-coffee-600 transition"
/>
```

### Typography Scale
```svelte
<!-- Heading 1 --> <h1 class="text-4xl font-bold text-neutral-950">Heading 1</h1>
<!-- Heading 2 --> <h2 class="text-3xl font-bold text-neutral-950">Heading 2</h2>
<!-- Heading 3 --> <h3 class="text-2xl font-semibold text-neutral-950">Heading 3</h3>
<!-- Body -->     <p class="text-base text-neutral-900">Body text</p>
<!-- Small -->    <p class="text-sm text-neutral-500">Small text</p>
```

## 🎯 Usage Guide

When creating UI components:

1. **Background**: Use `bg-neutral-100` for light backgrounds, `bg-neutral-950` for dark
2. **Text**: Use `text-neutral-950` on light, `text-neutral-100` on dark
3. **Accents**: Use `coffee-600` for primary interactive elements
4. **Borders**: Use `border-neutral-500` for subtle divisions
5. **Hover States**: Add `.hover:opacity-90` or color shade changes
6. **Spacing**: Use Tailwind's spacing scale (px-4, py-3, gap-6, etc.)

## 📱 Responsive Classes

```svelte
<!-- Mobile first -->
<div class="text-sm md:text-base lg:text-lg"></div>
<div class="p-4 md:p-6 lg:p-8"></div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
```

## 🔗 Related Customizations

- Consider creating `.github/instructions/svelte-components.instructions.md` for component-specific patterns
- Create utility styles in `src/app.css` for reusable classes leveraging this palette

## ✅ Validation Checklist

Before submitting UI:
- [ ] Color palette follows black/gray/coffee scheme
- [ ] Sufficient whitespace around elements
- [ ] Text contrasts meet WCAG AA standards
- [ ] No more than 3 color accents per screen
- [ ] Responsive on mobile, tablet, desktop
- [ ] Consistent spacing (multiples of 0.5rem)

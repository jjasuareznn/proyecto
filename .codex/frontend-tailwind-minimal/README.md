# Frontend Tailwind Minimal Skill

Professional, minimalist design system for SvelteKit frontends using Tailwind CSS with a refined black, gray, and coffee brown palette.

## 📁 Contents

- **`SKILL.md`** — Main skill guide with color palette, configuration, component patterns, and usage principles
- **`tailwind.config.example.ts`** — Ready-to-use Tailwind configuration file
- **`colors.json`** — Color palette reference with hex codes, RGB, and usage guidelines
- **`ComponentExamples.svelte`** — Live component examples (hero, cards, buttons, forms)

## 🎯 Quick Start

1. **Install Tailwind CSS** in your SvelteKit project:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Use the configuration**: Copy `tailwind.config.example.ts` to `tailwind.config.ts` in your project root

3. **Reference the skill**: When building UI, load `/SKILL.md` for component patterns, color usage, and design principles

4. **Check examples**: View `ComponentExamples.svelte` for working demonstrations of the design system

## 🎨 Color Palette Summary

| Color | Hex | Use Case |
|-------|-----|----------|
| Black | `#0F1C2E` | Dark backgrounds, text on light |
| Black Soft | `#1A2B3D` | Secondary backgrounds |
| Gray | `#7F8C8D` | Secondary text, borders |
| Gray Light | `#ECF0F1` | Light backgrounds, cards |
| Coffee 600 | `#8B6F47` | Primary accent, buttons |
| Coffee Light | `#A0815C` | Hover states |
| Coffee Dark | `#6F5736` | Active states |

## 📐 When to Use This Skill

Request this skill when:
- Building UI components with minimalist design
- Creating responsive layouts
- Establishing consistent color usage
- Designing forms, buttons, cards
- Ensuring WCAG accessibility compliance

Example prompt:
```
@skills frontend-tailwind-minimal
Create a testimonial card component that shows a user quote with profile picture
```

## ✅ Design Checklist

Each component should have:
- [ ] Proper color contrast (WCAG AA minimum)
- [ ] Generous whitespace
- [ ] Clear typography hierarchy
- [ ] Smooth hover/active states
- [ ] Mobile-responsive design
- [ ] Max 3 accent colors per screen

## 🔗 Related Resources

- Tailwind CSS Documentation: https://tailwindcss.com/docs
- WCAG Accessibility Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- SvelteKit Documentation: https://kit.svelte.dev/

---

**Created**: April 2026  
**Version**: 1.0  
**Status**: Production Ready

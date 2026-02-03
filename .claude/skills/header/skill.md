---
name: header
description: Responsive multi-level navigation header for Next.js applications. Features desktop 2-row layout with nested dropdown menus (up to 4 levels), mobile accordion navigation with full-screen overlay, sticky positioning, and configurable menu structure. Supports Next.js 14+ with App Router, TypeScript, and Tailwind CSS.
---

# Header Navigation Component

## Overview

This skill provides a complete, production-ready header navigation system for Next.js 14+ applications with App Router. The implementation features:

- **Desktop 2-Row Navigation** with logo, multi-column dropdowns, and CTA button
- **Mobile Full-Screen Overlay** with accordion-style nested menus
- **Up to 4 Levels of Nesting** for complex navigation hierarchies
- **Sticky Header** with shadow on scroll
- **Responsive Design** optimized for all screen sizes

### Key Features

- **Multi-Level Dropdowns**: Support for 4 levels of nested submenus
- **Smart Positioning**: Submenus auto-position left/right based on screen edge
- **2-Column Layouts**: Special handling for wide menus (COMMITTEE, FACILITIES)
- **Mobile Accordion**: Expandable/collapsible menu structure on mobile
- **Body Scroll Lock**: Prevents background scrolling when mobile menu is open
- **Touch Optimized**: Minimum 44px touch targets for mobile usability
- **TypeScript First**: Fully typed navigation structure
- **Tailwind CSS**: Utility-first styling with custom theme support
- **Customizable**: Colors, fonts, spacing, and menu structure

### UI Pattern (Critical Design Elements)

#### Desktop Header (2-Row Layout)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ┌──────┐   HOME  ABOUT▼  ADMIN▼  ACADEMICS▼  ACCREDITATION▼  ...  ┌──────┐│
│  │ LOGO │   ─────────────────────────────────────────────────────   │APPLY ││
│  │      │   COMMITTEE▼  ALUMNI  FACILITIES▼  INFO▼  GALLERY  ...   │ NOW  ││
│  └──────┘   ─────────────────────────────────────────────────────   └──────┘│
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Desktop Dropdown (Standard)
```
┌─────────────────────────┐
│ Submenu Item 1          │
│ Submenu Item 2        ▶ │ ← Has nested submenu
│ Submenu Item 3          │
│ Submenu Item 4        ▶ │
└─────────────────────────┘
        └────────────────────────┐
                    ┌────────────────────────┐
                    │ Nested Item 1          │
                    │ Nested Item 2        ▶ │
                    │ Nested Item 3          │
                    └────────────────────────┘
```

#### Desktop Dropdown (2-Column - COMMITTEE/FACILITIES)
```
┌──────────────────────────────────────────────────┐
│ Item 1                  │ Item 11                │
│ Item 2                  │ Item 12                │
│ Item 3                  │ Item 13                │
│ Item 4                  │ Item 14                │
│ ...                     │ ...                    │
└──────────────────────────────────────────────────┘
```

#### Mobile Header
```
┌─────────────────────────────────────────────────┐
│  ┌──────┐                              ┌──────┐ │
│  │ LOGO │                              │APPLY │ │
│  │      │                              │ NOW  │ │
│  └──────┘                              └──────┘ │
└─────────────────────────────────────────────────┘
```

#### Mobile Overlay (Full Screen)
```
┌─────────────────────────────────────────────────┐
│  HOME                                           │
│  ABOUT                                        ▼ │
│  ├─ OUR INSTITUTIONS                            │
│  ├─ VISION AND MISSION                          │
│  ├─ APPROVALS AND AFFILIATION                 ▼ │
│  │   ├─ AFFILIATION LETTERS BDS                 │
│  │   ├─ AFFILIATION LETTERS MDS                 │
│  │   └─ ...                                     │
│  └─ ...                                         │
│  ADMINISTRATION                               ▼ │
│  ...                                            │
│  ┌─────────────────────────────────────────────┐│
│  │             APPLY NOW                       ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
```

### When to Use This Skill

Use this skill when:
- Building institutional or corporate websites with complex navigation
- Needing multi-level navigation hierarchy (up to 4 levels)
- Requiring responsive header with desktop dropdowns and mobile accordion
- Building Next.js 14+ App Router applications
- Using Tailwind CSS for styling
- Needing sticky/fixed header positioning

## Quick Start

### 1. Install Dependencies

Ensure you have the required dependencies:

```bash
npm install next react react-dom
npm install -D tailwindcss postcss autoprefixer @types/react @types/node typescript
```

### 2. Copy Core Files

Copy all files from `assets/` to your project:

```
assets/
├── components/Header/
│   ├── Header.tsx              → components/Header.tsx
│   ├── types.ts                → types/navigation.ts (or inline)
│   └── index.ts                → components/Header/index.ts
└── data/
    └── siteData.ts             → data/siteData.ts
```

### 3. Configure Tailwind

Ensure your `tailwind.config.ts` includes these customizations:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5E20',  // Customize your primary color
          light: '#2E7D32',
          dark: '#0d3d13',
        },
        secondary: {
          DEFAULT: '#FFC107',
          light: '#FFD54F',
          dark: '#FFA000',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### 4. Configure Navigation Data

Update `data/siteData.ts` with your navigation structure:

```typescript
import { NavItem, SubmenuItem } from "@/types/navigation";

// Top row navigation items
export const topMenuItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    submenu: [
      { label: "Our Story", href: "/about/story" },
      { label: "Team", href: "/about/team" },
      {
        label: "Partners",
        href: "/about/partners",
        submenu: [
          { label: "Corporate Partners", href: "/about/partners/corporate" },
          { label: "Academic Partners", href: "/about/partners/academic" },
        ]
      }
    ]
  },
  // ... more items
];

// Bottom row navigation items
export const bottomMenuItems: NavItem[] = [
  // ... items
];

// Combined for mobile
export const navigationMenu: NavItem[] = [...topMenuItems, ...bottomMenuItems];
```

### 5. Integrate with Layout

```typescript
// app/layout.tsx
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-[80px] lg:pt-[100px]">
          {children}
        </main>
      </body>
    </html>
  );
}
```

### 6. Add Logo

Place your logo at `public/images/logo.png` and update the Header component accordingly.

### 7. Verify Implementation

Test checklist:

- [ ] Header is sticky/fixed at top
- [ ] Desktop: 2-row navigation layout
- [ ] Desktop: Dropdown menus on hover
- [ ] Desktop: Nested submenus open correctly
- [ ] Desktop: Right-aligned menus (OTHERS, RESEARCH) have left-opening submenus
- [ ] Desktop: COMMITTEE/FACILITIES show 2-column layout
- [ ] Mobile: Logo and CTA button visible
- [ ] Mobile: Full-screen overlay opens
- [ ] Mobile: Accordion menus expand/collapse
- [ ] Mobile: Body scroll is locked when menu is open
- [ ] Mobile: Navigation links work correctly
- [ ] CTA button links to correct URL

## Configuration Options

### Menu Structure

The header supports these menu label conventions:

| Label | Special Behavior |
|-------|------------------|
| `COMMITTEE` | 2-column dropdown layout |
| `FACILITIES` | 2-column dropdown layout |
| `OTHERS` | Right-aligned, submenus open left |
| `RESEARCH` | Right-aligned, submenus open left |

### Customization Points

1. **Logo**: Update image path and dimensions in Header.tsx
2. **CTA Button**: Change text and URL for "Apply Now" button
3. **Colors**: Modify Tailwind config for primary/secondary colors
4. **Font Sizes**: Adjust responsive text sizes in Header.tsx
5. **Breakpoints**: Modify lg breakpoint (1024px) for desktop/mobile switch
6. **Animations**: Customize animation classes in globals.css

## File Organization

After implementation:

```
your-project/
├── components/
│   └── Header.tsx              (Main header component)
├── data/
│   └── siteData.ts             (Navigation structure)
├── types/
│   └── navigation.ts           (TypeScript interfaces)
├── public/
│   └── images/
│       └── logo.png            (Your logo)
├── app/
│   ├── globals.css             (Global styles)
│   └── layout.tsx              (Root layout with Header)
└── tailwind.config.ts          (Tailwind configuration)
```

## Resources

### References (`references/`)

1. **`implementation-guide.md`** - Complete step-by-step implementation
2. **`customization-guide.md`** - Theming and styling options
3. **`mobile-menu-guide.md`** - Mobile navigation patterns

### Assets (`assets/`)

1. **`components/Header/`** - Complete component implementation
2. **`data/`** - Example navigation data structure

## Common Patterns

### Adding New Menu Items

```typescript
// In siteData.ts
{
  label: "NEW MENU",
  href: "/new-menu",
  submenu: [
    { label: "Submenu 1", href: "/new-menu/sub1" },
    { label: "Submenu 2", href: "/new-menu/sub2" },
  ]
}
```

### Adding 2-Column Dropdown

Add the label to the condition in Header.tsx:
```typescript
// Line ~70-71
{['COMMITTEE', 'FACILITIES', 'YOUR_NEW_MENU'].includes(item.label) ? (
```

### Adding Right-Aligned Menu

Add the label to the condition in Header.tsx:
```typescript
// Line ~70
${['OTHERS', 'RESEARCH', 'YOUR_NEW_MENU'].includes(item.label) ? 'right-0' : 'left-0'}
```

## Troubleshooting

### Header overlaps content
- Ensure main content has sufficient top padding (pt-[80px] lg:pt-[100px])

### Mobile menu not scrolling
- Check that `overflow-y-auto` is on the overlay container

### Submenus cut off on screen edge
- Add the menu label to right-aligned menus list

### Body still scrolls on mobile overlay
- Verify the useEffect for body overflow is working

## Summary

This skill provides a standardized header navigation with:

- Complete working code for desktop and mobile
- Multi-level dropdown support (up to 4 levels)
- Special handling for wide menus (2-column layout)
- Mobile accordion with full-screen overlay
- Sticky positioning with shadow
- Touch-optimized mobile experience
- TypeScript interfaces for navigation structure
- Tailwind CSS styling with theme customization
- Comprehensive documentation and examples

**Start with Quick Start section above and use the complete components from `assets/` to ensure correct implementation.**

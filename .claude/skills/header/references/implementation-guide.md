# Header Implementation Guide

This guide provides step-by-step instructions for implementing the header navigation component in your Next.js application.

## Prerequisites

- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS v3+

## Step 1: Install Dependencies

```bash
npm install next react react-dom
npm install -D tailwindcss postcss autoprefixer @types/react @types/node typescript
```

## Step 2: Project Structure

Create the following file structure:

```
your-project/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Header.tsx
├── data/
│   └── siteData.ts
├── public/
│   └── images/
│       └── logo.png
├── tailwind.config.ts
└── package.json
```

## Step 3: Copy Component Files

### 3.1 Header Component

Copy `assets/components/Header/Header.tsx` to `components/Header.tsx`.

### 3.2 Navigation Data

Copy `assets/data/siteData.ts` to `data/siteData.ts`.

Update the navigation items to match your site structure.

## Step 4: Configure Tailwind CSS

### 4.1 Update tailwind.config.ts

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
          DEFAULT: '#1B5E20',  // Green - customize as needed
          light: '#2E7D32',
          dark: '#0d3d13',
        },
        secondary: {
          DEFAULT: '#FFC107',  // Yellow/Gold
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

### 4.2 Update globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply text-gray-900 bg-white;
  }
}

@layer utilities {
  .touch-manipulation {
    touch-action: manipulation;
  }
}
```

## Step 5: Integrate Header in Layout

### 5.1 Update app/layout.tsx

```typescript
import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
};

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

**Important:** The `pt-[80px] lg:pt-[100px]` padding accounts for the fixed header height. Adjust these values if you change the header height.

## Step 6: Add Logo

1. Create `public/images/` directory
2. Add your logo as `logo.png`
3. Update the image path in Header.tsx if using a different filename

## Step 7: Configure Navigation

Edit `data/siteData.ts` to customize your navigation structure:

### Basic Menu Item

```typescript
{ label: "HOME", href: "/" }
```

### Menu Item with Dropdown

```typescript
{
  label: "ABOUT",
  href: "/about",
  submenu: [
    { label: "Our Story", href: "/about/story" },
    { label: "Team", href: "/about/team" },
  ]
}
```

### Menu Item with Nested Dropdowns (up to 4 levels)

```typescript
{
  label: "ACADEMICS",
  href: "/academics",
  submenu: [
    {
      label: "Programs",
      href: "/academics/programs",
      submenu: [
        { label: "Undergraduate", href: "/academics/programs/undergrad" },
        {
          label: "Graduate",
          href: "/academics/programs/graduate",
          submenu: [
            { label: "Masters", href: "/academics/programs/graduate/masters" },
            { label: "PhD", href: "/academics/programs/graduate/phd" },
          ]
        }
      ]
    }
  ]
}
```

## Step 8: Update CTA Button

In Header.tsx, update the Apply Now button URLs and text:

```typescript
// Desktop CTA button
<Link
  href="https://your-application-url.com"
  className="bg-primary text-white px-6 py-2.5 rounded-md font-semibold hover:opacity-90 transition-opacity min-h-[44px] flex items-center justify-center"
>
  Apply Now
</Link>
```

## Step 9: Test the Implementation

1. Run the development server: `npm run dev`
2. Open browser to `http://localhost:3000`

### Desktop Testing (≥1024px)
- [ ] Header is fixed at top
- [ ] 2-row navigation layout visible
- [ ] Logo on left, CTA button on right
- [ ] Hover over menu items to see dropdowns
- [ ] Nested submenus open on hover
- [ ] Click links to navigate

### Mobile Testing (<1024px)
- [ ] Header shows logo and CTA button
- [ ] Mobile menu toggle visible (if implemented)
- [ ] Full-screen overlay opens
- [ ] Accordion menus expand/collapse
- [ ] Body scroll is locked when menu open
- [ ] Tapping links navigates and closes menu

## Step 10: Optional Enhancements

### Add Mobile Menu Toggle Button

The default implementation has the mobile menu toggle functionality. To add a hamburger button:

```typescript
// Add this button in the mobile header section
<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="p-2 min-h-[44px] min-w-[44px] touch-manipulation"
  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
>
  {isMenuOpen ? (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )}
</button>
```

### Add Active Link Highlighting

To highlight the current page in navigation:

```typescript
'use client';
import { usePathname } from 'next/navigation';

// In your component:
const pathname = usePathname();

// Then use it in className:
<Link
  href={item.href}
  className={`... ${pathname === item.href ? 'text-primary' : 'text-black'}`}
>
```

### Add Scroll-based Shadow

```typescript
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// In header className:
<header className={`... ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
```

## Troubleshooting

### Header overlaps page content
- Ensure main content has `pt-[80px] lg:pt-[100px]` or equivalent padding

### Dropdowns don't appear
- Check z-index values (should be z-50 for header, z-50+ for dropdowns)
- Verify hover events are working (check for CSS conflicts)

### Mobile menu doesn't scroll
- Ensure overlay has `overflow-y-auto`

### Logo not displaying
- Check image path is correct
- Verify image exists in `public/images/`
- Check Next.js Image component configuration

### Submenus cut off at screen edge
- Add the menu label to `rightAlignedMenus` in the component

## Next Steps

- See `customization-guide.md` for styling options
- See `mobile-menu-guide.md` for mobile-specific patterns

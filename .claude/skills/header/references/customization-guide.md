# Header Customization Guide

This guide explains how to customize the header component's appearance and behavior.

## Color Customization

### Primary Color (Brand Color)

The primary color is used for:
- Hover states
- Active states
- CTA button background

Update in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#1B5E20',  // Main brand color
    light: '#2E7D32',    // Lighter variant
    dark: '#0d3d13',     // Darker variant
  },
}
```

### Secondary Color

Used for accent elements:

```typescript
secondary: {
  DEFAULT: '#FFC107',  // Yellow/Gold
  light: '#FFD54F',
  dark: '#FFA000',
}
```

### Dropdown Hover Color

In Header.tsx, find and update:

```typescript
// Change from primary to any color
hover:bg-primary hover:text-white

// To custom color
hover:bg-blue-600 hover:text-white
```

## Typography

### Menu Text Size

Desktop navigation uses responsive font sizes:

```typescript
text-[11px] lg:text-[12px] xl:text-[13px]
```

To increase:
```typescript
text-[12px] lg:text-[14px] xl:text-[15px]
```

### Menu Font Weight

Current: `font-semibold`

Options:
- `font-normal` - Regular
- `font-medium` - Medium
- `font-semibold` - Semi-bold (current)
- `font-bold` - Bold

### Mobile Menu Text Size

```typescript
// Main menu items
text-sm xs:text-base

// Submenu items
text-xs xs:text-sm
```

## Layout Customization

### Header Height

Desktop logo height:
```typescript
className="h-20 xl:h-24 w-auto object-contain"
```

Mobile logo height:
```typescript
className="h-12 xs:h-14 sm:h-16 w-auto object-contain"
```

### Max Width

Desktop container:
```typescript
className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8"
```

### Desktop/Mobile Breakpoint

Default: `lg` (1024px)

To change to tablet (768px):
```typescript
// Replace all "lg:" with "md:"
<div className="hidden md:block">  // Desktop
<nav className="md:hidden">        // Mobile
```

## Dropdown Configuration

### Two-Column Dropdown Menus

Add menu labels to the 2-column list:

```typescript
// Line ~70 in Header.tsx
{['COMMITTEE', 'FACILITIES', 'YOUR_NEW_MENU'].includes(item.label) ? (
```

### Right-Aligned Menus

For menus near the right edge that need left-opening submenus:

```typescript
// Line ~70 in Header.tsx
${['OTHERS', 'RESEARCH', 'YOUR_NEW_MENU'].includes(item.label) ? 'right-0' : 'left-0'}

// And for nested submenus
${['OTHERS', 'COMMITTEE', 'RESEARCH', 'YOUR_NEW_MENU'].includes(item.label) ? 'right-full mr-0' : 'left-full ml-0'}
```

### Dropdown Width

Standard dropdown:
```typescript
min-w-[240px]
```

Two-column dropdown:
```typescript
min-w-[520px]
```

Nested submenu:
```typescript
min-w-[260px]
```

## CTA Button Customization

### Button Text

```typescript
<Link href="/apply">
  Apply Now  {/* Change this text */}
</Link>
```

### Button URL

```typescript
<Link href="https://your-url.com">
```

### Button Styling

```typescript
className="bg-primary text-white px-6 py-2.5 rounded-md font-semibold hover:opacity-90 transition-opacity min-h-[44px] flex items-center justify-center"
```

Alternatives:
```typescript
// Rounded full
className="... rounded-full ..."

// With shadow
className="... shadow-lg hover:shadow-xl ..."

// Gradient background
className="bg-gradient-to-r from-primary to-primary-light text-white ..."

// Outlined style
className="border-2 border-primary text-primary hover:bg-primary hover:text-white ..."
```

## Animation Customization

### Fade In Animation

In `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
},
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
}
```

Adjust duration: `0.5s` → `0.3s` for faster

### Slide Down Animation

```typescript
animation: {
  'slide-down': 'slideDown 0.5s ease-out',
},
keyframes: {
  slideDown: {
    '0%': { transform: 'translateY(-20px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
}
```

### Dropdown Animation

Add CSS transitions to dropdown containers:

```css
/* In globals.css */
.dropdown-enter {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 200ms, transform 200ms;
}
```

## Mobile Menu Customization

### Overlay Background

```typescript
className="fixed inset-0 bg-white z-[60] ..."
```

For dark overlay:
```typescript
className="fixed inset-0 bg-gray-900 z-[60] ..."
// Also update text colors throughout
```

### Menu Item Padding

```typescript
// Main items
className="... py-3 px-3 xs:px-4 ..."

// Submenu items
className="... py-2.5 px-3 xs:px-4 ..."
```

### Touch Target Size

Minimum 44px for accessibility:
```typescript
min-h-[44px]   // Minimum height
min-w-[44px]   // Minimum width (for icon buttons)
```

### Chevron Icons

Rotating chevrons on expand:
```typescript
className={`... transition-transform duration-300 ${mobileOpenMenus.has(item.label) ? 'rotate-180' : ''}`}
```

## Shadow and Border

### Header Shadow

```typescript
className="... shadow-sm"
```

Options:
- `shadow-none` - No shadow
- `shadow-sm` - Subtle shadow (current)
- `shadow` - Medium shadow
- `shadow-md` - More prominent
- `shadow-lg` - Large shadow

### Dropdown Border

```typescript
className="... border border-gray-200 ..."
```

Remove border:
```typescript
className="... border-0 ..."
```

### Border Radius

CTA Button:
```typescript
rounded-md    // Current (medium)
rounded-lg    // Larger
rounded-full  // Pill shape
```

## Z-Index Layers

```typescript
z-50    // Header
z-50    // Desktop dropdowns
z-[60]  // Mobile overlay (above header)
```

## Adding Logo Variations

### Different Logo for Mobile

```typescript
// Desktop logo
<Image
  src="/images/logo-full.png"
  className="hidden lg:block h-24 w-auto"
/>

// Mobile logo (smaller/simpler)
<Image
  src="/images/logo-icon.png"
  className="lg:hidden h-12 w-auto"
/>
```

### Dark Mode Logo

```typescript
// If implementing dark mode
<Image
  src={theme === 'dark' ? '/images/logo-white.png' : '/images/logo.png'}
/>
```

## Common Customization Patterns

### Enterprise/Corporate Style

```typescript
// Muted colors, professional look
colors: {
  primary: {
    DEFAULT: '#1a365d',  // Dark blue
    light: '#2c5282',
    dark: '#0d2137',
  }
}
// Use font-medium instead of font-semibold
// Use rounded-sm or rounded-none for buttons
```

### Educational Institution Style

```typescript
// Traditional, trustworthy colors
colors: {
  primary: {
    DEFAULT: '#1B5E20',  // Forest green
    light: '#2E7D32',
    dark: '#0d3d13',
  },
  secondary: {
    DEFAULT: '#FFC107',  // Gold/yellow
  }
}
```

### Modern/Startup Style

```typescript
// Vibrant, energetic colors
colors: {
  primary: {
    DEFAULT: '#6366f1',  // Indigo
    light: '#818cf8',
    dark: '#4f46e5',
  }
}
// Use rounded-full for buttons
// Add gradient backgrounds
// Use more prominent shadows
```

## Performance Tips

1. **Image Optimization**: Use Next.js Image component (already implemented)
2. **Font Loading**: Use `next/font` for optimized font loading
3. **Minimize Re-renders**: Menu state is managed locally, preventing unnecessary re-renders
4. **CSS Purging**: Tailwind automatically purges unused styles in production

## Accessibility Considerations

1. **Touch Targets**: Maintain `min-h-[44px]` for touch accessibility
2. **Color Contrast**: Ensure text has sufficient contrast (WCAG 2.1 AA)
3. **Focus States**: Add focus rings for keyboard navigation
4. **ARIA Labels**: Add aria-labels to icon-only buttons

```typescript
<button
  aria-label="Toggle mobile menu"
  aria-expanded={isMenuOpen}
>
```

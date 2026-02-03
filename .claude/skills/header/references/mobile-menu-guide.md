# Mobile Navigation Guide

This guide covers mobile-specific patterns and customizations for the header navigation.

## Mobile Menu Architecture

### State Management

The mobile menu uses React state for:
- `isMenuOpen` - Controls overlay visibility
- `mobileOpenMenus` - Set of expanded menu labels (accordion)

```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [mobileOpenMenus, setMobileOpenMenus] = useState<Set<string>>(new Set());
```

### Accordion Toggle Logic

```typescript
const toggleMobileMenu = (label: string) => {
  const newSet = new Set(mobileOpenMenus);
  if (newSet.has(label)) {
    newSet.delete(label);
  } else {
    newSet.add(label);
  }
  setMobileOpenMenus(newSet);
};
```

## Body Scroll Lock

When the mobile menu is open, body scrolling is disabled:

```typescript
useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isMenuOpen]);
```

## Adding Hamburger Menu Button

By default, the mobile header shows logo and CTA. To add a hamburger toggle:

### Option 1: Hamburger Icon Button

```typescript
{/* Add between logo and CTA */}
<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="p-2 min-h-[44px] min-w-[44px] touch-manipulation flex items-center justify-center"
  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
  aria-expanded={isMenuOpen}
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

### Option 2: Animated Hamburger

```typescript
<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="relative w-8 h-8 p-2 focus:outline-none"
>
  <span
    className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ${
      isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
    }`}
  />
  <span
    className={`absolute h-0.5 w-6 bg-black transition duration-300 ${
      isMenuOpen ? 'opacity-0' : 'opacity-100'
    }`}
  />
  <span
    className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ${
      isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
    }`}
  />
</button>
```

## Mobile Header Layout Options

### Layout 1: Logo Left, Menu Right, CTA Button

```typescript
<nav className="lg:hidden w-full py-2 sm:py-3 px-3 sm:px-4">
  <div className="flex items-center justify-between">
    {/* Logo */}
    <Link href="/">
      <Image src="/images/logo.png" alt="Logo" width={154} height={75} />
    </Link>

    <div className="flex items-center gap-2">
      {/* CTA Button */}
      <Link href="/apply" className="bg-primary text-white px-4 py-2 rounded-md">
        Apply
      </Link>

      {/* Menu Button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuIcon />
      </button>
    </div>
  </div>
</nav>
```

### Layout 2: Hamburger Left, Logo Center, CTA Right

```typescript
<nav className="lg:hidden w-full py-2 sm:py-3 px-3 sm:px-4">
  <div className="flex items-center justify-between">
    {/* Menu Button */}
    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <MenuIcon />
    </button>

    {/* Logo */}
    <Link href="/">
      <Image src="/images/logo.png" alt="Logo" width={120} height={60} />
    </Link>

    {/* CTA Button */}
    <Link href="/apply" className="bg-primary text-white px-3 py-2 rounded-md text-sm">
      Apply
    </Link>
  </div>
</nav>
```

## Full-Screen Overlay Variations

### Overlay with Close Button

```typescript
{isMenuOpen && (
  <div className="fixed inset-0 bg-white z-[60] overflow-y-auto">
    {/* Close button in top right */}
    <div className="absolute top-4 right-4">
      <button
        onClick={() => setIsMenuOpen(false)}
        className="p-2 min-h-[44px] min-w-[44px]"
        aria-label="Close menu"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    {/* Menu content */}
    <div className="pt-16 pb-4 p-4">
      {/* ... menu items ... */}
    </div>
  </div>
)}
```

### Slide-In Panel

```typescript
{/* Backdrop */}
<div
  className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 ${
    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`}
  onClick={() => setIsMenuOpen(false)}
/>

{/* Slide panel */}
<div
  className={`fixed top-0 right-0 bottom-0 w-80 bg-white z-[60] transform transition-transform duration-300 ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  {/* Menu content */}
</div>
```

## Touch Optimization

### Minimum Touch Target Size

WCAG recommends 44x44 pixels minimum:

```typescript
className="min-h-[44px] min-w-[44px]"
```

### Touch Manipulation

Prevents 300ms delay on touch devices:

```typescript
className="touch-manipulation"
```

### Active State Feedback

```typescript
className="active:bg-gray-100"
```

## Accordion Animations

### CSS Animation

```typescript
className="animate-slide-down"
```

In tailwind.config.ts:
```typescript
animation: {
  'slide-down': 'slideDown 0.3s ease-out',
},
keyframes: {
  slideDown: {
    '0%': {
      opacity: '0',
      height: '0',
      overflow: 'hidden'
    },
    '100%': {
      opacity: '1',
      height: 'auto'
    },
  },
}
```

### Framer Motion Animation

Install: `npm install framer-motion`

```typescript
import { motion, AnimatePresence } from 'framer-motion';

<AnimatePresence>
  {item.submenu && mobileOpenMenus.has(item.label) && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="pl-4 space-y-1"
    >
      {/* Submenu items */}
    </motion.div>
  )}
</AnimatePresence>
```

## Chevron Icon Rotation

```typescript
<svg
  className={`w-4 h-4 fill-current transition-transform duration-300 ${
    mobileOpenMenus.has(item.label) ? 'rotate-180' : ''
  }`}
  viewBox="0 0 12 12"
>
  <path d="M6 9L1 4h10z" />
</svg>
```

## iOS Safe Area Support

### Safe Area Padding

```css
/* In globals.css */
.safe-top {
  padding-top: env(safe-area-inset-top);
}

.safe-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
```

### Apply to Overlay

```typescript
<div className="fixed inset-0 bg-white z-[60] overflow-y-auto safe-top safe-bottom">
```

## Responsive Text Sizing

### Extra Small Screens (375px)

```typescript
className="text-xs xs:text-sm sm:text-base"
```

### Padding Adjustments

```typescript
className="px-3 xs:px-4 sm:px-6"
className="py-2 xs:py-2.5 sm:py-3"
```

## Performance Optimization

### Lazy Loading Menu Content

```typescript
const MobileMenuContent = dynamic(() => import('./MobileMenuContent'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});
```

### Debounce Rapid Toggles

```typescript
import { useCallback, useRef } from 'react';

const lastToggleTime = useRef(0);

const toggleMobileMenu = useCallback((label: string) => {
  const now = Date.now();
  if (now - lastToggleTime.current < 100) return;
  lastToggleTime.current = now;

  // ... toggle logic
}, [mobileOpenMenus]);
```

## Accessibility

### Keyboard Navigation

```typescript
<button
  onClick={() => toggleMobileMenu(item.label)}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMobileMenu(item.label);
    }
  }}
  aria-expanded={mobileOpenMenus.has(item.label)}
  aria-controls={`submenu-${item.label}`}
>
```

### Focus Trap

Install: `npm install focus-trap-react`

```typescript
import FocusTrap from 'focus-trap-react';

{isMenuOpen && (
  <FocusTrap>
    <div className="fixed inset-0 ...">
      {/* Menu content */}
    </div>
  </FocusTrap>
)}
```

### Screen Reader Announcements

```typescript
<div
  role="navigation"
  aria-label="Mobile navigation menu"
>
  {/* Menu content */}
</div>
```

## Testing Checklist

### Functional Tests
- [ ] Menu opens/closes correctly
- [ ] Accordion expands/collapses
- [ ] Navigation links work
- [ ] Body scroll locked when open
- [ ] Menu closes on navigation

### Touch Tests
- [ ] Touch targets are 44px minimum
- [ ] No touch delay
- [ ] Smooth scrolling in overlay
- [ ] Active state feedback

### Visual Tests
- [ ] Proper spacing on small screens
- [ ] Text readable at all sizes
- [ ] Icons properly sized
- [ ] Animations smooth

### Accessibility Tests
- [ ] Keyboard navigation works
- [ ] Screen reader announces state
- [ ] Focus managed correctly
- [ ] ARIA attributes correct

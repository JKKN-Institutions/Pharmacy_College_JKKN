# Text Size Documentation - Nursing College Website

This document provides a comprehensive list of all text sizes used across the entire website, organized by responsive breakpoints (from 320px up to large screens).

---

## Table of Contents
1. [Tailwind CSS Text Size Reference](#tailwind-css-text-size-reference)
2. [Text Sizes by Breakpoint](#text-sizes-by-breakpoint)
3. [Common Usage Patterns](#common-usage-patterns)
4. [Component-Specific Sizes](#component-specific-sizes)

---

## Tailwind CSS Text Size Reference

### Standard Tailwind Sizes (Pixel Values)

| Class Name | Font Size | Line Height | Usage Context |
|------------|-----------|-------------|---------------|
| `text-xs` | 12px | 16px (1rem) | Small labels, badges, captions |
| `text-sm` | 14px | 20px (1.25rem) | Body text (small), buttons, links |
| `text-base` | 16px | 24px (1.5rem) | Default body text, paragraphs |
| `text-lg` | 18px | 28px (1.75rem) | Large body text, subheadings |
| `text-xl` | 20px | 28px (1.75rem) | Small headings, card titles |
| `text-2xl` | 24px | 32px (2rem) | Section headings (h3) |
| `text-3xl` | 30px | 36px (2.25rem) | Page titles (h2) |
| `text-4xl` | 36px | 40px (2.5rem) | Major headings (h1) |
| `text-5xl` | 48px | 48px (3rem) | Hero titles |
| `text-6xl` | 60px | 60px (3.75rem) | Large hero titles |
| `text-7xl` | 72px | 72px (4.5rem) | Extra large hero titles |

### Custom Pixel Values Used

| Custom Class | Font Size | Usage Context |
|-------------|-----------|---------------|
| `text-[6px]` | 6px | Tiny labels on small badges |
| `text-[7px]` | 7px | Badge text on mobile |
| `text-[8px]` | 8px | Small badge text, tiny labels |
| `text-[9px]` | 9px | Badge text on larger mobile devices |
| `text-[10px]` | 10px | Badge subtitles, micro text |
| `text-[13px]` | 13px | Navigation menu items (Header) |

---

## Text Sizes by Breakpoint

### Mobile (320px - 639px) - Default (No Prefix)

**Headings:**
- Main Hero Title: `text-2xl` (24px)
- Page Titles (h1): `text-2xl` to `text-4xl` (24px - 36px)
- Section Titles (h2): `text-xl` to `text-3xl` (20px - 30px)
- Subsection Titles (h3): `text-xl` (20px)
- Card Titles (h4): `text-base` to `text-lg` (16px - 18px)

**Body Text:**
- Paragraph Text: `text-xs` to `text-base` (12px - 16px)
- Description Text: `text-sm` (14px)
- Small Text/Captions: `text-xs` (12px)
- Extra Small Text: `text-[8px]` to `text-[10px]` (8px - 10px)

**Interactive Elements:**
- Buttons: `text-sm` to `text-base` (14px - 16px)
- Navigation Links: `text-[13px]` (13px)
- Form Labels: `text-sm` (14px)

**Statistics/Numbers:**
- Large Stats: `text-2xl` to `text-4xl` (24px - 36px)
- Stat Labels: `text-[8px]` to `text-xs` (8px - 12px)

**Badges/Labels:**
- Badge Text: `text-[8px]` to `text-xs` (8px - 12px)
- Badge Titles: `text-[10px]` to `text-sm` (10px - 14px)

### Small Screens (640px - 767px) - `sm:` Prefix

**Headings:**
- Main Hero Title: `sm:text-3xl` (30px)
- Page Titles (h1): `sm:text-3xl` to `sm:text-4xl` (30px - 36px)
- Section Titles (h2): `sm:text-2xl` to `sm:text-3xl` (24px - 30px)
- Subsection Titles (h3): `sm:text-xl` (20px)
- Card Titles: `sm:text-base` to `sm:text-lg` (16px - 18px)

**Body Text:**
- Paragraph Text: `sm:text-sm` to `sm:text-base` (14px - 16px)
- Description Text: `sm:text-sm` to `sm:text-base` (14px - 16px)
- Small Text: `sm:text-xs` (12px)
- Micro Text: `sm:text-[9px]` to `sm:text-[10px]` (9px - 10px)

**Interactive Elements:**
- Buttons: `sm:text-base` (16px)
- Navigation: `sm:text-sm` (14px)

**Statistics:**
- Large Stats: `sm:text-3xl` to `sm:text-4xl` (30px - 36px)
- Stat Labels: `sm:text-[10px]` to `sm:text-sm` (10px - 14px)

**Footer:**
- Section Headings: `sm:text-xl` (20px)
- Links/Text: `sm:text-base` (16px)
- Copyright: `sm:text-sm` (14px)

### Medium Screens (768px - 1023px) - `md:` Prefix

**Headings:**
- Main Hero Title: `md:text-4xl` to `md:text-5xl` (36px - 48px)
- Page Titles (h1): `md:text-4xl` to `md:text-5xl` (36px - 48px)
- Section Titles (h2): `md:text-3xl` to `md:text-4xl` (30px - 36px)
- Subsection Titles (h3): `md:text-2xl` (24px)
- Card Titles: `md:text-lg` to `md:text-xl` (18px - 20px)

**Body Text:**
- Paragraph Text: `md:text-base` to `md:text-lg` (16px - 18px)
- Description Text: `md:text-base` (16px)
- Small Text: `md:text-sm` (14px)
- Badge Text: `md:text-xs` (12px)

**Interactive Elements:**
- Buttons: `md:text-base` to `md:text-lg` (16px - 18px)

**Statistics:**
- Large Stats: `md:text-4xl` to `md:text-5xl` (36px - 48px)
- Stat Labels: `md:text-xs` to `md:text-sm` (12px - 14px)

### Large Screens (1024px - 1279px) - `lg:` Prefix

**Headings:**
- Main Hero Title: `lg:text-5xl` to `lg:text-6xl` (48px - 60px)
- Page Titles (h1): `lg:text-5xl` to `lg:text-6xl` (48px - 60px)
- Section Titles (h2): `lg:text-4xl` to `lg:text-5xl` (36px - 48px)
- Subsection Titles (h3): `lg:text-2xl` to `lg:text-3xl` (24px - 30px)
- Card Titles: `lg:text-xl` (20px)

**Body Text:**
- Paragraph Text: `lg:text-base` to `lg:text-lg` (16px - 18px)
- Description Text: `lg:text-base` (16px)
- Small Text: `lg:text-sm` (14px)

**Statistics:**
- Large Stats: `lg:text-5xl` to `lg:text-6xl` (48px - 60px)
- Stat Labels: `lg:text-sm` (14px)

### Extra Large Screens (1280px - 1535px) - `xl:` Prefix

**Headings:**
- Main Hero Title: `xl:text-6xl` to `xl:text-7xl` (60px - 72px)
- Page Titles (h1): `xl:text-6xl` (60px)
- Section Titles (h2): `xl:text-5xl` (48px)

**Body Text:**
- Similar to `lg:` breakpoint with minor adjustments

### 2XL Screens (1536px+) - `2xl:` Prefix

**Limited usage in this project:**
- Badge text: `2xl:text-[10px]` (10px)
- Small text: `2xl:text-sm` (14px)

---

## Common Usage Patterns

### Pattern 1: Progressive Scaling for Hero Titles
```
text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
(24px → 30px → 36px → 48px → 60px)
```
**Used in:** Homepage hero section, course page hero sections

### Pattern 2: Standard Body Text Scaling
```
text-xs sm:text-sm md:text-base
(12px → 14px → 16px)
```
**Used in:** Paragraph text, descriptions

### Pattern 3: Section Title Scaling
```
text-xl sm:text-2xl md:text-3xl
(20px → 24px → 30px)
```
**Used in:** About section, course section titles

### Pattern 4: Button Text Scaling
```
text-sm sm:text-base md:text-lg
(14px → 16px → 18px)
```
**Used in:** Primary and secondary buttons

### Pattern 5: Card Title Scaling
```
text-base sm:text-lg md:text-xl lg:text-2xl
(16px → 18px → 20px → 24px)
```
**Used in:** Course cards, facility cards

### Pattern 6: Small Label/Caption
```
text-[8px] sm:text-[10px] md:text-xs
(8px → 10px → 12px)
```
**Used in:** Badge labels, stat labels, small captions

### Pattern 7: Navigation Text
```
text-[13px]
(13px - constant across all screens for desktop nav)
```
**Used in:** Header navigation menu items

---

## Component-Specific Sizes

### Header Component
- **Desktop Navigation Links**: `text-[13px]` (13px)
- **Dropdown Menu Items**: `text-sm` (14px)
- **Apply Now Button (Mobile)**: `text-sm` (14px)
- **Apply Now Button (Desktop)**: Regular size (no explicit class)

### Footer Component
- **Section Headings**: `text-lg sm:text-xl` (18px → 20px)
- **Contact Info**: `text-sm sm:text-base` (14px → 16px)
- **Address Text**: `text-sm sm:text-base` (14px → 16px)
- **Follow Us Heading**: `text-lg sm:text-xl` (18px → 20px)
- **Copyright Text**: `text-xs sm:text-sm` (12px → 14px)

### Hero Section (Homepage)
- **India's First Badge**: `text-[10px] md:text-xs` (10px → 12px)
- **AI Text (Large)**: `text-2xl md:text-3xl` (24px → 30px)
- **Empowered/College Text**: `text-[10px] md:text-xs` (10px → 12px)
- **NAAC Badge - "Accredited"**: `text-[8px] md:text-[9px]` (8px → 9px)
- **NAAC Badge - "B++"**: `text-3xl md:text-4xl` (30px → 36px)
- **NAAC Badge - "NAAC"**: `text-xs md:text-sm` (12px → 14px)
- **Main Title**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl` (24px → 30px → 36px → 48px → 60px)
- **Button Text**: `text-base md:text-lg` (16px → 18px)

### About Section (Homepage)
- **"About JKKN" Label**: `text-xs sm:text-sm` (12px → 14px)
- **Main Heading**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` (24px → 30px → 36px → 48px)
- **Body Paragraphs**: `text-sm sm:text-base` (14px → 16px)
- **Feature List Items**: `text-xs sm:text-sm` (12px → 14px)
- **Button Text**: `text-sm sm:text-base` (14px → 16px)

### Programs Section (Homepage)
- **Section Label**: `text-xs sm:text-sm` (12px → 14px)
- **Section Heading**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` (24px → 30px → 36px → 48px)
- **Program Card Title**: `text-2xl` (24px)
- **Duration Text**: `text-sm` (14px)
- **Description**: `text-sm` (14px)
- **Tags (Seats)**: `text-xs` (12px)
- **Internship Label**: `text-xs` (12px)
- **Career Text**: `text-sm` (14px)
- **Learn More Button**: `text-sm` (14px)

### Why Choose Us Section (Homepage)
- **Section Label**: `text-xs sm:text-sm` (12px → 14px)
- **Section Heading**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` (24px → 30px → 36px → 48px)
- **Description**: `text-sm sm:text-base` (14px → 16px)
- **Card Titles**: `text-lg sm:text-xl` (18px → 20px)
- **Card Description**: `text-xs sm:text-sm` (12px → 14px)

### Placement Section (Homepage)
- **Section Label**: `text-xs sm:text-sm` (12px → 14px)
- **Section Heading**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` (24px → 30px → 36px → 48px)
- **Stat Numbers**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` (24px → 30px → 36px → 48px)
- **Stat Labels**: `text-xs sm:text-sm` (12px → 14px)
- **Recruiter Names**: `text-sm` (14px)

### Campus Infrastructure Section (Homepage)
- **Section Label**: `text-sm` (14px)
- **Section Heading**: `text-4xl md:text-5xl` (36px → 48px)
- **Description**: Regular text (16px)
- **Facility Card Title**: `text-xl` (20px)
- **Facility Card Description**: `text-sm` (14px)

### Admissions Section (Homepage)
- **Section Label**: `text-sm` (14px)
- **Section Heading**: `text-4xl md:text-5xl` (36px → 48px)
- **Eligibility Title**: `text-2xl` (24px)
- **Feature Text**: Regular gray-700 text
- **CTA Heading**: `text-3xl` (30px)

### Testimonials Section (Homepage)
- **Section Label**: `text-sm` (14px)
- **Section Heading**: `text-4xl md:text-5xl` (36px → 48px)
- **Quote Text**: Regular italic text
- **Name**: Regular bold text
- **Designation**: `text-sm` (14px)

### FAQ Section (Homepage)
- **Section Label**: `text-sm` (14px)
- **Section Heading**: `text-4xl md:text-5xl` (36px → 48px)
- **Question Text**: `text-lg` (18px)
- **Answer Text**: Regular leading-relaxed text

### Final CTA Section (Homepage)
- **Heading**: `text-4xl md:text-5xl` (36px → 48px)
- **Description**: `text-lg` (18px)

### B.Sc Nursing Page (Course Page)
- **Badge Text**: `text-sm` (14px)
- **Hero Title**: `text-4xl md:text-5xl lg:text-6xl` (36px → 48px → 60px)
- **Hero Description**: `text-lg md:text-xl` (18px → 20px)
- **Stats Numbers**: `text-2xl sm:text-3xl md:text-4xl` (24px → 30px → 36px)
- **Stats Labels**: `text-xs sm:text-sm` (12px → 14px)
- **Programme Overview Title**: `text-3xl md:text-4xl` (30px → 36px)
- **Programme Body**: `text-lg` (18px)
- **Quick Facts Label**: `text-sm` (14px)
- **Quick Facts Heading**: `text-3xl md:text-4xl` (30px → 36px)
- **Card Labels**: `text-sm` (14px)
- **Card Numbers**: `text-2xl md:text-3xl` (24px → 30px)
- **Eligibility Section Label**: `text-sm` (14px)
- **Eligibility Heading**: `text-3xl md:text-4xl` (30px → 36px)
- **Eligibility Subtitle**: `text-2xl` (24px)
- **Curriculum Section**: `text-sm` (14px) for label, `text-3xl md:text-4xl` (30px → 36px) for heading
- **Year Tab Buttons**: Regular font-semibold
- **Curriculum Card Titles**: `text-xl` (20px)
- **Facility Card Main Title**: `text-3xl` (30px)
- **Facility Card Subtitle**: `text-xl` (20px)
- **Career Card Titles**: `text-xl` (20px)
- **Placement Stats**: `text-5xl md:text-6xl` (48px → 60px)
- **Placement Labels**: `text-xl` (20px)
- **Admission Step Numbers**: `text-2xl` (24px)
- **Admission Step Titles**: `text-2xl` (24px)
- **Admission Step Text**: `text-lg` (18px)
- **FAQ Questions**: `text-lg md:text-xl` (18px → 20px)
- **CTA Heading**: `text-3xl md:text-4xl lg:text-5xl` (30px → 36px → 48px)
- **CTA Description**: `text-lg md:text-xl` (18px → 20px)
- **CTA Button**: `text-lg` (18px)

### About Section Component
- **Section Title**: `text-xl sm:text-2xl md:text-3xl` (20px → 24px → 30px)
- **Body Text**: `text-xs sm:text-sm md:text-base` (12px → 14px → 16px)

### Courses Section Component
- **Section Title**: `text-xl sm:text-2xl md:text-3xl` (20px → 24px → 30px)
- **Course Title**: `text-xs sm:text-base md:text-lg lg:text-xl` (12px → 16px → 18px → 20px)

### Bottom Navigation (Mobile)
- Uses icon-based navigation with minimal text
- Text sizing matches general mobile patterns

### Breadcrumb Component
- Uses standard small text: `text-sm` (14px)

---

## Summary Statistics

### Total Unique Text Sizes Used:
- **Standard Tailwind Classes**: 15 different sizes (text-xs through text-7xl)
- **Custom Pixel Values**: 6 custom sizes (6px, 7px, 8px, 9px, 10px, 13px)
- **Responsive Variants**: Extensive use across 5 breakpoints (sm, md, lg, xl, 2xl)

### Most Frequently Used Sizes:
1. `text-sm` (14px) - Body text, descriptions, buttons
2. `text-base` (16px) - Default paragraph text
3. `text-xl` (20px) - Card titles, small headings
4. `text-2xl` (24px) - Section headings
5. `text-3xl` (30px) - Page titles
6. `text-4xl` (36px) - Major headings
7. `text-xs` (12px) - Labels, captions, small text

### Breakpoint Usage:
- **Mobile (default)**: Heavy use of text-xs, text-sm, text-base
- **Small (640px+)**: Gradual increase to text-sm, text-base, text-lg
- **Medium (768px+)**: Shift to text-base, text-lg, text-xl as defaults
- **Large (1024px+)**: Emphasis on text-lg, text-xl, text-2xl
- **Extra Large (1280px+)**: Maximum sizes for hero sections

---

## Notes for Reuse

1. **Mobile-First Approach**: All text sizes start with mobile defaults and progressively scale up
2. **Consistent Scaling**: Most text follows a predictable scaling pattern across breakpoints
3. **Tailwind CSS**: Project uses Tailwind CSS utility classes exclusively (no custom CSS font-size declarations)
4. **Custom Values**: Custom pixel values (text-[Xpx]) are used sparingly for precise control
5. **Line Height**: Tailwind automatically applies appropriate line heights for each text size
6. **Font Family**: All text uses Poppins font family (defined in tailwind.config.ts)

---

*Document generated: 2026-02-07*
*Source: Nursing College Website Codebase*
*Framework: Next.js 14+ with Tailwind CSS*

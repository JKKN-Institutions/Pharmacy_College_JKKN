// TypeScript interfaces for navigation structure

/**
 * Represents a submenu item in the navigation hierarchy.
 * Can be nested up to 4 levels deep.
 */
export interface SubmenuItem {
  /** Display label for the menu item */
  label: string;
  /** URL path for the menu item */
  href: string;
  /** Optional nested submenu items */
  submenu?: SubmenuItem[];
}

/**
 * Represents a top-level navigation item.
 * Used for main navigation rows (topMenuItems, bottomMenuItems).
 */
export interface NavItem {
  /** Display label for the navigation item */
  label: string;
  /** URL path for the navigation item */
  href: string;
  /** Optional submenu items (first level dropdown) */
  submenu?: SubmenuItem[];
}

/**
 * Configuration for special menu behaviors.
 * Customize which menus get special treatment.
 */
export interface MenuConfig {
  /** Menu labels that should use 2-column layout */
  twoColumnMenus: string[];
  /** Menu labels that should align to the right with left-opening submenus */
  rightAlignedMenus: string[];
}

/**
 * Default menu configuration.
 * Modify these arrays to change which menus get special treatment.
 */
export const defaultMenuConfig: MenuConfig = {
  twoColumnMenus: ['COMMITTEE', 'FACILITIES'],
  rightAlignedMenus: ['OTHERS', 'RESEARCH'],
};

/**
 * Props for the Header component.
 */
export interface HeaderProps {
  /** Custom logo image path (default: /images/logo.png) */
  logoSrc?: string;
  /** Alt text for logo image */
  logoAlt?: string;
  /** CTA button text (default: "Apply Now") */
  ctaText?: string;
  /** CTA button URL (default: "/apply") */
  ctaHref?: string;
  /** Custom menu configuration */
  menuConfig?: Partial<MenuConfig>;
}

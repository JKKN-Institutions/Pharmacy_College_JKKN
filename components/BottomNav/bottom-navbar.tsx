'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  MoreHorizontal,
  Info,
  GraduationCap,
  BookOpen,
  Building2,
  Award,
  ClipboardCheck,
  Users,
  FlaskConical,
  Briefcase,
  UsersRound,
  FolderOpen,
  Image,
  FileText,
  Shield,
  Phone,
  LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useBottomNav, useBottomNavHydration } from '@/hooks/use-bottom-nav';
import { navigationMenu } from '@/data/siteData';
import { BottomNavItem } from './bottom-nav-item';
import { BottomNavSubmenu } from './bottom-nav-submenu';
import { BottomNavMoreMenu } from './bottom-nav-more-menu';
import { NavItemData, SubmenuItem } from './types';

// Icon mapping for navigation items
const NAV_ICONS: Record<string, LucideIcon> = {
  'HOME': Home,
  'ABOUT': Info,
  'PROGRAMS OFFERED': GraduationCap,
  'ACADEMIC': BookOpen,
  'FACILITIES': Building2,
  'NACC': Award,
  'IQAC': ClipboardCheck,
  'ALUMNI': Users,
  'NIRF': Award,
  'RESEARCH': FlaskConical,
  'PLACEMENT': Briefcase,
  'COMMITTEE': UsersRound,
  'OTHERS': FolderOpen,
  'GALLERY': Image,
  'CIRCULARS AND NOTICES': FileText,
  'MANDATORY DISCLOSURES': Shield,
  'CONTACT': Phone
};

// Transform navigation menu to include icons
function transformNavItems(items: typeof navigationMenu): NavItemData[] {
  return items.map(item => ({
    label: item.label,
    href: item.href,
    icon: NAV_ICONS[item.label] || Home,
    submenu: item.submenu as SubmenuItem[] | undefined
  }));
}

export function BottomNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();
  const hasHydrated = useBottomNavHydration();

  const {
    activeNavId,
    isExpanded,
    isMoreMenuOpen,
    setActiveNav,
    switchToNav,
    setExpanded,
    setMoreMenuOpen
  } = useBottomNav();

  // Transform navigation items with icons
  const allNavItems = useMemo(() => transformNavItems(navigationMenu), []);

  // Primary nav items (first 4)
  const primaryNavItems = useMemo(() => allNavItems.slice(0, 4), [allNavItems]);

  // Remaining items for "More" menu
  const moreNavItems = useMemo(() => allNavItems.slice(4), [allNavItems]);

  // Find current active nav based on pathname
  const currentActiveNav = useMemo(() => {
    for (const item of allNavItems) {
      if (pathname === item.href) return item;
      if (item.submenu) {
        for (const sub of item.submenu) {
          if (pathname === sub.href || pathname.startsWith(sub.href + '/')) return item;
          if (sub.submenu) {
            for (const nested of sub.submenu) {
              if (pathname === nested.href || pathname.startsWith(nested.href + '/')) return item;
              if (nested.submenu) {
                for (const deep of nested.submenu) {
                  if (pathname === deep.href || pathname.startsWith(deep.href + '/')) return item;
                }
              }
            }
          }
        }
      }
    }
    return allNavItems[0];
  }, [pathname, allNavItems]);

  // Get the effective active nav ID
  const effectiveActiveNavId = useMemo(() => {
    if (isExpanded && activeNavId) {
      return activeNavId;
    }
    return currentActiveNav?.label || null;
  }, [currentActiveNav, activeNavId, isExpanded]);

  // Get current submenu items
  const activeSubmenus = useMemo(() => {
    if (effectiveActiveNavId) {
      const selectedItem = allNavItems.find(item => item.label === effectiveActiveNavId);
      if (selectedItem?.submenu) {
        return selectedItem.submenu;
      }
    }
    return currentActiveNav?.submenu || [];
  }, [effectiveActiveNavId, allNavItems, currentActiveNav]);

  // Handle nav item click
  const handleNavClick = useCallback(
    (item: NavItemData) => {
      if (item.submenu && item.submenu.length > 0) {
        // Has submenu - toggle expansion
        if (isExpanded && activeNavId === item.label) {
          setExpanded(false);
          setMoreMenuOpen(false);
        } else {
          switchToNav(item.label);
        }
      } else {
        // No submenu - navigate directly
        router.push(item.href);
        setExpanded(false);
        setMoreMenuOpen(false);
      }
    },
    [activeNavId, isExpanded, switchToNav, setExpanded, setMoreMenuOpen, router]
  );

  // Handle submenu item click
  const handleSubmenuClick = useCallback(
    (href: string) => {
      router.push(href);
      setExpanded(false);
    },
    [router, setExpanded]
  );

  // Handle More menu
  const handleMoreClick = useCallback(() => {
    setExpanded(false);
    setMoreMenuOpen(!isMoreMenuOpen);
  }, [setMoreMenuOpen, setExpanded, isMoreMenuOpen]);

  // Handle More menu item click
  const handleMoreItemClick = useCallback(
    (href: string) => {
      router.push(href);
      setMoreMenuOpen(false);
    },
    [router, setMoreMenuOpen]
  );

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-bottom-nav]')) {
        setExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isExpanded, setExpanded]);

  // Wait for hydration
  if (!hasHydrated) {
    return null;
  }

  // Only show on mobile
  if (!isMobile) {
    return null;
  }

  return (
    <>
      {/* Backdrop when submenu expanded */}
      <AnimatePresence>
        {isExpanded && !isMoreMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[75] lg:hidden"
            onClick={() => setExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Bottom navigation bar */}
      <motion.nav
        data-bottom-nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 35,
          mass: 0.8
        }}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-[80]',
          'lg:hidden',
          'bg-white border-t border-gray-200',
          'shadow-[0_-4px_20px_rgba(0,0,0,0.1)]'
        )}
        style={{
          paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        }}
      >
        {/* Expanded submenu */}
        <BottomNavSubmenu
          items={activeSubmenus}
          isOpen={isExpanded && activeSubmenus.length > 0}
          onItemClick={handleSubmenuClick}
          onClose={() => setExpanded(false)}
          parentLabel={effectiveActiveNavId || undefined}
        />

        {/* Nav items */}
        <div className="flex items-center justify-around">
          {primaryNavItems.map((item) => (
            <BottomNavItem
              key={item.label}
              id={item.label}
              icon={item.icon}
              label={item.label}
              isActive={effectiveActiveNavId === item.label}
              hasSubmenu={!!item.submenu && item.submenu.length > 0}
              onClick={() => handleNavClick(item)}
            />
          ))}

          {/* More button */}
          {moreNavItems.length > 0 && (
            <BottomNavItem
              id="more"
              icon={MoreHorizontal}
              label="More"
              isActive={isMoreMenuOpen}
              hasSubmenu={true}
              badgeCount={moreNavItems.length}
              onClick={handleMoreClick}
            />
          )}
        </div>
      </motion.nav>

      {/* More menu */}
      <BottomNavMoreMenu
        groups={moreNavItems}
        isOpen={isMoreMenuOpen}
        onClose={() => setMoreMenuOpen(false)}
        onItemClick={handleMoreItemClick}
      />
    </>
  );
}

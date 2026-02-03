import { LucideIcon } from 'lucide-react';

export interface SubmenuItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

export interface NavItemData {
  label: string;
  href: string;
  icon: LucideIcon;
  submenu?: SubmenuItem[];
}

export interface FlatMenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
  parentLabel?: string;
  level?: number;
}

export interface BottomNavItemProps {
  id: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  hasSubmenu: boolean;
  badgeCount?: number;
  onClick: () => void;
}

export interface BottomNavSubmenuProps {
  items: SubmenuItem[];
  isOpen: boolean;
  onItemClick: (href: string) => void;
  onClose: () => void;
}

export interface BottomNavMoreMenuProps {
  groups: NavItemData[];
  isOpen: boolean;
  onClose: () => void;
  onItemClick: (href: string) => void;
}

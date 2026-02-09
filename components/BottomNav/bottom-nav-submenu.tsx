'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SubmenuItem } from './types';
import { usePathname } from 'next/navigation';

interface BottomNavSubmenuProps {
  items: SubmenuItem[];
  isOpen: boolean;
  onItemClick: (href: string) => void;
  onClose: () => void;
  parentLabel?: string;
}

const containerSpring = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 35,
  mass: 0.8
};

function SubmenuItemComponent({
  item,
  onItemClick,
  level = 0
}: {
  item: SubmenuItem;
  onItemClick: (href: string) => void;
  level?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  const handleClick = () => {
    if (hasSubmenu) {
      setIsExpanded(!isExpanded);
    } else {
      onItemClick(item.href);
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className={cn(
          'w-full flex items-center justify-between px-4 py-3 text-left transition-colors',
          'hover:bg-gray-50 active:bg-gray-100',
          'focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-[#0F6B3E] focus:ring-inset',
          isActive ? 'text-[#0F6B3E] font-medium' : 'text-gray-700',
          level > 0 && 'pl-6 border-l-2 border-gray-100'
        )}
      >
        <span className="text-xs xs:text-sm truncate flex-1">{item.label}</span>
        {hasSubmenu && (
          <motion.span
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </motion.span>
        )}
      </button>

      <AnimatePresence>
        {hasSubmenu && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-gray-50/50"
          >
            {item.submenu!.map((subItem) => (
              <SubmenuItemComponent
                key={subItem.href}
                item={subItem}
                onItemClick={onItemClick}
                level={level + 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BottomNavSubmenu({
  items,
  isOpen,
  onItemClick,
  onClose,
  parentLabel
}: BottomNavSubmenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            height: containerSpring,
            opacity: { duration: 0.12 }
          }}
          className="overflow-hidden border-t border-gray-200 bg-white"
        >
          <motion.div
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{
              y: { type: 'spring', stiffness: 500, damping: 30 },
              opacity: { duration: 0.1 }
            }}
            className="max-h-[50vh] overflow-y-auto"
          >
            {parentLabel && (
              <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                <span className="text-[9px] xs:text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                  {parentLabel}
                </span>
              </div>
            )}
            <div className="divide-y divide-gray-100">
              {items.map((item) => (
                <SubmenuItemComponent
                  key={item.href}
                  item={item}
                  onItemClick={onItemClick}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

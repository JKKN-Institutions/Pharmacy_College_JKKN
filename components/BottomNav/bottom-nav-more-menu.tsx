'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavItemData, SubmenuItem } from './types';

interface BottomNavMoreMenuProps {
  groups: NavItemData[];
  isOpen: boolean;
  onClose: () => void;
  onItemClick: (href: string) => void;
}

function RecursiveSubmenu({
  items,
  onItemClick,
  level = 0
}: {
  items: SubmenuItem[];
  onItemClick: (href: string) => void;
  level?: number;
}) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const pathname = usePathname();

  const toggleItem = (label: string) => {
    const newSet = new Set(expandedItems);
    if (newSet.has(label)) {
      newSet.delete(label);
    } else {
      newSet.add(label);
    }
    setExpandedItems(newSet);
  };

  return (
    <div className={cn('space-y-0.5', level > 0 && 'ml-3 border-l-2 border-gray-100')}>
      {items.map((item) => {
        const hasSubmenu = item.submenu && item.submenu.length > 0;
        const isExpanded = expandedItems.has(item.label);
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

        return (
          <div key={item.href} className="w-full">
            <button
              onClick={() => {
                if (hasSubmenu) {
                  toggleItem(item.label);
                } else {
                  onItemClick(item.href);
                }
              }}
              className={cn(
                'w-full flex items-center justify-between px-3 py-2.5 text-left transition-colors rounded-lg',
                'hover:bg-gray-50 active:bg-gray-100',
                isActive ? 'text-[#0F6B3E] font-medium bg-green-50' : 'text-gray-700'
              )}
            >
              <span className={cn('text-sm truncate flex-1', level > 0 && 'text-[13px]')}>
                {item.label}
              </span>
              {hasSubmenu && (
                <motion.span
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-2"
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
                  className="overflow-hidden"
                >
                  <RecursiveSubmenu
                    items={item.submenu!}
                    onItemClick={onItemClick}
                    level={level + 1}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function BottomNavMoreMenu({
  groups,
  isOpen,
  onClose,
  onItemClick
}: BottomNavMoreMenuProps) {
  const pathname = usePathname();
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  // Expand all groups by default when menu opens
  useEffect(() => {
    if (isOpen) {
      setExpandedGroups(new Set(groups.map(g => g.label)));
    }
  }, [isOpen, groups]);

  const toggleGroup = (label: string) => {
    const newSet = new Set(expandedGroups);
    if (newSet.has(label)) {
      newSet.delete(label);
    } else {
      newSet.add(label);
    }
    setExpandedGroups(newSet);
  };

  const handleItemClick = (href: string) => {
    onItemClick(href);
    onClose();
  };

  const hasActiveItemInGroup = (group: NavItemData): boolean => {
    if (pathname === group.href || pathname.startsWith(group.href + '/')) return true;
    if (group.submenu) {
      return group.submenu.some(item => {
        if (pathname === item.href || pathname.startsWith(item.href + '/')) return true;
        if (item.submenu) {
          return item.submenu.some(sub =>
            pathname === sub.href || pathname.startsWith(sub.href + '/')
          );
        }
        return false;
      });
    }
    return false;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[85] lg:hidden"
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30
            }}
            className="fixed bottom-0 left-0 right-0 h-[80vh] bg-white rounded-t-3xl z-[90] lg:hidden flex flex-col shadow-2xl"
            style={{
              paddingBottom: 'env(safe-area-inset-bottom, 0px)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-lg font-semibold text-gray-900">All Menus</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-3 py-3">
              <div className="space-y-2">
                {groups.map((group) => {
                  const Icon = group.icon;
                  const isExpanded = expandedGroups.has(group.label);
                  const hasSubmenu = group.submenu && group.submenu.length > 0;
                  const isActive = hasActiveItemInGroup(group);
                  const itemCount = group.submenu?.length || 0;

                  return (
                    <div
                      key={group.label}
                      className="border border-gray-100 rounded-xl overflow-hidden"
                    >
                      {/* Group Header */}
                      <button
                        onClick={() => {
                          if (hasSubmenu) {
                            toggleGroup(group.label);
                          } else {
                            handleItemClick(group.href);
                          }
                        }}
                        className={cn(
                          'w-full flex items-center gap-3 px-4 py-3 transition-colors',
                          'hover:bg-gray-50',
                          isActive ? 'bg-green-50' : 'bg-white'
                        )}
                      >
                        <div
                          className={cn(
                            'p-2 rounded-lg',
                            isActive ? 'bg-[#0F6B3E]/10' : 'bg-gray-100'
                          )}
                        >
                          <Icon
                            className={cn(
                              'h-4 w-4',
                              isActive ? 'text-[#0F6B3E]' : 'text-gray-600'
                            )}
                            strokeWidth={isActive ? 2.5 : 2}
                          />
                        </div>
                        <span
                          className={cn(
                            'font-medium text-sm flex-1 text-left',
                            isActive ? 'text-[#0F6B3E]' : 'text-gray-800'
                          )}
                        >
                          {group.label}
                        </span>
                        {hasSubmenu && (
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          </motion.span>
                        )}
                      </button>

                      {/* Group Content */}
                      <AnimatePresence>
                        {hasSubmenu && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden border-t border-gray-100 bg-gray-50/50"
                          >
                            <div className="p-2">
                              <RecursiveSubmenu
                                items={group.submenu!}
                                onItemClick={handleItemClick}
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

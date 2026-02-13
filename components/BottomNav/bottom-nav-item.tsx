'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BottomNavItemProps } from './types';

const tapSpring = {
  type: 'spring' as const,
  stiffness: 600,
  damping: 25
};

const iconSpring = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 20
};

const indicatorSpring = {
  type: 'spring' as const,
  stiffness: 600,
  damping: 30
};

export function BottomNavItem({
  id,
  icon: Icon,
  label,
  isActive,
  hasSubmenu,
  badgeCount,
  onClick
}: BottomNavItemProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'relative flex flex-col items-center justify-center px-1 py-2 min-w-[50px] xs:min-w-[60px] sm:min-w-[70px] flex-1',
        'transition-colors duration-150',
        'focus:outline-none rounded',
        isActive ? 'text-[#0F6B3E]' : 'text-gray-500'
      )}
      whileTap={{ scale: 0.92 }}
      transition={tapSpring}
    >
      <motion.div
        className="relative"
        animate={{
          scale: isActive ? 1.15 : 1,
          y: isActive ? -2 : 0
        }}
        transition={iconSpring}
      >
        <motion.div
          animate={{
            rotate: isActive ? [0, -5, 5, 0] : 0
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut'
          }}
        >
          <Icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" strokeWidth={isActive ? 2.5 : 2} />
        </motion.div>
      </motion.div>

      <motion.span
        className={cn(
          'text-[8px] xs:text-[9px] sm:text-[10px] mt-1 font-medium truncate max-w-full text-center leading-tight',
          isActive && 'font-semibold'
        )}
        animate={{
          opacity: isActive ? 1 : 0.7,
          y: isActive ? 1 : 0
        }}
        transition={{ duration: 0.15 }}
      >
        {label}
      </motion.span>

      {isActive && (
        <motion.div
          layoutId="bottomNavActiveIndicator"
          className="absolute bottom-0 h-0.5 w-8 rounded-full bg-[#0F6B3E]"
          transition={indicatorSpring}
        />
      )}
    </motion.button>
  );
}

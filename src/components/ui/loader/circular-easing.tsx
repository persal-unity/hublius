'use client';

import { motion } from 'motion/react';
import type { CSSProperties, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export type CircularEasingProps = HTMLAttributes<HTMLDivElement> & {
  strokeLinecap?: 'butt' | 'round' | 'square';
  strokeWidth?: number;
  width?: number;
};

export function CircularEasing({
  width = 20,
  strokeLinecap = 'round',
  strokeWidth = 5,
  className,
  style,
  ...props
}: CircularEasingProps) {
  return (
    <div
      style={{ '--circularWidth': `${width}px`, ...style } as CSSProperties}
      {...props}
      className={cn(
        'relative',
        'm-0',
        'w-[--circularWidth]',
        'aspect-square',
        className,
      )}
    >
      <motion.svg
        animate={{
          transform: 'rotate(360deg)',
          transition: { repeat: Infinity, duration: 2, ease: 'linear' },
        }}
        viewBox="25 25 50 50"
        className={cn(
          'h-full w-full',
          'absolute inset-x-0 inset-y-0',
          'origin-center',
          'm-auto',
        )}
      >
        <motion.circle
          animate={{
            strokeDasharray: ['1, 200', '89, 200', '89, 200'],
            strokeDashoffset: [0, -35, -124],
            transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
          }}
          className="text-slate-50 dark:text-neutral-800"
          cx="50"
          cy="50"
          fill="none"
          r="20"
          strokeDasharray="1, 200"
          strokeDashoffset="0"
          stroke="currentColor"
          strokeLinecap={strokeLinecap}
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
        />
      </motion.svg>
    </div>
  );
}

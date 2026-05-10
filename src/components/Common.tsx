import React, { useEffect, useRef, useState } from 'react';
import { useInView, motion, animate } from 'motion/react';
import { cn } from '../lib/utils';

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export function Counter({ value, label, suffix = '' }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-5xl md:text-6xl font-display font-extrabold text-primary mb-2 tabular-nums">
        {displayValue}{suffix}
      </div>
      <div className="text-sm font-bold uppercase tracking-wider text-gray-500 group-hover:text-secondary transition-colors">
        {label}
      </div>
    </div>
  );
}

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ badge, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={cn(
      'mb-16',
      align === 'center' ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-3xl'
    )}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/10"
      >
        {badge}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-500 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

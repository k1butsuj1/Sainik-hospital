import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface DepartmentCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

export default function DepartmentCard({ name, description, icon: Icon }: DepartmentCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group h-full"
    >
      <div
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
        className="h-full p-10 card-editorial flex flex-col items-start gap-6 border-slate-200/60"
      >
        <div className="w-16 h-16 bg-blue-50/50 rounded-[1.25rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-blue-100">
          <Icon size={32} />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-slate-900 mb-2 leading-tight">{name}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        </div>
        
        <div className="mt-auto pt-6 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
          Explore Specialty
          <span className="text-base">→</span>
        </div>
      </div>
    </motion.div>
  );
}

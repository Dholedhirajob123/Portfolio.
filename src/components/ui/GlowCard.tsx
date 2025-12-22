import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlowCard = ({ children, className = "", hoverEffect = true }: GlowCardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`relative group rounded-xl bg-card border border-border overflow-hidden ${className}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowCard;

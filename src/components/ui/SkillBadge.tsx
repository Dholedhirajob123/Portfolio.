import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  icon?: string;
  delay?: number;
}

const SkillBadge = ({ name, delay = 0 }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="px-4 py-2 rounded-full bg-secondary border border-border text-foreground text-sm font-medium hover:border-primary hover:glow-box transition-all cursor-default"
    >
      {name}
    </motion.div>
  );
};

export default SkillBadge;

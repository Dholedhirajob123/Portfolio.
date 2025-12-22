import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ParticleField from "@/components/three/ParticleField";
import SkillBadge from "@/components/ui/SkillBadge";

const skills = [
  "AI Enthusiast",
  "Machine Learning Engineer",
  "Deep Learning Expert",
  "Computer Vision Researcher",
  "Developer",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <ParticleField />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/50 glow-box animate-pulse-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-bold text-primary">KD</span>
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-4 rounded-full border border-primary/20 animate-spin-slow" />
              <div className="absolute inset-0 -m-8 rounded-full border border-primary/10" />
            </motion.div>

            {/* Content */}
            <div className="text-center lg:text-left max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
              >
                Hi, I'm <span className="text-primary glow-text">Kunj Desai</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground mb-6"
              >
                Artificial Intelligence Engineer | Frontend Developer | Tech
              </motion.p>

              {/* Skills Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              >
                {skills.map((skill, index) => (
                  <SkillBadge key={skill} name={skill} delay={index * 0.1} />
                ))}
              </motion.div>

              {/* Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="text-primary" size={18} />
                  <span>Surat, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="text-primary" size={18} />
                  <span>Active Problem-solving</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="text-primary" size={18} />
                  <span>kunjp2012@gmail.com</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-box"
                >
                  View Projects
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary border border-border text-foreground font-medium hover:border-primary hover:glow-box transition-all"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;

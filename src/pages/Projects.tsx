import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const projects = [
  {
    title: "Novapex Infohub",
    description: "My company website - A modern digital solutions agency offering web development, design, and technology services.",
    tags: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    category: "Company Website",
    live: true,
    liveUrl: "#",
    github: "#",
  },
  {
    title: "SriManPower",
    description: "A comprehensive manpower and recruitment solutions platform connecting employers with skilled workforce.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Business Platform",
    live: true,
    liveUrl: "#",
    github: "#",
  },
  {
    title: "Janori Gram Panchayat",
    description: "Official website for Janori Gram Panchayat providing digital governance and community services.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    category: "Government",
    live: true,
    liveUrl: "#",
    github: "#",
  },
  {
    title: "Citi Offers",
    description: "E-commerce platform featuring deals, discounts, and offers from various brands and retailers.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "E-commerce",
    live: true,
    liveUrl: "#",
    github: "#",
  },
  {
    title: "BookEasy",
    description: "Online booking platform for seamless reservations and appointment scheduling across various services.",
    tags: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    category: "Booking Platform",
    live: true,
    liveUrl: "#",
    github: "#",
  },
  {
    title: "Risod Election",
    description: "Election management and information portal for local governance and democratic processes.",
    tags: ["React", "MySQL", "PHP", "Bootstrap"],
    category: "Government",
    live: true,
    liveUrl: "#",
    github: "#",
  },
  {
    title: "Restaurant Platform",
    description: "Complete restaurant management solution with online ordering, menu management, and table reservations.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Food & Dining",
    live: true,
    liveUrl: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured Projects"
            subtitle="A collection of my recent work in AI, Machine Learning, and Web Development"
            highlight="My Work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowCard className="h-full">
                  <div className="p-6 flex flex-col h-full">
                    {/* Category Badge */}
                    <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-4">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded bg-secondary text-muted-foreground text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      {project.live && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink size={14} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

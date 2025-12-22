import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const projects = [
  {
    title: "Mammogram Malignancy Detection",
    description: "ResNet CNN + VGG16 ensemble for 3 image breast cancer detection with 92% preprocessing and image preprocessing pipeline.",
    tags: ["TensorFlow", "Python", "OpenCV", "VGG16"],
    category: "AI/ML",
    live: true,
  },
  {
    title: "Indian Sign Language Interpreter",
    description: "Interpreter for video recognition and translation using MediaPipe + TensorFlow + existing large language model API.",
    tags: ["MediaPipe", "TensorFlow", "Real-Time", "Flask"],
    category: "Computer Vision",
    live: true,
  },
  {
    title: "DocsChat - Gemini AI Chatbot",
    description: "An intelligent document interaction chat app using the Gemini API that allows query of answers from uploaded PDFs.",
    tags: ["Gemini API", "LangChain", "Streamlit"],
    category: "GenAI",
    live: true,
  },
  {
    title: "Breast Cancer Prediction",
    description: "ML pipeline using SVC, Random Forest, and ensemble methods for breast cancer classification.",
    tags: ["Scikit-learn", "Pandas", "NumPy"],
    category: "Machine Learning",
    live: false,
  },
  {
    title: "ProMed - Data Profiler",
    description: "Smart data profiling and preprocessing web app for machine learning workflows.",
    tags: ["Python", "Streamlit", "Pandas"],
    category: "Data Science",
    live: true,
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
                      <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Github size={16} />
                        Code
                      </button>
                      {project.live && (
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                          <Eye size={14} />
                          Live
                        </button>
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

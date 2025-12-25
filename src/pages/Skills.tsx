import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";

const skillCategories = [
 {
    category: "Languages",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "C" ],
  },
  {
    category: "Frontend",
    items: ["React.js (Hooks, Router, Context API / Redux)", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub","VS Code", " Netlify", "Vercel"],
  },
    {
    category: "Web Concepts",
    items: ["REST APIs", "Responsive Design","Component-Based Architecture"],
  },
];

const Skills = () => {
  return (
    <Layout>
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="My Skills"
            subtitle="Technical expertise blended with creativity — explore my core competencies below"
            highlight="Skills"
          />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;

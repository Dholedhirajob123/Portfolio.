import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, GraduationCap, Award, Briefcase } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";

const Resume = () => {
  return (
    <Layout>
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            title="Resume"
            subtitle="Quick summary below and full resume preview with download option"
            highlight="CV"
          />

          {/* Download Button */}
          <div className="flex justify-center mb-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-box">
              <Download size={18} />
              Download Resume
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Personal Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="text-2xl">👤</span> Kunj Desai
                </h3>
                <p className="text-muted-foreground mb-4">
                  Machine Learning & AI Developer
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    Surat, India
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    kunjp2012@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="text-primary" size={20} />
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/50 pl-4">
                    <h4 className="font-medium text-foreground">
                      B.Tech in Computer Engineering
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sarvajanik University (2020-2024)
                    </p>
                    <p className="text-xs text-primary mt-1">
                      Specialization: Artificial Intelligence & Machine Learning
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Award className="text-primary" size={20} />
                  Achievements
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    1st Prize — Best Science Project Excellence
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    Finalist — College Hackathon 2023
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    Published ML Research Paper in IEEE
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Projects & Experience */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="text-primary" size={20} />
                  Projects & Experience
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/50 pl-4">
                    <h4 className="font-medium text-foreground">
                      Breast Cancer Detection using CNN & VGG Ensemble
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Research Project focusing on mammogram X&D preprocessing and classification
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-4">
                    <h4 className="font-medium text-foreground">
                      ISL Interpreter
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time Indian Sign Language detection and text conversion using MediaPipe & TensorFlow
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-4">
                    <h4 className="font-medium text-foreground">
                      ProMed App
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Smart data profiling & preprocessing tool built with Python and Streamlit
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Key Skills */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Key Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "TensorFlow", "JavaScript", "React", "NER/NLP", "Excel"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;

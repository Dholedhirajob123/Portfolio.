import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, GraduationCap, Award, Briefcase, Eye, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import appointmentLetter from "@/assets/Appointment_Letter.jpeg";

const Resume = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = appointmentLetter;
    link.download = "Dhiraj_Dhole_Appointment_Letter.jpeg";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            title="Resume"
            subtitle="Quick summary below and full resume preview with download option"
            highlight="CV"
          />

          {/* Resume Document Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 max-w-md mx-auto"
          >
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <FileText className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Appointment Letter</h3>
                  <p className="text-sm text-muted-foreground">KP Infotech Services Pvt. Ltd.</p>
                </div>
              </div>
              
              {/* Thumbnail Preview */}
              <div 
                className="relative mb-4 rounded-lg overflow-hidden border border-border cursor-pointer group"
                onClick={() => setIsDialogOpen(true)}
              >
                <img 
                  src={appointmentLetter} 
                  alt="Appointment Letter" 
                  className="w-full h-48 object-cover object-top transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="text-primary" size={32} />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsDialogOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-all"
                >
                  <Eye size={16} />
                  View
                </button>
                <button 
                  onClick={handleDownload}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-box"
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          </motion.div>

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
                  <span className="text-2xl">👤</span> Dhiraj Dhole
                </h3>
                <p className="text-muted-foreground mb-4">
                  Web Developer & Frontend Developer
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

      {/* View Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Appointment Letter</DialogTitle>
          </DialogHeader>
          <img 
            src={appointmentLetter} 
            alt="Appointment Letter" 
            className="w-full rounded-lg"
          />
          <div className="flex justify-end mt-4">
            <button 
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
            >
              <Download size={16} />
              Download
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Resume;
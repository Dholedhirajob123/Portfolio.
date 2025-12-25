import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, GraduationCap, Award, Briefcase, Eye, FileText, Contact } from "lucide-react";
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

  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    // Format: +919922837879 (remove hyphens)
    const phoneNumber = "+919922837879";
    // URL-encoded default message
    const message = encodeURIComponent("Hello, I'm reaching out from your portfolio website.");
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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
                    Pune, India
                  </p>
                  {/* Clickable Email Link */}
                   <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=dholedhirajob123@gmail.com" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-primary transition-colors"
  >
    <Mail size={16} className="text-primary" />
    dholedhirajob123@gmail.com
  </a>
                  {/* Clickable WhatsApp Link */}
                  <button 
                    onClick={handleWhatsAppClick}
                    className="flex items-center gap-2 hover:text-primary transition-colors w-full text-left"
                  >
                    <Contact size={14} className="text-primary" />
                    +91-9922837879
                  </button>
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
                    <h4 className="font-medium text-foreground">B.Tech/B.E.</h4>
                    <p className="text-sm text-muted-foreground">
                      Jawaharlal Nehru Engineering College, Ch. Sambhajinagar (2023)
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-4">
                    <h4 className="font-medium text-foreground">HSC</h4>
                    <p className="text-sm text-muted-foreground">
                      Bhavana Public School, Risod (2019)
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-4">
                    <h4 className="font-medium text-foreground">SSC</h4>
                    <p className="text-sm text-muted-foreground">
                      Bhavana Public School, Risod (2017)
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="text-primary" size={20} />
                  Certification
                </h3>
                <div className="border-l-2 border-primary/50 pl-4">
                  <h4 className="font-medium text-foreground">Full Stack Developer & IT Developer</h4>
                  <p className="text-sm text-muted-foreground">K.P Infotech Services Pvt. Ltd.</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Projects & Experience */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="text-primary" size={20} />
                  Projects & Experience
                </h3>
             <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="text-primary" size={20} />
                  Work Experience - Novapex Infohub, Pune
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/50 pl-4">
                    <h4 className="font-medium text-foreground">Citi Offers – E-commerce Website</h4>
                    <a 
                      href="https://citioffers.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      citioffers.in
                    </a>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Built interactive web platform for Citi card offers</li>
                      <li>• Optimized frontend performance, reducing load time by 40%</li>
                      <li>• Lead Frontend technology selection and architecture</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-4">
                    <h4 className="font-medium text-foreground">Book Easy</h4>
                    <a 
                      href="https://bookeasy.citioffers.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      bookeasy.citioffers.in
                    </a>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Developed responsive appointment booking web app</li>
                      <li>• Implemented PWA features with offline support</li>
                      <li>• Optimized UI across mobile, tablet, and desktop</li>
                    </ul>
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
        <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {["HTML5", "CSS3", "JavaScript (ES6+)"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Frontend</p>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Tailwind CSS", "Redux"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Backend</p>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "MongoDB"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "VS Code", "Postman", "Netlify"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
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
              <h3 className="font-semibold text-foreground">Resume</h3>
              {/* <p className="text-sm text-muted-foreground">KP Infotech Services Pvt. Ltd.</p> */}
            </div>
          </div>
          
          {/* Thumbnail Preview */}
          <div 
            className="relative mb-4 rounded-lg overflow-hidden border border-border cursor-pointer group"
            onClick={() => setIsDialogOpen(true)}
          >
            <img 
              src="../../src/assets/Dhiraj.jpg"
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
      
      {/* View Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Appointment Letter</DialogTitle>
          </DialogHeader>
          <img 
            src="../../src/assets/Dhiraj.jpg"
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
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Instagram, Facebook, Phone, Twitter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", subject: "", message: "" });
  };

  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    // Phone number: +91-9922837879 (remove hyphens)
    const phoneNumber = "+919922837879";
    // URL-encoded default message
    const message = encodeURIComponent("Hello, I'm reaching out from your portfolio website.");
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Social links array with clickable email and WhatsApp
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Dholedhirajob123", 
      label: "GitHub",
      onClick: null
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn",
      onClick: null
    },
    { 
      icon: Mail, 
      href: "dholedhirajob123@gmail.com", 
      label: "Email",
      onClick: null,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    { 
      icon: Phone, 
      href: "992287879", 
      label: "WhatsApp",
      onClick: handleWhatsAppClick
    },
    // { icon: Instagram, href: "#", label: "Instagram" },
    // { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <Layout>
      <section className="py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Connect & Collaborate{" "}
              <span className="inline-block text-primary">💬</span>
            </h1>
            <p className="text-muted-foreground">
              Whether it's a new project, a collaboration, or just to say hi — I'd love to hear from
              you!
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            {socialLinks.map((social) => (
              social.onClick ? (
                // For WhatsApp (button with onClick)
                <button
                  key={social.label}
                  onClick={social.onClick}
                  className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-box transition-all duration-300 cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </button>
              ) : (
                // For other social links (anchor tags)
                <a
                  key={social.label}
                  href={social.href}
                  target={social.target || "_blank"}
                  rel={social.rel || "noopener noreferrer"}
                  className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-box transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              )
            ))}
          </motion.div>

          {/* Contact Information Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground mb-2">You can also reach me directly:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Email */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dholedhirajob123@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                dholedhirajob123@gmail.com
              </a>
              
              {/* Phone/WhatsApp */}
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                +91-9922837879
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-border transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-border transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-border transition-all resize-none"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-box"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
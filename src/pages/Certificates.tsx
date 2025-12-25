import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Download, Eye, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import appointmentLetter from "@/assets/Appointment_Letter.jpeg";
import kpCertificate from "@/assets/kp_certificate.png";

interface Document {
  title: string;
  issuer: string;
  year: string;
  category: "Tech" | "Others" | "Documents";
  image: string;
  type: "certificate" | "letter";
}

const certificates: Document[] = [
  {
    title: "Full Stack Developers Course Certificate",
    issuer: "KP Infotech Services Pvt. Ltd.",
    year: "2023",
    category: "Tech",
    image: kpCertificate,
    type: "certificate",
  },
  {
    title: "Appointment Letter",
    issuer: "KP Infotech Services Pvt. Ltd.",
    year: "2023",
    category: "Documents",
    image: appointmentLetter,
    type: "letter",
  },
  // {
  //   title: "Deep Learning Specialization",
  //   issuer: "Coursera",
  //   year: "2023",
  //   category: "Tech",
  //   image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  //   type: "certificate",
  // },
  // {
  //   title: "Computer Vision with TensorFlow",
  //   issuer: "Coursera",
  //   year: "2023",
  //   category: "Tech",
  //   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
  //   type: "certificate",
  // },
  // {
  //   title: "Machine Learning Fundamentals",
  //   issuer: "Google",
  //   year: "2023",
  //   category: "Tech",
  //   image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
  //   type: "certificate",
  // },
  // {
  //   title: "Python for Data Science",
  //   issuer: "IBM",
  //   year: "2022",
  //   category: "Tech",
  //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
  //   type: "certificate",
  // },
  // {
  //   title: "Web Development Bootcamp",
  //   issuer: "Udemy",
  //   year: "2022",
  //   category: "Others",
  //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  //   type: "certificate",
  // },
  // {
  //   title: "AWS Cloud Practitioner",
  //   issuer: "Amazon",
  //   year: "2023",
  //   category: "Tech",
  //   image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  //   type: "certificate",
  // },
];

const Certificates = () => {
  const [filter, setFilter] = useState<"all" | "Tech" | "Others" | "Documents">("all");
  const [selectedCert, setSelectedCert] = useState<Document | null>(null);

  const filteredCertificates = certificates.filter(
    (cert) => filter === "all" || cert.category === filter
  );

  const handleDownload = (cert: Document) => {
    const link = document.createElement("a");
    link.href = cert.image;
    const extension = cert.image.includes(".png") ? "png" : "jpg";
    link.download = `${cert.title.replace(/\s+/g, "_")}.${extension}`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Certificates & Documents"
            subtitle="Organized by Tech, Others, and Documents"
            highlight="Credentials"
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3 justify-center mb-10">
            {["all", "Tech",  "Documents"].map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption as typeof filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === filterOption
                    ? "bg-primary text-primary-foreground glow-box"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {filterOption === "all" ? "All" : filterOption}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <GlowCard>
                  <div className="p-6">
                    {/* Type Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      {cert.type === "letter" ? (
                        <FileText size={14} className="text-primary" />
                      ) : (
                        <ExternalLink size={14} className="text-primary" />
                      )}
                      <span className="text-xs text-primary font-medium uppercase">
                        {cert.type}
                      </span>
                    </div>

                    {/* Thumbnail */}
                    <div 
                      className="w-full h-40 rounded-lg bg-primary/10 border border-primary/30 mb-4 overflow-hidden cursor-pointer group relative"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="text-primary" size={32} />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {cert.issuer} • {cert.year}
                    </p>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => setSelectedCert(cert)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
                      >
                        <Eye size={14} />
                        View
                      </button>
                      <button 
                        onClick={() => handleDownload(cert)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity glow-box"
                      >
                        <Download size={14} />
                        Download
                      </button>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Dialog */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>{selectedCert?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img 
              src={selectedCert?.image} 
              alt={selectedCert?.title}
              className="w-full rounded-lg"
            />
            <div className="flex items-center justify-between mt-4">
              <p className="text-muted-foreground">
                {selectedCert?.issuer} • {selectedCert?.year}
              </p>
              <button 
                onClick={() => selectedCert && handleDownload(selectedCert)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Download size={14} />
                Download
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Certificates;
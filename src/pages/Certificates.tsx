import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const certificates = [
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    year: "2023",
    category: "Tech",
  },
  {
    title: "Computer Vision with TensorFlow",
    issuer: "Coursera",
    year: "2023",
    category: "Tech",
  },
  {
    title: "Machine Learning Fundamentals",
    issuer: "Google",
    year: "2023",
    category: "Tech",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2022",
    category: "Tech",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    year: "2022",
    category: "Others",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon",
    year: "2023",
    category: "Tech",
  },
];

const Certificates = () => {
  const [filter, setFilter] = useState<"all" | "Tech" | "Others">("all");

  const filteredCertificates = certificates.filter(
    (cert) => filter === "all" || cert.category === filter
  );

  return (
    <Layout>
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Certificates"
            subtitle="Organized by Tech and Others"
            highlight="Credentials"
          />

          {/* Filter Buttons */}
          <div className="flex items-center gap-3 justify-center mb-10">
            {["all", "Tech", "Others"].map((filterOption) => (
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
                    {/* Certificate Icon */}
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                      <span className="text-primary text-xl">📜</span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {cert.issuer} • {cert.year}
                    </p>

                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                      <ExternalLink size={14} />
                      View
                    </button>
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

export default Certificates;

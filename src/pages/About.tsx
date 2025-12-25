import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";

const About = () => {
  return (
    <Layout>
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader title="About Me" highlight="Introduction" />

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hi, I'm <span className="text-primary font-semibold">Dhiraj Dhole</span> — a passionate{" "}
              <span className="text-primary">Web Developer</span> and{" "}
              <span className="text-primary">Frontend enthusiast</span> who loves turning
              ideas into beautiful, interactive web experiences. I'm deeply fascinated by how modern 
              web technologies can shape user experiences and bring creativity to life.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Beyond code, I enjoy exploring design, experimenting with motion and interaction, and
              finding ways to blend artistic creativity with technical precision. My goal is to
              build solutions that not only perform well — but also inspire.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building responsive, performant web applications using React, 
              TypeScript, and modern CSS frameworks. Seeking opportunities to apply my skills and 
              contribute to innovative web projects.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {/* B.Tech */}
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2" />
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                      B.Tech / B.E.
                    </span>
                    <h4 className="text-lg font-semibold text-foreground">
                      Jawaharlal Nehru Engineering College ( Ch. Sambhajinagar )
                    </h4>
                    {/* <p className="text-muted-foreground text-sm mt-1">
                      4th Year (Pursuing) | GPA: 8.0
                    </p> */}
                    <p className="text-muted-foreground text-xs mt-1">
                     ( 2019 – 2023 )
                    </p>
                  </div>
                </div>
              </div>

              {/* HSC */}
      
               <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2" />
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                      
Higher Secondary (HSC)
                    </span>
                    <h4 className="text-lg font-semibold text-foreground">
                      Bhavana Public School ( Risod )
                    </h4>
                    {/* <p className="text-muted-foreground text-sm mt-1">
                      4th Year (Pursuing) | GPA: 8.0
                    </p> */}
                    <p className="text-muted-foreground text-xs mt-1">
                     ( 2019 )
                    </p>
                  </div>
                </div>
              </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2" />
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                      
Secondary School (SSC)
                    </span>
                    <h4 className="text-lg font-semibold text-foreground">
                      Bhavana Public School ( Risod )
                    </h4>
                    {/* <p className="text-muted-foreground text-sm mt-1">
                      4th Year (Pursuing) | GPA: 8.0
                    </p> */}
                    <p className="text-muted-foreground text-xs mt-1">
                     ( 2017 )
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

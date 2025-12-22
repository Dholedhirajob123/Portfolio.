import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const blogPosts = [
  {
    title: "Understanding Convolutional Neural Networks",
    excerpt: "A deep dive into how CNNs work and their applications in image recognition and computer vision tasks.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Deep Learning",
  },
  {
    title: "Getting Started with TensorFlow 2.0",
    excerpt: "A beginner's guide to building your first neural network with TensorFlow and Keras.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    title: "The Future of AI in Healthcare",
    excerpt: "Exploring how artificial intelligence is revolutionizing medical diagnosis and patient care.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "AI Trends",
  },
  {
    title: "Building Real-time Object Detection Systems",
    excerpt: "Learn how to implement YOLO and other object detection algorithms for real-world applications.",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    category: "Computer Vision",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Blog"
            subtitle="Thoughts, tutorials, and insights on AI, Machine Learning, and technology"
            highlight="Articles"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowCard className="h-full cursor-pointer">
                  <div className="p-6 flex flex-col h-full">
                    {/* Category */}
                    <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-4">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight size={16} className="text-primary" />
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

export default Blog;

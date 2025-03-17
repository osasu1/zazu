
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
import ContentSlider from "@/components/ContentSlider";
import NetflixCard from "@/components/NetflixCard";
import { useEffect, useState } from "react";
import { BlogPost } from "@/lib/types";
import { fetchMediumPosts } from "@/lib/mediumService";

const Index = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await fetchMediumPosts();
        if (posts && posts.length > 0) {
          setBlogPosts(posts.slice(0, 6));
        }
      } catch (error) {
        console.error("Failed to load Medium posts:", error);
      }
    };

    loadPosts();
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <Hero
          title="Bridging technology and human needs—one product at a time."
          subtitle="I am a data-driven Product and Project Manager with a strong background in technology, healthcare, and education."
          ctaLink="/projects"
          ctaText="Explore My Work"
          secondaryLink="https://medium.com/@zazzu"
          secondaryText="Read My Blog"
        />

        {/* Skills Section */}
        <section className="py-24">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-center text-shadow"
            >
              What I Do
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="neo-glass p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-white">Product Management</h3>
                <p className="text-white/80">
                  Building user-centered products that solve real problems through
                  thoughtful strategy and execution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="neo-glass p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-white">Project Management</h3>
                <p className="text-white/80">
                  Delivering complex initiatives on time and within budget using
                  Agile methodologies and structured frameworks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="neo-glass p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-white">Data Analytics</h3>
                <p className="text-white/80">
                  Transforming raw data into actionable insights that drive
                  strategic decision-making and product evolution.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-24">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4 text-center text-shadow"
            >
              Featured Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/80 text-center mb-12 max-w-2xl mx-auto"
            >
              Recent projects and case studies
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden neo-glass"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="h-64 md:h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?auto=format&fit=crop&q=80&w=2070')" }}>
                  <div className="w-full h-full bg-gradient-to-r from-black/30 to-transparent" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                        Featured Project
                      </div>
                      <h3 className="text-2xl font-bold text-white">BossomHeart</h3>
                      <p className="text-white/80">
                        Breast Cancer Support App for Nigerian Women
                      </p>
                    </div>
                    <p className="text-white/90">
                      A health-tech product providing virtual consultations, a supportive community, and educational resources for Nigerian women affected by breast cancer.
                    </p>
                    <div className="pt-2">
                      <a
                        href="https://drive.google.com/file/d/1VrRP4NBVnMPQEWSSMjNtEQrxyD0bajvO/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors"
                      >
                        View Case Study
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Section */}
        {blogPosts.length > 0 && (
          <section className="py-24">
            <div className="container max-w-7xl mx-auto">
              <ContentSlider title="From My Blog">
                {blogPosts.map((post, index) => (
                  <div key={index} className="content-card">
                    <NetflixCard
                      title={post.title}
                      description={post.excerpt}
                      image={post.image || `https://source.unsplash.com/random/600x400/?technology,${index}`}
                      link={post.url}
                    />
                  </div>
                ))}
              </ContentSlider>
              <div className="text-center mt-10">
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center h-12 px-6 py-0 bg-white/10 backdrop-blur-sm text-white rounded-md text-sm font-medium transition-all hover:bg-white/20"
                >
                  View All Blog Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-24 neo-glass my-10 mx-4 rounded-lg">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-white text-shadow">
                Let's work together
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-8 py-0 bg-white text-black rounded-md text-sm font-medium transition-all hover:bg-white/90"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;

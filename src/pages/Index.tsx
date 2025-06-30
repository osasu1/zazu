import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-20">
          <div className="container-tight">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <div className="inline-block bg-secondary/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-secondary-foreground mb-4">
                  Product Manager | Project Manager | Data Enthusiast | Tech Innovator
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
                  Bridging Tech and People: Shaping Solutions that impacts users, one product at a time.
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl"
              >
                Greetings! I'm Osasu Omangbon, a builder of bridges between technology and people. From shaping global art marketplaces to guiding data-driven innovation, I turn ideas into impact with a storyteller's heart and a strategist's mind. Ready to create what's next?
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center h-12 px-6 py-0 bg-primary text-primary-foreground rounded-md text-sm font-medium transition-all hover:bg-primary/90"
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="https://medium.com/@zazzu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-6 py-0 bg-secondary text-secondary-foreground rounded-md text-sm font-medium transition-all hover:bg-secondary/80"
                >
                  Read My Blog
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24">
          <div className="container-tight">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-3 p-6 rounded-lg bg-secondary/30 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium">Product Management</h3>
                <p className="text-muted-foreground">
                  Building user-centered products that solve real problems through
                  thoughtful strategy and execution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3 p-6 rounded-lg bg-secondary/30 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium">Project Management</h3>
                <p className="text-muted-foreground">
                  Delivering complex initiatives on time and within budget using
                  Agile methodologies and structured frameworks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-3 p-6 rounded-lg bg-secondary/30 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium">Data Analytics</h3>
                <p className="text-muted-foreground">
                  Transforming raw data into actionable insights that drive
                  strategic decision-making and product evolution.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-24 bg-secondary/20">
          <div className="container-tight">
            <div className="space-y-2 mb-12 text-center">
              <h2 className="text-3xl font-medium tracking-tight">Featured Work</h2>
              <p className="text-xl text-muted-foreground">
                Some of my recent projects and case studies
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-border/40 overflow-hidden bg-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
                <div className="h-64 md:h-full bg-secondary/30 flex items-center justify-center">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="inline-block bg-secondary px-2.5 py-0.5 rounded-full text-xs font-medium">
                        Featured Project
                      </div>
                      <h3 className="text-2xl font-medium">Afroart Studios</h3>
                      <p className="text-muted-foreground">
                        Cultural preservation through 3D digitization & marketplaces
                      </p>
                    </div>
                    <p>
                      Africa's first 'Sketchfab for Africa', creating a digital platform for 3D content
                      and partnering with museums to preserve cultural heritage.
                    </p>
                    <div>
                      <Link
                        to="/projects"
                        className="inline-flex items-center text-sm font-medium transition-colors hover:text-primary"
                      >
                        View Case Study
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24">
          <div className="container-tight">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-medium tracking-tight">
                Let's work together
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 py-0 bg-primary text-primary-foreground rounded-md text-sm font-medium transition-all hover:bg-primary/90"
                >
                  Get in Touch
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

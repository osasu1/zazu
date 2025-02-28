
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { BlogPost } from "@/lib/types";
import { ExternalLink } from "lucide-react";

const blogPosts: BlogPost[] = [
  {
    title: "Data-Driven Product Evolution",
    excerpt: "How to leverage data analytics to make informed product decisions and drive continuous improvement.",
    url: "https://medium.com/@zazzu",
    date: "June 10, 2023"
  },
  {
    title: "The Intersection of Product Management and Data Science",
    excerpt: "Exploring how product managers can work effectively with data scientists to build better products.",
    url: "https://medium.com/@zazzu",
    date: "April 22, 2023"
  },
  {
    title: "Cultural Preservation in the Digital Age",
    excerpt: "How technology is helping preserve cultural heritage and artifacts for future generations.",
    url: "https://medium.com/@zazzu",
    date: "March 15, 2023"
  },
  {
    title: "Agile Methodologies for Non-Technical Teams",
    excerpt: "Adapting Agile practices for teams outside of software development to improve productivity and collaboration.",
    url: "https://medium.com/@zazzu",
    date: "February 3, 2023"
  },
  {
    title: "Building Products with Impact in Africa",
    excerpt: "Strategies for creating technology solutions that address real needs in African markets.",
    url: "https://medium.com/@zazzu",
    date: "January 12, 2023"
  }
];

const Blog = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="container-tight">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-block bg-secondary/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-secondary-foreground mb-2">
                Writing
              </div>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
                Blog
              </h1>
              <div className="max-w-3xl">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Sharing insights on Product, Data & Innovation. My thoughts on technology,
                  product management, and data analytics.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Blog Posts */}
          <section className="py-12">
            <div className="space-y-10">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 lg:p-8 rounded-lg border border-border/40 bg-card hover:bg-secondary/10 transition-colors"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          {post.date}
                        </p>
                        <h2 className="text-2xl font-medium group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="pt-2 flex">
                        <span className="inline-flex items-center text-sm font-medium group-hover:text-primary transition-colors">
                          Read on Medium <ExternalLink className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-medium">
                Want to read more?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Check out my Medium blog for more articles on product management, data analytics, and technology innovation.
              </p>
              <div className="pt-4">
                <a
                  href="https://medium.com/@zazzu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-6 py-0 bg-primary text-primary-foreground rounded-md text-sm font-medium transition-all hover:bg-primary/90"
                >
                  Visit Medium Blog
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;

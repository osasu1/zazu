
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { BlogPost } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import { fetchMediumPosts } from "@/lib/mediumService";
import { Card, CardContent } from "@/components/ui/card";

// Fallback blog posts in case the API fails
const fallbackPosts: BlogPost[] = [
  {
    title: "Data-Driven Product Evolution",
    excerpt: "How to leverage data analytics to make informed product decisions and drive continuous improvement.",
    url: "https://medium.com/@zazzu",
    date: "",
    image: ""
  },
  {
    title: "The Intersection of Product Management and Data Science",
    excerpt: "Exploring how product managers can work effectively with data scientists to build better products.",
    url: "https://medium.com/@zazzu",
    date: "",
    image: ""
  },
  {
    title: "Cultural Preservation in the Digital Age",
    excerpt: "How technology is helping preserve cultural heritage and artifacts for future generations.",
    url: "https://medium.com/@zazzu",
    date: "",
    image: ""
  },
  {
    title: "Agile Methodologies for Non-Technical Teams",
    excerpt: "Adapting Agile practices for teams outside of software development to improve productivity and collaboration.",
    url: "https://medium.com/@zazzu",
    date: "",
    image: ""
  },
  {
    title: "Building Products with Impact in Africa",
    excerpt: "Strategies for creating technology solutions that address real needs in African markets.",
    url: "https://medium.com/@zazzu",
    date: "",
    image: ""
  }
];

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const mediumPosts = await fetchMediumPosts();
        
        if (mediumPosts.length > 0) {
          setBlogPosts(mediumPosts);
        }
      } catch (err) {
        setError("Failed to load blog posts. Showing default content.");
        console.error("Error loading Medium posts:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

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
            {loading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="w-full h-32 animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-4 bg-secondary/40 rounded w-2/3 mb-4"></div>
                      <div className="h-3 bg-secondary/30 rounded w-full mb-2"></div>
                      <div className="h-3 bg-secondary/30 rounded w-4/5"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-8 p-4 border border-destructive/30 bg-destructive/10 rounded-md text-destructive-foreground">
                    {error}
                  </div>
                )}
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
                        <div className="flex flex-col md:flex-row gap-6">
                          {post.image && (
                            <div className="flex-shrink-0 md:w-1/3 h-48 rounded-md overflow-hidden">
                              <img 
                                src={post.image} 
                                alt={post.title}
                                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                          )}
                          <div className={`flex flex-col gap-3 ${post.image ? 'md:w-2/3' : 'w-full'}`}>
                            <div className="space-y-1">
                              <h2 className="text-2xl font-medium group-hover:text-primary transition-colors">
                                {post.title}
                              </h2>
                              {post.date && (
                                <p className="text-sm text-muted-foreground">
                                  {post.date}
                                </p>
                              )}
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
                        </div>
                      </a>
                    </motion.article>
                  ))}
                </div>
              </>
            )}
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

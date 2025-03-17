
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { BlogPost } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import { fetchMediumPosts } from "@/lib/mediumService";
import ContentSlider from "@/components/ContentSlider";
import NetflixCard from "@/components/NetflixCard";

// Fallback blog posts in case the API fails
const fallbackPosts: BlogPost[] = [
  {
    title: "Data-Driven Product Evolution",
    excerpt: "How to leverage data analytics to make informed product decisions and drive continuous improvement.",
    url: "https://medium.com/@zazzu",
    date: "",
    image: "https://source.unsplash.com/random/1200x800/?data"
  },
  {
    title: "The Intersection of Product Management and Data Science",
    excerpt: "Exploring how product managers can work effectively with data scientists to build better products.",
    url: "https://medium.com/@zazzu",
    date: "",
    image: "https://source.unsplash.com/random/1200x800/?technology"
  },
  {
    title: "Cultural Preservation in the Digital Age",
    excerpt: "How technology is helping preserve cultural heritage and artifacts for future generations.",
    url: "https://medium.com/@zazzu",
    date: "",
    image: "https://source.unsplash.com/random/1200x800/?culture"
  },
  {
    title: "Agile Methodologies for Non-Technical Teams",
    excerpt: "Adapting Agile practices for teams outside of software development to improve productivity and collaboration.",
    url: "https://medium.com/@zazzu",
    date: "",
    image: "https://source.unsplash.com/random/1200x800/?agile"
  },
  {
    title: "Building Products with Impact in Africa",
    excerpt: "Strategies for creating technology solutions that address real needs in African markets.",
    url: "https://medium.com/@zazzu",
    date: "",
    image: "https://source.unsplash.com/random/1200x800/?africa"
  }
];

// Group posts by categories (for demonstration)
const categories = [
  "Featured Stories",
  "Product Management",
  "Data & Analytics",
  "Technology Insights"
];

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await fetchMediumPosts();
        if (posts && posts.length > 0) {
          setBlogPosts(posts);
        }
      } catch (error) {
        console.error("Failed to load Medium posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Distribute posts among categories for the Netflix-style rows
  const getPostsByCategory = (category: string, count: number) => {
    // This is just for demonstration - in reality you might want to categorize based on tags
    return blogPosts.slice(0, count);
  };

  return (
    <PageTransition>
      <div className="pt-20 pb-20">
        {/* Hero Banner */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2070')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl space-y-4"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white mb-2">
                My Thoughts
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white text-shadow">
                Blog
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Insights on Product, Data & Innovation. My personal reflections on technology,
                product management, and building solutions that matter.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Netflix-style Content Rows */}
        <div className="py-10 space-y-12">
          {categories.map((category, index) => (
            <ContentSlider key={category} title={category}>
              {getPostsByCategory(category, 8).map((post, postIndex) => (
                <div key={postIndex} className="content-card">
                  <NetflixCard
                    title={post.title}
                    description={post.excerpt}
                    image={post.image || `https://source.unsplash.com/random/600x400/?technology,${postIndex}`}
                    link={post.url}
                  />
                </div>
              ))}
            </ContentSlider>
          ))}
        </div>

        {/* Call to Action */}
        <section className="py-20 neo-glass my-10 mx-4 rounded-lg">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-white text-shadow">
              Want to read more?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Check out my Medium blog for more articles on product management, data analytics, and technology innovation.
            </p>
            <div className="pt-4">
              <a
                href="https://medium.com/@zazzu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 py-0 bg-white text-black rounded-md text-base font-medium transition-all hover:bg-white/90"
              >
                Visit Medium Blog
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Blog;

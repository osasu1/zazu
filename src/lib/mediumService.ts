
import { BlogPost } from "@/lib/types";

// Function to fetch blog posts from Medium via their RSS feed
export const fetchMediumPosts = async (): Promise<BlogPost[]> => {
  try {
    // Use rss2json service to convert Medium RSS to JSON
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zazzu`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Medium posts");
    }

    const data = await response.json();
    
    if (data.status !== "ok") {
      throw new Error("Invalid RSS feed");
    }

    // Map the response to our BlogPost type
    const posts: BlogPost[] = data.items.map((item: any) => {
      // Extract the first image from the content if available
      const imgRegex = /<img[^>]+src="([^">]+)"/;
      const imgMatch = item.content.match(imgRegex);
      const imageUrl = imgMatch ? imgMatch[1] : "https://source.unsplash.com/random/1200x800/?technology";
      
      // Extract a clean excerpt from the content
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = item.content;
      const text = tempDiv.textContent || "";
      const excerpt = text.substring(0, 150) + "...";

      return {
        title: item.title,
        excerpt: excerpt,
        url: item.link,
        date: new Date(item.pubDate).toLocaleDateString(),
        image: imageUrl
      };
    });

    return posts;
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
};

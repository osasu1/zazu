
import { BlogPost } from "./types";

// Function to fetch Medium RSS feed and convert to JSON
export async function fetchMediumPosts(): Promise<BlogPost[]> {
  try {
    // Using a CORS proxy to fetch the RSS feed from Medium
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zazzu`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch Medium posts');
    }
    
    const data = await response.json();
    
    // Transform the response to match our BlogPost type
    const posts: BlogPost[] = data.items.map((item: any) => {
      // Extract the first image from the content if available
      const imgRegex = /<img[^>]+src="([^">]+)"/;
      const imgMatch = item.content.match(imgRegex);
      const image = imgMatch ? imgMatch[1] : null;
      
      // Create a truncated excerpt from the content by removing HTML tags
      const excerpt = item.content
        .replace(/<[^>]*>/g, '')
        .slice(0, 150)
        .trim() + '...';
      
      return {
        title: item.title,
        excerpt: excerpt,
        url: item.link,
        date: new Date(item.pubDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        image: image
      };
    });
    
    return posts;
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
}

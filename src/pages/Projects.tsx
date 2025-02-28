
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { ProjectItem } from "@/lib/types";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const projects: ProjectItem[] = [
  {
    id: "afroart-studios",
    title: "Afroart Studios",
    shortDescription: "Cultural preservation through 3D digitization & marketplaces",
    description: [
      "Afroart Studios is a cultural technology company dedicated to digitizing, preserving, and showcasing African heritage through 3D modeling and immersive experiences. We are pioneering a 'Sketchfab for Africa', empowering artisans, museums, and collectors with digital tools to bring African art and history to the global stage.",
      "African artifacts are underrepresented in the global digital space. Museums and collectors struggle with preservation, accessibility, and monetization. Artisans and traditional sculptors lack modern digital marketing tools to showcase and sell their work globally.",
      "We built a digital platform that enables high-quality digitization of African artifacts and sculptures, an online marketplace connecting collectors, buyers, and enthusiasts with authentic African art, cultural preservation through partnering with museums to archive artifacts in digital formats, and artisan empowerment by equipping local sculptors and craftsmen with digital skills and access to global buyers."
    ],
    image: "https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Cultural Tech", "3D Digitization", "Marketplace", "Heritage Preservation"],
    achievements: [
      "Created a market storefront on Sketchfab with over 90+ 3D models of African artifacts.",
      "Increased brand traction by 40%, leading to growing interest from collectors and museums.",
      "Currently in conversations with the National Commission for Museums and Monuments (NCMM) to digitize artifacts in Nigerian museums.",
      "Supported artisans from marginalized communities by introducing digital tools to enhance their craft and reach global audiences."
    ],
    challenges: [
      "Adoption Barriers – Many artisans are unfamiliar with digital tools; we had to develop simple onboarding processes and training sessions.",
      "Monetization Strategy – Finding a sustainable revenue model required balancing cultural preservation with commercial viability.",
      "Scaling Partnerships – Convincing museums and cultural institutions required educating stakeholders on the benefits of digitization."
    ],
    futureItems: [
      "Expand the 3D artifact collection to include more museums and private collectors.",
      "Develop an interactive VR experience for virtual museum tours.",
      "Train and onboard more artisans into digital art and NFT spaces.",
      "Build a standalone Afroart Studios platform for direct engagement and sales."
    ]
  },
  {
    id: "gritin-ai",
    title: "GritinAI Data Analytics Training",
    shortDescription: "AI-driven data analytics education platform for beginners",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Data Education", "AI", "EdTech"],
    achievements: [
      "Mentored over 200+ learners in data analytics and AI concepts.",
      "Developed a structured curriculum that helps beginners transition into data roles.",
      "Created an interactive learning environment with real-world projects."
    ]
  },
  {
    id: "health-tech",
    title: "Healthcare Monitoring System",
    shortDescription: "Remote patient monitoring and data analysis platform",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HealthTech", "IoT", "Data Analytics"],
    achievements: [
      "Developed a system that reduced patient readmissions by 23%.",
      "Implemented predictive analytics to identify at-risk patients.",
      "Won innovation award at regional healthcare hackathon."
    ]
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>("afroart-studios");

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

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
                My Work
              </div>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
                Projects & Case Studies
              </h1>
              <div className="max-w-3xl">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  A collection of products, projects, and initiatives that showcase my approach
                  to solving problems and creating impactful solutions.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section className="py-12">
            <div className="space-y-16">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border/40 rounded-lg overflow-hidden bg-card"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="h-64 md:h-auto bg-secondary/30">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                      ></div>
                    </div>
                    <div className="p-6 lg:p-8 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h2 className="text-2xl font-medium">
                            {project.title}
                          </h2>
                          <p className="text-muted-foreground">
                            {project.shortDescription}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags?.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => toggleProject(project.id)}
                          className="flex items-center text-sm font-medium mt-2"
                        >
                          {expandedProject === project.id ? "Hide Details" : "View Details"}
                          <ChevronDown 
                            className={cn(
                              "ml-1 h-4 w-4 transition-transform",
                              expandedProject === project.id ? "transform rotate-180" : ""
                            )}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {expandedProject === project.id && project.description && (
                    <div className="p-6 lg:p-8 border-t border-border/40 animate-slide-up">
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium">Overview</h3>
                          <div className="space-y-3">
                            {project.description.map((para, i) => (
                              <p key={i} className="text-muted-foreground">
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>

                        {project.achievements && (
                          <div className="space-y-4">
                            <h3 className="text-xl font-medium">Impact & Achievements</h3>
                            <ul className="space-y-2">
                              {project.achievements.map((item, i) => (
                                <li key={i} className="text-muted-foreground flex">
                                  <span className="mr-2">🚀</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.challenges && (
                          <div className="space-y-4">
                            <h3 className="text-xl font-medium">Challenges & Lessons Learned</h3>
                            <ul className="space-y-2">
                              {project.challenges.map((item, i) => (
                                <li key={i} className="text-muted-foreground flex">
                                  <span className="mr-2">🔹</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.futureItems && (
                          <div className="space-y-4">
                            <h3 className="text-xl font-medium">Future Plans</h3>
                            <ul className="space-y-2">
                              {project.futureItems.map((item, i) => (
                                <li key={i} className="text-muted-foreground flex">
                                  <span className="mr-2">🔹</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;

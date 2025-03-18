
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { CheckCircle, FileText } from "lucide-react";
import { SkillItem, ExperienceItem } from "@/lib/types";
import Certificates from "@/components/Certificates";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const skills: SkillItem[] = [
  {
    title: "Product Strategy & Management",
    description: "Crafting product visions, roadmaps, and execution plans that deliver value to users and business goals."
  },
  {
    title: "Agile & Scrum Methodologies",
    description: "Leading teams through Agile workflows to deliver iterative, high-quality solutions that adapt to changing needs."
  },
  {
    title: "Data Analytics & Insights",
    description: "Transforming raw data into actionable insights that drive strategic decision-making and product evolution."
  },
  {
    title: "Technical Writing & Thought Leadership",
    description: "Creating compelling content that educates and inspires, sharing insights on product, data, and technology."
  },
  {
    title: "Growth & Go-to-Market Strategy",
    description: "Developing strategies to launch products, acquire users, and scale solutions for maximum impact."
  }
];

const experiences: ExperienceItem[] = [
  {
    title: "Product Manager",
    company: "GritinAI",
    duration: "2021 – Present",
    description: [
      "Led AI-driven data analytics training, mentoring over 200+ learners",
      "Managed operations, product development, and AI research",
      "Developed training modules, helping learners transition into data science & analytics careers"
    ],
    tags: ["Product Development", "AI Training", "Education Tech"]
  },
  {
    title: "Co-founder",
    company: "Afroart Studios",
    duration: "2020 – Present",
    description: [
      "Spearheaded Africa's first 'Sketchfab for Africa', creating a digital platform for 3D content",
      "Partnered with museums and cultural bodies to digitize African artifacts",
      "Increased sales and brand traction by 40%"
    ],
    tags: ["Cultural Tech", "3D Digitization", "Marketplace"]
  },
  {
    title: "Project Manager",
    company: "Various Initiatives",
    duration: "2018 – 2021",
    description: [
      "Led hackathons and product ideation challenges, winning multiple health & impact competitions",
      "Managed cross-functional teams to deliver technology solutions for social impact"
    ],
    tags: ["Project Management", "Hackathons", "Social Impact"]
  },
  {
    title: "Data Analytics Trainer & Mentor",
    company: "GritinAI",
    duration: "2021 – Present",
    description: [
      "Designed structured data analytics programs for beginners",
      "Helped learners transition into real-world data roles",
      "Created hands-on training materials and mentorship programs"
    ],
    tags: ["Data Education", "Mentorship", "Curriculum Design"]
  }
];

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
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
                About Me
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
                  Who I Am
                </h1>
                <div className="flex-shrink-0">
                  <Avatar className="h-32 w-32 border-2 border-primary/20">
                    <AvatarImage src="/lovable-uploads/c970f03e-3385-4f6c-98bf-b19988559c2a.png" alt="Portrait" className="object-cover" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="max-w-3xl">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  With a background in Computer Science and extensive experience in Product & Project Management, I specialize in leading teams, driving innovation, and leveraging data for impactful decision-making.
                </p>
                <p className="mt-4 text-xl leading-relaxed text-muted-foreground">
                  I have worked on healthtech, edtech, and cultural tech projects, helping shape solutions that address pressing challenges in Africa and beyond.
                </p>
                
                <div className="mt-6">
                  <a
                    href="https://drive.google.com/file/d/1BQa6mUeSTK3ujd92Dqo_gK7OdLHFZ0ZB/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 px-6 py-0 bg-primary text-primary-foreground rounded-md text-sm font-medium transition-all hover:bg-primary/90"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Full Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section className="py-16 border-t border-border/30">
            <div className="space-y-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-medium tracking-tight">
                  Core Skills & Expertise
                </h2>
                <p className="text-xl text-muted-foreground">
                  Professional capabilities that define my approach to product and project management
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 pt-1">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">{skill.title}</h3>
                      <p className="mt-1 text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-secondary/30 backdrop-blur-sm p-6 rounded-lg mt-8"
              >
                <p className="text-lg">
                  I have worked with startups, trained over 200+ individuals in data analytics, and built solutions that drive real impact.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Certificates Section */}
          <section className="py-16 border-t border-border/30">
            <Certificates />
          </section>

          {/* Experience Section */}
          <section className="py-16 border-t border-border/30">
            <div className="space-y-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-medium tracking-tight">
                  Professional Experience
                </h2>
                <p className="text-xl text-muted-foreground">
                  A timeline of my professional journey
                </p>
              </div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l border-border/50 pb-8"
                  >
                    <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-0" />
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="text-xl font-medium">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-sm text-muted-foreground">
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>

                      {exp.tags && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;

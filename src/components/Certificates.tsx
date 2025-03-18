
import { motion } from "framer-motion";
import { Certificate } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Product-related certificates with local images
const certificates: Certificate[] = [
  {
    title: "Product Masterclass: How to Build Digital Products",
    issuer: "Product School",
    issueDate: "April 2020",
    credentialId: "cert_hlg71jy1",
    image: "/lovable-uploads/8199ea92-dd9a-4b0a-8e4b-82b7e7f84e05.png"
  },
  {
    title: "Introduction to Software Product Management",
    issuer: "Coursera",
    issueDate: "April 2020",
    credentialId: "4PYJLF4KYX5W",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/4PYJLF4KYX5W",
    image: "/lovable-uploads/488eeaac-a072-4e6f-9839-1d25d0f5c00f.png"
  },
  {
    title: "Brand and Product Management",
    issuer: "Coursera",
    issueDate: "March 2021",
    credentialId: "Y8HVH5GHSE3H",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/Y8HVH5GHSE3H",
    image: "/lovable-uploads/488eeaac-a072-4e6f-9839-1d25d0f5c00f.png"
  },
  {
    title: "Technical Product Management",
    issuer: "LinkedIn",
    issueDate: "July 2022",
    credentialUrl: "https://www.linkedin.com/learning/certificates/1afb21ee837b1d8d7d5dff8b0e7c8baae750db41b48d984bd453106a312ed1d2",
    image: "/lovable-uploads/ee38fce5-1aa3-4e26-95e1-c57d8f43c84d.png"
  }
];

interface CertificatesProps {
  className?: string;
}

const Certificates = ({ className }: CertificatesProps) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-6">
        <Award className="h-7 w-7 text-primary/80" />
        <h2 className="text-3xl font-medium tracking-tight">
          Certifications
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="h-full"
          >
            <Card className="h-full overflow-hidden border border-primary/10 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
              <CardContent className="p-5 flex flex-col h-full relative">
                {/* Certificate Header */}
                <div className="flex items-start gap-3 mb-4">
                  {cert.image && (
                    <div className="flex-shrink-0 h-14 w-14 rounded-full overflow-hidden bg-secondary/30 p-2 border border-secondary">
                      <img 
                        src={cert.image} 
                        alt={cert.issuer}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <Badge variant="secondary" className="mb-1 font-normal">
                      {cert.issuer}
                    </Badge>
                    <h3 className="text-lg font-medium line-clamp-2">{cert.title}</h3>
                  </div>
                </div>
                
                {/* Certificate Details */}
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary/70" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  
                  {cert.credentialId && (
                    <div className="text-sm text-muted-foreground">
                      ID: <span className="font-mono text-xs bg-secondary/50 px-1.5 py-0.5 rounded">{cert.credentialId}</span>
                    </div>
                  )}
                  
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View credential <ExternalLink className="ml-1 h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
                
                {/* Decorative elements for the fun/doodle aesthetic */}
                <div className="absolute top-0 right-0 w-20 h-20 -mr-5 -mt-5 opacity-5 rotate-12">
                  <Award className="w-full h-full" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

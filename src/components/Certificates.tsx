import { motion } from "framer-motion";
import { Certificate } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

// Product-related certificates
const certificates: Certificate[] = [
  {
    title: "Product Masterclass: How to Build Digital Products",
    issuer: "Product School",
    issueDate: "April 2020",
    credentialId: "cert_hlg71jy1",
    image: "https://media.licdn.com/dms/image/C4E0BAQEXrIU-e6_wVA/company-logo_100_100/0/1630629329588/product_school_logo?e=1717027200&v=beta&t=HLYS92mApkZzSZ-nnT24QpnLQn7P0zSUq9VKlI7-IFA"
  },
  {
    title: "Introduction to Software Product Management",
    issuer: "Coursera",
    issueDate: "April 2020",
    credentialId: "4PYJLF4KYX5W",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/4PYJLF4KYX5W",
    image: "https://media.licdn.com/dms/image/C4D0BAQHiXudNP8-bGA/company-logo_100_100/0/1519952238242/coursera_logo?e=1717027200&v=beta&t=Y_EvYDQYd3OHjwvDmP0yzMtE8yt0TsPEXVMcYR-b9FQ"
  },
  {
    title: "Brand and Product Management",
    issuer: "Coursera",
    issueDate: "March 2021",
    credentialId: "Y8HVH5GHSE3H",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/Y8HVH5GHSE3H",
    image: "https://media.licdn.com/dms/image/C4D0BAQHiXudNP8-bGA/company-logo_100_100/0/1519952238242/coursera_logo?e=1717027200&v=beta&t=Y_EvYDQYd3OHjwvDmP0yzMtE8yt0TsPEXVMcYR-b9FQ"
  },
  {
    title: "Technical Product Management",
    issuer: "LinkedIn",
    issueDate: "July 2022",
    credentialUrl: "https://www.linkedin.com/learning/certificates/1afb21ee837b1d8d7d5dff8b0e7c8baae750db41b48d984bd453106a312ed1d2",
    image: "https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865/linkedin_logo?e=1717027200&v=beta&t=Yq_jw1jLzrA12WawQGQ7YDCYzJAHbP4JXcZ2D69nnRE"
  }
];

interface CertificatesProps {
  className?: string;
}

const Certificates = ({ className }: CertificatesProps) => {
  return (
    <div className={className}>
      <h2 className="text-3xl font-medium tracking-tight mb-6">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full hover:border-primary/20 transition-colors">
              <CardContent className="p-5 flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  {cert.image && (
                    <div className="flex-shrink-0 h-12 w-12 rounded-md overflow-hidden bg-secondary">
                      <img 
                        src={cert.image} 
                        alt={cert.issuer}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium line-clamp-2">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-sm text-muted-foreground">
                    Issued: {cert.issueDate}
                    {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
                  </p>
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
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

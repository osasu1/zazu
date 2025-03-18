
import { motion } from "framer-motion";
import { Certificate } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

// These are certificates extracted from the provided LinkedIn profile and resume
const certificates: Certificate[] = [
  {
    title: "Google Project Management",
    issuer: "Google",
    issueDate: "April 2022",
    credentialId: "TGPNBJ5RVEHZ",
    credentialUrl: "https://www.credly.com/badges/a1ca94e9-d2cc-4bae-b875-dc524fcd16c6/public_url",
    image: "https://media.licdn.com/dms/image/C560BAQGiX5xl8t40Yg/company-logo_100_100/0/1626909376942/google_logo?e=1717027200&v=beta&t=KgnW2Kn_jOqR0jTBbxnQ04yyJKBk2t6u8jkHkZ6i1wI"
  },
  {
    title: "Data Analytics",
    issuer: "Google",
    issueDate: "January 2022",
    credentialId: "KTN2CW7GJMMK",
    credentialUrl: "https://www.credly.com/badges/7aafcc64-e0a9-4c6e-8d91-6f9a8c1d1df6/public_url",
    image: "https://media.licdn.com/dms/image/C560BAQGiX5xl8t40Yg/company-logo_100_100/0/1626909376942/google_logo?e=1717027200&v=beta&t=KgnW2Kn_jOqR0jTBbxnQ04yyJKBk2t6u8jkHkZ6i1wI"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    issueDate: "November 2023",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/f0551c71-2cd3-4aad-8b71-3a2ec84c2d68/badges/4653200",
    image: "https://media.licdn.com/dms/image/C4D0BAQECcGlRHedmPw/company-logo_100_100/0/1630581234252/google_cloud_logo?e=1717027200&v=beta&t=I79XTjBE60qpSfPFnZ3mHtcXZBKlpw9vMJ_7ByAGa08"
  },
  {
    title: "Foundations of Artificial Intelligence",
    issuer: "CITP, Africa Blockchain Institute",
    issueDate: "May 2023",
    image: "https://media.licdn.com/dms/image/C4D0BAQHm5bYK6emQSg/company-logo_100_100/0/1630642005788/center_for_innovative_technology_policy_logo?e=1717027200&v=beta&t=ejKzOcg6cBLWBTBfYUDgVyAx08asPHgWK99LPAJFrSo"
  },
  {
    title: "Cloud Digital Leader",
    issuer: "Google Cloud",
    issueDate: "December 2022",
    credentialId: "7h4-FYFQy8M3",
    credentialUrl: "https://www.credential.net/7h4-FYFQy8M3",
    image: "https://media.licdn.com/dms/image/C4D0BAQECcGlRHedmPw/company-logo_100_100/0/1630581234252/google_cloud_logo?e=1717027200&v=beta&t=I79XTjBE60qpSfPFnZ3mHtcXZBKlpw9vMJ_7ByAGa08"
  },
  {
    title: "Product Management Training",
    issuer: "Product School",
    issueDate: "October 2020",
    image: "https://media.licdn.com/dms/image/C4E0BAQEXrIU-e6_wVA/company-logo_100_100/0/1630629329588/product_school_logo?e=1717027200&v=beta&t=HLYS92mApkZzSZ-nnT24QpnLQn7P0zSUq9VKlI7-IFA"
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

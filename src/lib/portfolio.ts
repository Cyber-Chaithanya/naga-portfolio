// Connect the final resume PDF here once the owner supplies it.
import nptelCertificate from "@/assets/nptel-certificate.jpg.asset.json";
import coordinatorCertificate from "@/assets/coordinator-certificate.jpg.asset.json";

export const resumeUrl: string | null = null;
export const profile = {
  name: "Naga Chaithanya",
  email: "aramallaabhiram@gmail.com",
  phone: "9948525965",
  github: "https://github.com/Cyber-Chaithanya",
};
export const projects = [{
  name: "Smart Calculator",
  description: "A Python-based graphical calculator designed to evaluate arithmetic expressions through a user-friendly interface.",
  technologies: ["Python", "GUI"],
  source: "https://github.com/Cyber-Chaithanya/Smart-Calculator",
  features: ["Arithmetic calculations", "Decimal values", "Parentheses in expressions", "Support for common arithmetic operators", "Handling of division-by-zero cases"],
}];

export type Certificate = {
  provider: string;
  title: string;
  result: string[];
  elite?: boolean;
  session?: string;
  image?: { url: string; alt: string };
};

// Only certificates backed by the owner's real documents are listed here.
// The APSSDC internship has no document image yet — add one when supplied.
export const certificates: Certificate[] = [
  {
    provider: "APSSDC",
    title: "Python Summer Internship",
    result: ["Internship training"],
  },
  {
    provider: "NPTEL · IIT Madras",
    title: "Python for Data Science",
    result: ["Grade: Elite", "Score: 67%"],
    elite: true,
    session: "Jul – Aug 2026 · 4-week course",
    image: {
      url: nptelCertificate.url,
      alt: "NPTEL Online Certification for Python for Data Science awarded to Aramalla Naga Chaithanya — Elite grade with a consolidated score of 67%, Jul–Aug 2026, IIT Madras",
    },
  },
  {
    provider: "Vignan's Foundation · Directorate of Polytechnic Education",
    title: "Agentic AI Day 2026 — Certificate of Appreciation",
    result: ["Event Coordinator", "Prompt Engineering"],
    session: "29 August 2026",
    image: {
      url: coordinatorCertificate.url,
      alt: "Certificate of Appreciation from Vignan's Foundation for serving as Event Coordinator for the Prompt Engineering activity at Agentic AI Day 2026, held on 29 August 2026",
    },
  },
];

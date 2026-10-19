import resumePdf from "@/assets/resume.pdf.asset.json";
import nptelCertificate from "@/assets/nptel-certificate.jpg.asset.json";
import coordinatorCertificate from "@/assets/coordinator-certificate.jpg.asset.json";
import apssdcCertificate from "@/assets/apssdc-certificate.png.asset.json";

// Owner's real internship resume PDF, converted from the supplied DOCX.
export const resumeUrl: string | null = resumePdf.url;
export const profile = {
  name: "Naga Chaithanya",
  email: "aramallaabhiram@gmail.com",
  phone: "9948525965",
  github: "https://github.com/Cyber-Chaithanya",
};

export type ProjectVisualKind = "calculator" | "password" | "feedback" | "website";

export type Project = {
  name: string;
  description: string;
  details: string;
  accuracyNote?: string;
  technologies: string[];
  source: string;
  features: string[];
  visual: ProjectVisualKind;
};

export const projects: Project[] = [
  {
    name: "Smart Calculator",
    description: "A Python-based graphical calculator designed to evaluate arithmetic expressions through a user-friendly interface.",
    details: "Built with Python and Tkinter, this project evaluates arithmetic expressions through a graphical interface. The repository includes a tokenizer and expression parser.",
    accuracyNote: "The calculator illustration is not a screenshot of the actual application.",
    technologies: ["Python", "GUI"],
    source: "https://github.com/Cyber-Chaithanya/Smart-Calculator",
    features: ["Arithmetic, decimals & parentheses", "Common arithmetic operators", "Division-by-zero handling"],
    visual: "calculator",
  },
  {
    name: "Password Strength Checker",
    description: "A beginner-friendly Python command-line checker that tests passwords against length and character-type requirements.",
    details: "Checks for a length between 12 and 32 characters, an uppercase and lowercase letter, a digit, and a special character. It can check multiple entries in one run.",
    accuracyNote: "These rule checks do not assess password reuse, exposure, or guessability. Do not use real passwords while testing.",
    technologies: ["Python", "Command line"],
    source: "https://github.com/Cyber-Chaithanya/password_strength_checker",
    features: ["12–32 character length check", "Uppercase, lowercase, digit & symbol checks", "Reports missing rules and allows repeat checks"],
    visual: "password",
  },
  {
    name: "UniFeedback — University Feedback Platform",
    description: "A React and TypeScript university-feedback prototype with role-based views and demo mode.",
    details: "The project documentation describes Student, Faculty, Parent, and Admin demo roles, feedback submission, role-based views, and admin analytics and review tools. It also describes an offline demo using local mock data.",
    accuracyNote: "This is a GitHub prototype. Its project documentation describes an offline demo using local mock data; production behavior has not been verified.",
    technologies: ["React", "TypeScript"],
    source: "https://github.com/Cyber-Chaithanya/Vignan-Feedback",
    features: ["Student, faculty, parent & admin demo roles", "Feedback submission and per-user views", "Admin inbox and report tools listed in the README"],
    visual: "feedback",
  },
  {
    name: "My First Website",
    description: "An early HTML and CSS practice site introducing student and small-business services.",
    details: "A simple static page with an introduction, a list of services, and contact information.",
    technologies: ["HTML", "CSS"],
    source: "https://github.com/Cyber-Chaithanya/my-first-website",
    features: ["Single-page HTML layout", "Basic CSS styling", "Service-list content"],
    visual: "website",
  },
];

export type Certificate = {
  provider: string;
  title: string;
  result: string[];
  elite?: boolean;
  session?: string;
  image?: { url: string; alt: string };
};

// Only certificates backed by the owner's real documents are listed here.
export const certificates: Certificate[] = [
  {
    provider: "APSSDC",
    title: "Python Summer Internship",
    result: ["Python Programming", "Certificate of Completion"],
    session: "8 June – 8 July 2026",
    image: {
      url: apssdcCertificate.url,
      alt: "APSSDC Certificate of Completion awarded to Aramalla Naga Chaithanya of Vignan University for Python Programming under the Summer Online Internship 2026, from 8 June to 8 July 2026",
    },
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

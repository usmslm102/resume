import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { DownloadIcon, Github, Linkedin, Mail } from "lucide-react";
import { FC } from "react";

interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    linkedIn: string;
    github: string;
  };
  skills: {
    languages: string[];
    webTechnologies: string[];
    cloudTechnologies: string[];
    tools: string[];
  };
  experience: {
    title: string;
    company: string;
    duration: string;
    location: string;
    details: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    graduationYear: string;
  }[];
}

const resumeData: ResumeData = {
  name: "Usama Ansari",
  title: "Software Engineer",
  summary: "Results-driven software engineer with 11 years of experience in designing and delivering enterprise-scale applications on cloud infrastructure. Skilled in C#, JavaScript, and Azure technologies. Proven success in implementing innovative solutions, including a Server-to-Tor Link Failure Detection System and Streaming Telemetry for real-time analytics. Strong problem-solving and collaboration skills, dedicated to continuous learning and staying up-to-date with industry trends.",
  contact: {
    email: "usmslm102@gmail.com",
    linkedIn: "https://www.linkedin.com/in/usamaansari/",
    github: "https://github.com/usmslm102",
  },
  skills: {
    languages: ["C#", "JavaScript / TypeScript", "Python", "HTML / CSS"],
    webTechnologies: ["React", "Angular", "Astro", "Node.js", "Asp.Net Core", "Rest"],
    cloudTechnologies: ["Azure Services", "Kubernetes", "Terraform", "Docker", "CI/CD"],
    tools: ["SQL", "Git"]
  },
  experience: [
    {
      title: "Software Engineer 2",
      company: "Microsoft",
      duration: "02/05/2016 to Present",
      location: "Hyderabad",
      details: [
        "Manage the health of Network Devices and Design of Next-Generation infrastructure health for Azure Network and other Microsoft Cloud services.",
        "Designed and implemented Server-to-Tor Link Failure Detection System monitoring and detecting Link Failures on more than 3 Million Nodes on Azure.",
        "Developed a solution to enable Streaming Telemetry and Real-Time analytics on Link Alerts, improving alerting latency by over 10 times.",
        "Implemented a highly available API platform for Device Health, onboarding multiple internal customer services to run at large scale."
      ]
    },
    {
      title: "Software Engineer",
      company: "Capgemini",
      duration: "16/11/2013 to 30/04/2016",
      location: "Mumbai",
      details: [
        "Developed consumer web applications for Abbott and SCA using .Net, Tridion, HTML, CSS, Microsoft SQL Server, and Azure.",
        "Worked as a full-stack developer."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Mumbai University",
      graduationYear: "01/07/2013"
    }
  ]
};

const ContactLink: FC<{ href: string; label: string; icon: JSX.Element }> = ({ href, label, icon }) => (
  <motion.p 
    className="flex items-center"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.span whileHover={{ rotate: 15 }}>
      {icon}
    </motion.span>
    <a href={href} target="_blank" rel="noopener noreferrer" className="pl-2 text-blue-600 hover:underline" aria-label={label}>
      {label}
    </a>
  </motion.p>
);

const Resume: FC = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Usama_Ansari_11yrs.pdf"; // Ensure the PDF is in the public directory
    link.download = "Usama_Ansari_Resume.pdf";
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

   const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const sectionVariants = prefersReduced ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } }
  } : {    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        duration: 0.6
      }
    }
  };

   const headerVariants = prefersReduced ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } }
  } : {    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

   const nameVariants = prefersReduced ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } }
  } : {    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen p-4 sm:px-8 sm:py-6 md:p-8 bg-gradient-to-br from-white via-blue-50 to-white text-sm sm:text-base">
      <AnimatePresence>
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div layout>
            <Card className="sm:px-10 sm:py-6 p-4 shadow-xl rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-md overflow-hidden">
              <CardContent>
                  <motion.div 
                    className="flex items-center justify-between mb-8"
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                  >                  <motion.div variants={nameVariants} layout>
                    <motion.h1 
                      className="text-2xl sm:text-5xl font-semibold tracking-tight text-gray-900"
                      variants={nameVariants}
                      layout
                    >                      {resumeData.name}
                    </motion.h1>
                    <motion.p 
                      className="text-xs sm:text-lg text-gray-500"
                      variants={nameVariants}
                      layout
                    >                      {resumeData.title}
                    </motion.p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button onClick={downloadResume} className="sm:text-sm sm:px-3 sm:py-2 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow" aria-label="Download Resume">
                      <motion.span
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <DownloadIcon />
                      </motion.span>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div variants={sectionVariants} className="text-center mb-4">                                    <p className="mt-2 text-left text-gray-600 sm:text-base text-sm leading-relaxed">{resumeData.summary}</p>
                </motion.div>

                <motion.div variants={sectionVariants} className="mt-8">
                                    <h2 className="text-xl sm:text-2xl font-medium text-gray-900 pb-2 mb-6 relative inline-block">
                    Contact
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-0.5 bg-blue-500/60"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    />
                  </h2>                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <ContactLink href={`mailto:${resumeData.contact.email}`} label={resumeData.contact.email} icon={<Mail />} />
                    <ContactLink href={resumeData.contact.linkedIn} label="@usamaansari" icon={<Linkedin />} />
                    <ContactLink href={resumeData.contact.github} label="@usmslm102" icon={<Github />} />
                  </div>
                </motion.div>

                <motion.div variants={sectionVariants} className="mt-8">
                                    <h2 className="text-xl sm:text-2xl font-medium text-gray-900 pb-2 mb-6 relative inline-block">
                    Skills
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-0.5 bg-blue-500/60"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    />
                  </h2>                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"                    variants={containerVariants}
                  >
                    {Object.entries(resumeData.skills).map(([category, skills]) => (
                      <motion.div
                        key={category}
                        variants={sectionVariants}
                        whileHover={{ scale: 1.02 }}
                        className="skill-category"
                      >
                                                <h3 className="text-sm uppercase tracking-wide text-gray-500">{category}</h3>
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">                          {skills.map((skill, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-sm"                            >
                              {skill}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div variants={sectionVariants} className="mt-10">
                                    <h2 className="text-xl sm:text-2xl font-medium text-gray-900 pb-2 mb-6 relative inline-block">
                    Experience
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-0.5 bg-blue-500/60"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    />
                  </h2>                  {resumeData.experience.map((job, index) => (
                    <motion.div
                      key={index}
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <h3 className="text-xl font-bold text-gray-700">{job.title} - {job.company}</h3>
                      <p className="text-sm text-gray-500 mb-2">{job.duration} | {job.location}</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">                                                {job.details.map((detail, i) => (
                          <motion.li 
                            className="text-sm"
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                          >
                            {detail}
                          </motion.li>                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={sectionVariants} className="mt-10">
                  <h2 className="text-xl sm:text-2xl font-medium text-gray-900 pb-2 mb-6 relative inline-block">
                    Education
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-0.5 bg-blue-500/60"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    />
                  </h2>                  {resumeData.education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <h3 className="text-xl font-bold text-gray-700">{edu.degree}</h3>
                      <p className="text-sm text-gray-500">{edu.institution} - {edu.graduationYear}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Resume;

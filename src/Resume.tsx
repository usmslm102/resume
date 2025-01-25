import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const resumeData = {
  name: "Usama Ansari",
  title: "Software Engineer",
  summary: "Results-driven software engineer with 10.5 years of experience in designing and delivering enterprise-scale applications on cloud infrastructure. Skilled in C#, JavaScript, and Azure technologies. Proven success in implementing innovative solutions, including a Server-to-Tor Link Failure Detection System and Streaming Telemetry for real-time analytics. Strong problem-solving and collaboration skills, dedicated to continuous learning and staying up-to-date with industry trends.",
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

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Usama_Ansari_11yrs.pdf"; // Ensure the PDF is in the public directory
    link.download = "Usama_Ansari_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-blue-50 via-white to-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 shadow-lg rounded-2xl border border-gray-200 bg-white">
            <CardContent>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">{resumeData.name}</h1>
                <p className="text-xl text-gray-500">{resumeData.title}</p>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{resumeData.summary}</p>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Contact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p>Email: <a href={`mailto:${resumeData.contact.email}`} className="text-blue-600 hover:underline">{resumeData.contact.email}</a></p>
                  <p>LinkedIn: <a href={resumeData.contact.linkedIn} className="text-blue-600 hover:underline">Profile</a></p>
                  <p>GitHub: <a href={resumeData.contact.github} className="text-blue-600 hover:underline">Profile</a></p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">Languages</h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {resumeData.skills.languages.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">Web Technologies</h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {resumeData.skills.webTechnologies.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">Cloud Technologies</h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {resumeData.skills.cloudTechnologies.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">Tools</h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {resumeData.skills.tools.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Experience</h2>
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-bold text-gray-700">{job.title} - {job.company}</h3>
                    <p className="text-sm text-gray-500 mb-2">{job.duration} | {job.location}</p>
                    <ul className="list-disc list-inside text-gray-600">
                      {job.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Education</h2>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-xl font-bold text-gray-700">{edu.degree}</h3>
                    <p className="text-sm text-gray-500">{edu.institution} - {edu.graduationYear}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button onClick={downloadResume} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600">
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;

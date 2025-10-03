import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Nitesh Kakkar",
  initials: "NK",
  location: "Delhi, India, IST",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about: "Full Stack Developer dedicated to building useful products.",
  summary: (
    <>
      Full Stack Developer and Student focused on building meaningful solutions with technology.
    </>
  ),
  avatarUrl: "http://avatars.githubusercontent.com/u/121416598?v=4",
  personalWebsiteUrl: "https://niteshkakkar.tech",
  contact: {
    email: "kakkar.nitesh04@gmail.com",
    tel: "+whyshoulditellyou",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Nitesh-04",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/niteshkakkar/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Vellore Institute of Technology, Vellore",
      degree: "Bachelor's of Technology in Computer Science and Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "PayU Payments",
      link: "https://payu.in/",
      badges: ["OnSite", "Gitlab", "Docker", "Spring Boot", "AWS", "Kubernetes"],
      title: "Software Engineer Intern",
      start: "May",
      end: "July 2025",
      description: (
        <>
          Worked on dockerising and migrating cron workflow microservices from AWS EC2 to AWS EKS.
          <ul className="list-inside list-disc">
            <li>
              Set up and tested services in Pre Production and UAT kubernetes environments.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Samsung R&D",
      link: "https://prism.samsung.com/",
      badges: ["Remote", "Voice Agents", "Python", "Dataset"],
      title: "PRISM Intern",
      start: "Oct 2024",
      end: "May 2025",
      description: (
        <>
          Created a custom dataset for training voice agents to improve wakeword detection in Samsung assistant Bixby.
          <ul className="list-inside list-disc">
            <li>
              Published an IEEE accepted paper on the dataset and a baseline model
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Reserve Bank Innovation Hub",
      link: "https://rbihub.in/",
      badges: [
        "Remote",
        "React",
        "Tailwind CSS",
      ],
      title: "Engineering Intern",
      start: "June",
      end: "August 2024",
      description: (
        <>
          Designed and developed new financial calculators aimed to facilitate easy calculations and promote financial literacy.
        </>
      ),
    },
    
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Tailwind CSS",
    "WebSockets",
    "Node.js",
    "Golang",
    "Spring Boot",
    "Python",
    "SQL",
    "Docker",
    "Git",
    "CI/CD",
    "AWS",
    "C++",
    "JavaScript",
    "Java",
    "Kubernetes",
    "Apache Kafka",
    "NoSQL",
    "Postman",
  ],
  projects: [
    {
      title: "BeatWise",
      techStack: ["NextJs", "FastAPI", "Spotify API", "Scikit Learn", "Pandas", "SQL"],
      description:
        "AI-powered music recommendation web app that suggests songs based on user-inputted moods or themes, integrated with Spotify for seamless playback",
      link: {
        label: "beatwise.com",
        href: "https://beatwise.niteshkakkar.tech/",
      },
    },
    {
      title: "RealTimeRacing",
      techStack: [
        "GoLang",
        "Go Fiber",
        "Websockets",
        "Postman",
        "React"
      ],
      description:
        "A real-time multiplayer racing game where players can compete against each other in a typing racefor low-latency communication.",
      link: {
        label: "realtimeracing.com",
        href: "https://realtimeracing.vercel.app/",
      },
    },
    {
      title: "TrackHub",
      techStack: ["TypeScript", "Cron Jobs" ,"Next.js", "Tailwind CSS"],
      description:
        "A full stack app, allowing users to track job applications, manage interview schedules, and get notified for upcoming interviews.",
      link: {
        label: "TrackHub",
        href: "https://trackhub.niteshkakkar.tech/",
      },
    },
  ],
} as const;

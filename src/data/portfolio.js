// ============================================================
// Single source of truth for all portfolio content.
// Sourced from Kartik Mahajan's resume (June 2026).
// ============================================================

import resumePdf from "../assets/Kartik_Mahajan_Latest_June.pdf";
// --- Certifications ---
// Coursera
import certRagAgentic from "../assets/certifications/Coursera-RAG-and-Agentic-AI.pdf";
import certRagAgenticImg from "../assets/certifications/Coursera-RAG-and-Agentic-AI.jpeg";
// AWS & GenAI (Udemy)
import certAwsPractitionerImg from "../assets/certifications/Udemy/Udemy-AWS-Certified-AI-Practitioner-UC-099529ba-9bfd-4090-8a8f-4d9d8a9539c2.jpg";
import certAwsPractitioner from "../assets/certifications/Udemy/Udemy-AWS-Certified-AI-Practitioner-UC-099529ba-9bfd-4090-8a8f-4d9d8a9539c2.pdf";
import certBedrockGenAiImg from "../assets/certifications/Udemy/Udemy-AWS-Bedrock-GenAI--UC-2261a89a-8a2b-4280-851a-ae9e4c920539.jpg";
import certBedrockGenAi from "../assets/certifications/Udemy/Udemy-AWS-Bedrock-GenAI-UC-2261a89a-8a2b-4280-851a-ae9e4c920539.pdf";
import certGenAiAwsImg from "../assets/certifications/Udemy/Udemy-GenAI-on-AWS-Amazon-Bedrock-Rag-and-LangChain-UC-806bdbe6-b97f-4047-8bd1-309d203d0bb7.jpg";
import certGenAiAws from "../assets/certifications/Udemy/Udemy-GenAI-on-AWS-Amazon-Bedrock-Rag-and-LangChain-UC-806bdbe6-b97f-4047-8bd1-309d203d0bb7.pdf";
import certAgentCoreImg from "../assets/certifications/Udemy/Udemy-Amazon-Bedrock-AgentCore-Build-and-deply-any-ai-agent-UC-d0d8cdbb-2eaf-45fb-8b4c-8b1eedb6334b.jpg";
import certAgentCore from "../assets/certifications/Udemy/Udemy-Amazon-Bedrock-AgentCore-Build-and-deply-any-ai-agent-UC-d0d8cdbb-2eaf-45fb-8b4c-8b1eedb6334b.pdf";
import certAmazonConnectImg from "../assets/certifications/Udemy/Udemy-Amazon-connect-complete-training-course-UC-bf05f09a-b9dc-4e8f-b248-e509bf675202.jpg";
import certAmazonConnect from "../assets/certifications/Udemy/Udemy-Amazon-connect-complete-training-course-UC-bf05f09a-b9dc-4e8f-b248-e509bf675202.pdf";
// Anthropic
import certClaude101 from "../assets/certifications/Anthropic/Claude-101-certificate-nouic92sp2sm-1783070941.pdf";
import certClaude101Img from "../assets/certifications/Anthropic/Claude-101-certificate-nouic92sp2sm-1783070941.jpg";
import certClaudeCode101 from "../assets/certifications/Anthropic/Claude-Code-101-certificate-awnwvqv7nqkf-1783075439.pdf";
import certClaudeCode101Img from "../assets/certifications/Anthropic/Claude-Code-101-certificate-awnwvqv7nqkf-1783075439.jpg";
import certClaudeCodeInAction from "../assets/certifications/Anthropic/Claude-Code-In-Action-certificate-8tce33wpf9xc-1781783626.pdf";
import certClaudeCodeInActionImg from "../assets/certifications/Anthropic/Claude-Code-In-Action-certificate-8tce33wpf9xc-1781783626.jpg";
import certMcpIntro from "../assets/certifications/Anthropic/Introduction-to-Model-Context-Protocol-certificate-by48k632k4pr-1775719724.pdf";
import certMcpIntroImg from "../assets/certifications/Anthropic/Introduction-to-Model-Context-Protocol-certificate-by48k632k4pr-1775719724.jpg";
import certMcpAdvanced from "../assets/certifications/Anthropic/Model-Context-Protocol-Advanced-Topics-certificate-kwju3o6boqgc-1775981358.pdf";
import certMcpAdvancedImg from "../assets/certifications/Anthropic/Model-Context-Protocol-Advanced-Topics-certificate-kwju3o6boqgc-1775981358.jpg";
import certSubagents from "../assets/certifications/Anthropic/Introduction-to-subagents-certificate-smcsrigfh4jw-1781865392.pdf";
import certSubagentsImg from "../assets/certifications/Anthropic/Introduction-to-subagents-certificate-smcsrigfh4jw-1781865392.jpg";
import certAgentSkills from "../assets/certifications/Anthropic/Intrroduction-to-agent-skills-certificate-nxf9m8zggyt4-1781862609.pdf";
import certAgentSkillsImg from "../assets/certifications/Anthropic/Intrroduction-to-agent-skills-certificate-nxf9m8zggyt4-1781862609.jpg";

// Web Development (Udemy)
import certReactImg from "../assets/certifications/Udemy/Udemy-React-The-Complete-Guide-Cerification.jpg";
import certReact from "../assets/certifications/Udemy/Udemy-React-The-Complete-Guide-Cerification.pdf";
import certNextjsImg from "../assets/certifications/Udemy/Udemy-NextJS14-&-React-certificate.png";
import certNextjs from "../assets/certifications/Udemy/Udemy-NextJS14-&-React-certificate.pdf";
import certZtmImg from "../assets/certifications/Udemy/Udemy-The-Complete-Web-Developer-Cerificate.png";
import certZtm from "../assets/certifications/Udemy/Udemy-Complete-Web-Developer-ZTM-Cerifications.pdf";
// Badges
import badgePromptEng from "../assets/certifications/Badges/prompt-engineering-foundation-badge.png";
import badgeContextEng from "../assets/certifications/Badges/context-engineering-foundation-badge.png";

// --- AI project screenshots ---
import projBlogGenerator from "../assets/projects/multi-agent-blog-generator.png";
import projMentalHealth from "../assets/projects/mental-health-chatbot.png";
import projRagChatbot from "../assets/projects/document-rag-chatbot.png";

export const profile = {
  name: "Kartik Mahajan",
  role: "AI Engineer",
  tagline: "Generative AI & Multi-Agent Systems",
  summary:
    "AI Engineer specializing in Generative AI and multi-agent systems, with experience building production conversational AI, RAG pipelines, and LLM-powered applications using AWS Strands, LangChain, Amazon Bedrock, and OpenAI. Proven track record of shipping AI solutions that improve accuracy and reduce manual effort.",
  location: "India",
  email: "kartikmahajan5688@gmail.com",
  phone: "+91 9501145677",
  linkedin: "https://www.linkedin.com/in/kartikmahajan08/",
  github: "https://github.com/kartikmahajan5688",
  resume: resumePdf,
};

export const stats = [
  { value: "3+", label: "Years building software" },
  { value: "35%", label: "Match-accuracy uplift" },
  { value: "80%", label: "Manual effort reduced" },
  { value: "30%", label: "Fewer hallucinations" },
];

// Headline skills shown as the "Core Expertise" row (recruiter-facing).
export const coreSkills = [
  {
    icon: "genai",
    label: "Generative AI & LLMs",
    detail: "LLM applications, prompt engineering & fine-tuning concepts",
  },
  {
    icon: "agents",
    label: "Agentic & Multi-Agent AI",
    detail: "Orchestration with AWS Strands, LangChain, AutoGen & MCP",
  },
  {
    icon: "rag",
    label: "RAG Pipelines",
    detail: "Grounded retrieval with vector search & evaluation",
  },
  {
    icon: "voice",
    label: "Conversational AI",
    detail: "Real-time, speech-to-speech (Amazon Nova Sonic 2)",
  },
  {
    icon: "python",
    label: "Python & FastAPI",
    detail: "Production AI backends & APIs",
  },
  {
    icon: "cloud",
    label: "AWS & Amazon Bedrock",
    detail: "Bedrock, Lambda & S3 deployment",
  },
  {
    icon: "vector",
    label: "Vector Databases",
    detail: "Pinecone & ChromaDB",
  },
  {
    icon: "fullstack",
    label: "Full-Stack Delivery",
    detail: "React/Next.js, Node.js — web, mobile & desktop",
  },
];

export const skills = [
  {
    category: "Generative AI & LLMs",
    items: [
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "Multimodal AI",
      "Fine-tuning concepts",
      "Hugging Face",
    ],
  },
  {
    category: "Agentic AI & Frameworks",
    items: [
      "Multi-Agent Systems",
      "AWS Strands",
      "LangChain",
      "Microsoft AutoGen",
      "Model Context Protocol (MCP)",
      "Agent Orchestration",
      "Tool / Function Calling",
    ],
  },
  {
    category: "AI Infrastructure & Models",
    items: [
      "Amazon Bedrock",
      "Amazon Nova Sonic 2",
      "OpenAI",
      "Pinecone",
      "ChromaDB",
      "RAGAS (evaluation)",
    ],
  },
  {
    category: "Programming & Backend",
    items: ["Python", "FastAPI", "JavaScript (ES6+)", "Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Cloud & Deployment",
    items: ["AWS (Bedrock, Lambda, S3)", "Azure", "Docker", "DigitalOcean"],
  },
  {
    category: "Web Development",
    items: ["React.js", "React Native (Expo)", "Redux", "Tailwind CSS", "Material UI"],
  },
];

export const experience = [
  {
    company: "Cognizant Technology Solutions",
    role: "AI Engineer, Associate",
    period: "Feb 2026 – Present",
    location: "Gurugram, India",
    project: "Conversational Multi-Agent System for Healthcare Support",
    points: [
      "Developed AI agents to interpret caller intent in real time, authenticate members, and route requests to specialist agents (Claims, ID Cards, Payment & Billing, and more).",
      "Built agent tooling via Model Context Protocol (MCP) and integrated Amazon Nova Sonic 2 for direct speech-to-speech caller interaction.",
      "Implemented multi-agent orchestration with AWS Strands on Amazon Bedrock and AWS Lambda, coordinating handoffs across the agent network.",
    ],
    stack: [
      "Python",
      "AWS Strands",
      "Multi-Agent Systems",
      "MCP",
      "Amazon Bedrock",
      "Amazon Nova Sonic 2",
      "AWS Lambda",
      "Conversational AI",
    ],
  },
  {
    company: "The Octavian Group",
    role: "Application Developer",
    period: "Apr 2025 – Feb 2026",
    location: "Remote, UK",
    points: [
      "ZORQK: Built a full-stack car-buying marketplace (in the vein of CarDekho) where users browse vehicle listings with detailed specs, pricing, and insurance packages — backed by an admin panel to manage users, cars, insurance plans, and inventory.",
      "Engineered a conversational AI car-discovery assistant for ZORQK that parses natural-language queries into structured search filters using LangChain, making the catalog effortless to navigate for non-technical buyers.",
      "Sober Meets: Built a full-stack, Tinder-style dating app with swipe-based discovery, rich user profiles, mutual matching, and real-time in-app chat.",
      "Developed and deployed an AI-driven predictive match-analysis system for Sober Meets with real-time feedback loops (LangChain + Pinecone), improving match accuracy by 35% and user engagement by 20% within three months.",
    ],
    stack: ["LangChain", "Pinecone", "OpenAI", "Conversational AI", "Python"],
  },
  {
    company: "Resolut Partners",
    role: "Full Stack Developer",
    period: "Apr 2023 – Mar 2025",
    location: "Mumbai, India",
    project:
      "Time-Tracking, Billing & Practice-Management Platform for a Law Firm (Web · Mobile · Desktop)",
    points: [
      "Architected and built a full-blown time-tracking, billing, and practice-management platform for a law firm, delivered across three synchronized clients — a web app, a cross-platform mobile app, and a desktop app — on a shared Node.js/Express/MongoDB backend.",
      "Timekeeper experience: interactive progress dashboards and a monthly/weekly/daily calendar to log and manage billable hours (full CRUD), one-click timesheet export to PDF, bill/receipt uploads (image & PDF) for reimbursements, and leave applications.",
      "Admin & management suite: organization-wide financial reporting, resource-wise performance analytics, automated billing & invoice PDF generation, expense management, and reimbursement and leave approval workflows.",
      "Built a desktop activity tracker that automatically records daily activity and shows lawyers where their time went — so no billable client work is missed — with one-click conversion of tracked activity into logged hours, improving time-capture and billing accuracy by 25%.",
      "Built a mobile app focused on fast time entry and smart reminders, letting lawyers log hours on the go (e.g., while traveling) and stay consistent with daily logging.",
    ],
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "React Native",
      "Expo",
      "Electron JS",
      "Material UI",
      "Graph.js",
      "AWS S3",
      "DigitalOcean",
    ],
  },
];

// AI projects. To add a screenshot: drop the image in src/assets/projects/,
// import it at the top of this file, and set it as `image` below.
// Add live-demo and repo URLs to `view` and `source` to show the buttons.
export const aiProjects = [
  {
    title: "AI-Powered Multi-Agent Blog Generator",
    blurb:
      "Full-stack multi-agent content pipeline (Researcher → Writer → Reviewer) that automates end-to-end blog creation, reducing manual content effort by 80%.",
    stack: ["FastAPI", "LangChain", "OpenAI", "Multi-Agent"],
    metric: "−80% manual effort",
    image: projBlogGenerator,
    view: "https://ai-blog-generator-frontend-tau.vercel.app/",
    source: "https://github.com/kartikmahajan5688/ai-blog-generator-frontend",
  },
  {
    title: "AI Mental Health Assistant",
    blurb:
      "Multi-agent conversational AI that analyzes user emotions and generates therapy-based self-care suggestions.",
    stack: ["OpenAI", "Microsoft AutoGen", "Conversational AI"],
    metric: "Multi-agent",
    image: projMentalHealth,
    view: "https://autogen-healthcare-agent.onrender.com/",
    source: "https://github.com/kartikmahajan5688/ai-mental-health-assistant",
  },
  {
    title: "AI Document RAG Chatbot",
    blurb:
      "RAG chatbot leveraging vector search to deliver context-aware responses and reduce hallucinations by 30%.",
    stack: ["FastAPI", "Gradio", "LangChain", "Pinecone", "RAG"],
    metric: "−30% hallucinations",
    image: projRagChatbot,
    view: "https://ai-rag-document-chatbot.onrender.com/gradio/",
    source: "https://github.com/kartikmahajan5688/ai-document-rag-chatbot",
  },

];

export const webProjects = [
  {
    title: "Next.js Blogs Platform",
    blurb:
      "Markdown-driven blog built with Next.js; contact submissions persisted to MongoDB.",
    view: "https://kartik-nextjs-blogs.vercel.app/",
    source: "https://github.com/kartikmahajan5688/nextjs-blogs",
  },
  {
    title: "NextLevel Foodies",
    blurb:
      "A recipe-sharing platform for foodies, exploring Next.js metadata and app structure.",
    view: "https://nextlevel-foodies.vercel.app/",
    source: "https://github.com/kartikmahajan5688/nextlevel-foodies/tree/master",
  },
  {
    title: "Next.js Authentication System",
    blurb:
      "Full auth flow (sign up / sign in / password change) with server-side APIs and MongoDB.",
    view: "https://nextjs-auth-ngobgywr3-kartikmahajan5688.vercel.app/auth",
    source: "https://github.com/kartikmahajan5688/nextjs-auth",
  },
  {
    title: "TypeScript Drag & Drop",
    blurb:
      "Module-based TypeScript project board with drag-and-drop status changes, bundled with Webpack.",
    view: "https://typescript-webpack-drag-and-drop.vercel.app/",
    source: "https://github.com/kartikmahajan5688/typescript-webpack-drag-and-drop",
  },
];

export const certGroups = [
  {
    group: "Generative AI & AWS",
    items: [
      {
        title: "AWS Certified AI Practitioner",
        issuer: "Udemy · AWS",
        image: certAwsPractitionerImg,
        file: certAwsPractitioner,
      },
      {
        title: "Generative AI with Amazon Bedrock",
        issuer: "Udemy",
        image: certBedrockGenAiImg,
        file: certBedrockGenAi,
      },
      {
        title: "GenAI on AWS: Bedrock, RAG & LangChain",
        issuer: "Udemy",
        image: certGenAiAwsImg,
        file: certGenAiAws,
      },
      {
        title: "Amazon Bedrock AgentCore: Build & Deploy AI Agents",
        issuer: "Udemy",
        image: certAgentCoreImg,
        file: certAgentCore,
      },
      {
        title: "RAG and Agentic AI: Build Next-Gen AI Systems",
        issuer: "Coursera",
        image: certRagAgenticImg,
        file: certRagAgentic,
      },
      {
        title: "Amazon Connect: Complete Training Course",
        issuer: "Udemy",
        image: certAmazonConnectImg,
        file: certAmazonConnect,
      },
    ],
  },
  {
    group: "Anthropic — Claude, MCP & Agents",
    items: [
      {
        title: "Claude 101",
        issuer: "Anthropic",
        image: certClaude101Img,
        file: certClaude101,
      },
      {
        title: "Claude Code 101",
        issuer: "Anthropic",
        image: certClaudeCode101Img,
        file: certClaudeCode101,
      },
      {
        title: "Claude Code in Action",
        issuer: "Anthropic",
        image: certClaudeCodeInActionImg,
        file: certClaudeCodeInAction,
      },
      {
        title: "Introduction to Model Context Protocol",
        issuer: "Anthropic",
        image: certMcpIntroImg,
        file: certMcpIntro,
      },
      {
        title: "Model Context Protocol: Advanced Topics",
        issuer: "Anthropic",
        image: certMcpAdvancedImg,
        file: certMcpAdvanced,
      },
      {
        title: "Introduction to Subagents",
        issuer: "Anthropic",
        image: certSubagentsImg,
        file: certSubagents,
      },
      {
        title: "Introduction to Agent Skills",
        issuer: "Anthropic",
        image: certAgentSkillsImg,
        file: certAgentSkills,
      },
    ],
  },
  {
    group: "Web Development",
    items: [
      {
        title: "React: The Complete Guide",
        issuer: "Udemy",
        image: certReactImg,
        file: certReact,
      },
      {
        title: "Next.js 14 & React — The Complete Guide",
        issuer: "Udemy",
        image: certNextjsImg,
        file: certNextjs,
      },
      {
        title: "Complete Web Developer — Zero To Mastery",
        issuer: "Udemy",
        image: certZtmImg,
        file: certZtm,
      },
    ],
  },
];

export const badges = [
  { title: "Prompt Engineering — Foundation", image: badgePromptEng },
  { title: "Context Engineering — Foundation", image: badgeContextEng },
];

export const education = {
  degree: "B.Tech, Computer Science",
  school: "Lovely Professional University",
  period: "Jul 2016 – Jun 2020",
  location: "Phagwara, India",
};

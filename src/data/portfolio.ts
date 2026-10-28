/* ============================================================
   SINGLE SOURCE OF TRUTH — edit your content here.
   Only keep claims you can prove with a repo, certificate or profile.
   ============================================================ */
export const P = {
  name: "Sujal Singhal",
  email: "singhalsujal1234@gmail.com",
  /** After adding your PDF to /public, set e.g. "/Sujal_Singhal_Resume.pdf" */
  resumeUrl: "https://drive.google.com/file/d/1S3U8kK9E_sHEtygeT2OqhcZujClf-zIQ/view?usp=drivesdk",
  /** Set VITE_FORM_ENDPOINT in Vercel env vars (Formspree etc.) */
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? "",
  links: {
    github: "https://github.com/SujalSinghal123",
    linkedin: "https://linkedin.com/in/sujal-singhal-29ss",
    leetcode: "https://leetcode.com/u/sujalsinghal123/",
    hackerrank: "https://www.hackerrank.com/profile/singhalsujal1234",
    gfg: "https://www.geeksforgeeks.org/profile/singhalsutl10?tab=activity",
  },
  profile: [
    ["Current focus", "Full-Stack Development"],
    ["Always learning", "Data Structures & Algorithms"],
    ["Building interest", "Practical Software & Systems"],
    ["Education", "B.Tech CSE (AI/ML), 2023 – 2027"],
  ] as [string, string][],
  diagram: [
    { l: "FULL", x: 200, y: 45, t: "Full-stack gives me the surface to ship real products end to end." },
    { l: "DSA", x: 85, y: 140, t: "DSA trains the problem-solving that sits under every system." },
    { l: "SYS", x: 315, y: 140, t: "Systems curiosity ties it together: networking, performance, how things really work." },
  ],
  projects: [
    {
      mock: "A", cat: "Networking / Systems / C++", title: "Deep Packet Analyzer",
      line: "Inspecting network traffic and exploring application-level visibility through packet analysis.",
      problem: "Raw traffic hides what applications are doing; understanding it needs inspection beyond headers.",
      points: ["TCP, UDP and IP traffic inspection", "Real-time packet capture and analysis", "Deep packet inspection", "HTTP Host and TLS ClientHello SNI inspection where implemented", "Multithreaded processing where supported by the code"],
      stack: ["C++", "Scapy", "Python", "TCP/IP", "DPI"],
      github: "https://github.com/SujalSinghal123/deep_packet_analyzer", live: "",
    },
    {
      mock: "B", cat: "Full-Stack / Business Software", title: "FundsRoom Operations Portal",
      line: "A full-stack portal that brings operational workflows into a structured, role-based interface.",
      problem: "Operations scattered across tools need one controlled place with the right access per role.",
      points: ["REST APIs", "JWT authentication and role-based authorization", "Role-based dashboards (Admin, Warehouse, Sales)", "CRM, inventory and sales modules", "Atomic stock reduction during dispatch", "Low-stock alerts and PDF export"],
      stack: ["React.js", "Node.js", "Express.js", "TypeScript", "PostgreSQL", "JWT"],
      github: "https://github.com/SujalSinghal123/fundsroom-operations-portal",
      live: "https://fundsroom-operations-portal-three.vercel.app",
    },
    {
      mock: "C", cat: "Machine Learning / NLP", title: "Best-Fit-Finder",
      line: "Comparing resumes with job descriptions to identify relevant skills and potential gaps.",
      problem: "Matching a resume to a role by eye is slow and inconsistent.",
      points: ["PDF resume parsing", "Job-description similarity scoring", "Keyword and skill extraction", "Skill-gap analysis", "Resume relevance ranking"],
      stack: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Cosine Similarity", "PDF Parsing"],
      github: "https://github.com/SujalSinghal123/Best-Fit-Finder-Resume-Analyzer-Resume-Maker", live: "",
    },
  ],
  /** Listed on your resume; add repo / live links when ready */
  more: [
    { title: "E-Commerce Operations Autopilot", text: "Operations dashboard that syncs Shopify data into PostgreSQL, with stock safety checks, low-stock email alerts and AI-generated product descriptions with an approval step.", stack: "Next.js · TypeScript · Node.js · PostgreSQL · Shopify API · Gemini" },
    { title: "Blog Application", text: "Server-rendered blog with CRUD, RESTful routes and MongoDB storage.", stack: "Node.js · Express.js · EJS · MongoDB" },
  ],
  tech: {
    Languages: { "C++": "Used in Deep Packet Analyzer.", C: "Systems-level fundamentals.", Python: "Used for Best-Fit-Finder and packet tooling.", JavaScript: "Core language of my web work.", TypeScript: "Used in the FundsRoom portal.", SQL: "Querying relational data.", HTML: "Semantic page structure.", CSS: "Layout and styling." },
    Frontend: { "React.js": "UI library used in the FundsRoom portal.", "Next.js": "Listed on my resume for the E-Commerce Autopilot project.", "Tailwind CSS": "Utility-first styling.", Bootstrap: "Component-based responsive layouts.", "Redux Toolkit": "State management for React apps.", jQuery: "DOM scripting basics.", "Material UI": "React component library." },
    "Backend & Databases": { "Node.js": "Server runtime in my MERN and portal work.", "Express.js": "API framework for REST services.", MongoDB: "Document database in the MERN stack.", PostgreSQL: "Relational database in the FundsRoom portal.", MySQL: "Relational database listed on my resume.", "REST APIs": "Built for the FundsRoom portal." },
    Tools: { Git: "Version control.", GitHub: "Hosting and sharing my projects.", "VS Code": "Daily editor." },
    Foundations: { "Data Structures & Algorithms": "Ongoing practice on LeetCode, HackerRank and GFG.", OOP: "Core CS foundation.", Networking: "Explored through packet analysis.", "ML fundamentals": "TF-IDF and similarity in Best-Fit-Finder." },
  } as Record<string, Record<string, string>>,
  stats: [
    ["300+", "DSA problems on LeetCode (resume figure — update to latest)"],
    ["100+", "DSA problems on GeeksforGeeks (resume figure)"],
    ["5★", "HackerRank Problem Solving · 4★ C++"],
    ["60", "Days GFG POTD challenge completed"],
  ] as [string, string][],
  achievements: [
    "Clash of Codes (Unstop) — Global Rank 3054",
    "HackerRank Software Engineering Intern certificate",
    "JPMorgan Chase & Co. Software Engineering job simulation (Forage)",
    "HP LIFE — AI for Business Professionals (course completion)",
    "IBM SkillBuild — AI + Sustainability virtual internship (learning completion)",
    "Adobe University Hackathon 2026 — participation",
    "Open Source Global Connect 2026 — workshop on AI-driven systems",
    "CodeChef Starters and Long Challenges — participation",
  ],
  experience: [
    { org: "Sducation Friend", role: "Frontend Developer Intern", dates: "Dates — add", text: "[Editable: add a short summary and your actual contributions here.]", stack: ["Frontend"] },
    { org: "Beeskilled", role: "Full Stack Development (MERN) Intern", dates: "Sep 2026 – Oct 2026", text: "Built a responsive 1Fi Marketplace in React.js: product listing, filtering, variants, EMI plan selection, dynamic pricing, stock handling and a checkout / order-confirmation flow. Wrote reusable components, integrated REST APIs and handled loading, error and retry states.", stack: ["React.js", "REST APIs", "Node.js"] },
    { org: "EWB Courses", role: "AI/ML Internship", dates: "Sep 2026 – Oct 2026", text: "Six-week internship covering fundamental machine-learning concepts and practical implementations in Python.", stack: ["Python", "Machine Learning"] },
  ],
};

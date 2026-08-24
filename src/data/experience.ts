// Education + professional experience. Sourced from the resume; edit freely.

export type TimelineItem = {
  org: string;
  role: string;
  location: string;
  start: string; // display string
  end: string; // display string ("Present" allowed)
  url?: string;
  detail?: string; // sub-line (degree / focus)
  bullets?: string[];
  tags?: string[];
};

export const EDUCATION: TimelineItem[] = [
  {
    org: 'Carnegie Mellon University',
    role: 'M.S. in Information Networking',
    location: 'Pittsburgh, PA',
    start: 'Aug 2025',
    end: 'Dec 2026',
    url: 'https://www.cmu.edu/ini/',
    detail: 'GPA 3.86 / 4.0 · College of Engineering',
    bullets: [
      'Coursework across distributed systems, database internals, cloud infrastructure, and machine learning.',
    ],
    tags: ['Distributed Systems', 'Databases', 'Cloud'],
  },
  {
    org: 'Nankai University',
    role: 'B.E. in Information Security',
    location: 'Tianjin, China',
    start: 'Sep 2021',
    end: 'Jul 2025',
    url: 'https://en.nankai.edu.cn/',
    detail: 'GPA 3.71 / 4.0 · College of Cyber Science',
    bullets: [
      'Strong foundation in computer systems, security, algorithms, and software engineering.',
    ],
    tags: ['Systems', 'Security', 'Algorithms'],
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    org: 'Carnegie Mellon University',
    role: 'Teaching Assistant — Cloud Infrastructure and Services (14-848)',
    location: 'Pittsburgh, PA',
    start: 'Aug 2026',
    end: 'Present',
    bullets: [
      'Support the 14-848 Cloud Infrastructure and Services course: office hours, assignment/project design, and grading.',
    ],
    tags: ['Cloud', 'Teaching'],
  },
  {
    org: 'ENFOS',
    role: 'Software Engineer Intern',
    location: 'Durham, NC',
    start: 'May 2026',
    end: 'Aug 2026',
    bullets: [
      'Designed and implemented a scalable ReAct-based multi-agent architecture for 100+ tools through a tool-search tool, reducing average tool-calling latency by 18% while improving tool-selection accuracy by 40%.',
      'Simplified and refactored MCP agent context engineering with hybrid retrieval (BM25 + semantic search) over messages, answers, and attachments for long-term memory plus a verbatim window for short-term — cutting average prompt token cost by 61% while preserving answer quality across 100+ turns under p95 latency of 200ms.',
      'Architected and provisioned AWS-based agent infrastructure using EventBridge, SQS, Lambda, DynamoDB, Bedrock, and AOSS for async attachment ingestion, vector retrieval, and long-term agentic memory.',
      'Built an async, scalable document lifecycle (upload/update/delete/bulk import/secure/password-required) using AWS SQS, Lambda, S3, DLQ, ECS Fargate, and Bedrock KnowledgeBase — ingesting and indexing 500M documents across 100K sites.',
      'Collaborated with UI/UX and product teams to deliver user-friendly charts, streamed hints/summaries over SSE, and citations for a well-rounded SaaS AI chatbot/agent.',
      'Leveraged Claude Code (subagent orchestration, skills, commands, hooks, plugins) to accelerate design, planning, implementation, debugging, and testing.',
    ],
    tags: ['AWS', 'Bedrock', 'DynamoDB', 'MCP', 'Multi-Agent', 'Claude Code'],
  },
  {
    org: 'Carnegie Mellon University',
    role: 'Teaching Assistant — Distributed Systems (14-736)',
    location: 'Pittsburgh, PA',
    start: 'Jan 2026',
    end: 'Apr 2026',
    bullets: [
      'Hosted office hours twice a week, answering programming, concept, and logistics questions from 20+ students.',
      'Maintained and contributed to the course codebase through GitHub issues, CI/CD, and PRs.',
      'Actively engaged in course design and grading for assignments and projects.',
    ],
    tags: ['Distributed Systems', 'Teaching', 'Go'],
  },
  {
    org: 'Tsinghua University',
    role: 'Research Assistant',
    location: 'Beijing, China',
    start: 'Jul 2024',
    end: 'Jul 2025',
    bullets: [
      'Worked at the Beijing National Research Center for Information Science and Technology (BNRIST) under Dr. Sicheng Zhao, on an AI4Sci project assisting psychological experts with LLM-automated mind-mindedness analysis for parent-child interaction research.',
      'Implemented a hierarchical multi-class classification algorithm fine-tuning pretrained LLMs (BERT, LLaMA) for corpus analysis, achieving 82.3% accuracy and 82% macro F1, outperforming all baselines.',
      'Collaborated with psychology faculty on both technical modeling decisions and non-technical research framing.',
    ],
    tags: ['LLM', 'NLP', 'BERT', 'LLaMA', 'PyTorch'],
  },
  {
    org: 'Chinasoft International',
    role: 'Backend Software Development Intern',
    location: 'Tianjin, China',
    start: 'Jun 2023',
    end: 'Aug 2023',
    bullets: [
      'Drove a backend Hive/HDFS MapReduce workflow over 4M+ records, boosting query performance by 32%.',
      'Delivered Spring Boot backend services and REST APIs for interactive data analytics, coordinating closely with frontend engineers and non-technical designers to ship features.',
      'Engineered MySQL ingestion and streaming using Sqoop, Kafka, and ZooKeeper, ensuring reliable data flow and reducing end-to-end processing latency by 27%.',
    ],
    tags: ['Spring Boot', 'Hadoop', 'Kafka', 'MySQL', 'REST'],
  },
  {
    org: 'LongShine Technology',
    role: 'DevOps Engineer Intern',
    location: 'Tianjin, China',
    start: 'Mar 2023',
    end: 'May 2023',
    bullets: [
      'Automated 8+ daily maintenance tasks with Shell/Python, improving system response time by 18%.',
      'Drove CI/CD pipeline modernization with Jenkins, Docker, and Kubernetes, cutting deployment errors by 45% and increasing uptime to 99.7%.',
    ],
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'Shell', 'CI/CD'],
  },
];

// A condensed, grouped view of skills for the About page + Experience header.
export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: 'Programming Languages',
    items: [
      'C++',
      'C',
      'Python',
      'Java',
      'Go',
      'Rust',
      'SQL',
      'Shell',
      'JavaScript',
      'TypeScript',
      'React',
      'CSS3',
      'HTML5',
      'Markdown',
      'Node.js',
      'HCL',
    ],
  },
  {
    group: 'Cloud',
    items: [
      'AWS',
      'DynamoDB',
      'Amazon Bedrock',
      'Amazon EventBridge',
      'AWS Fargate',
      'AWS Lambda',
      'GCP',
      'GCP Compute Engine',
      'Google Kubernetes Engine',
      'GCP Artifact Registry',
      'GCP Cloud Storage',
      'GCP Pub/Sub',
      'Kubernetes',
      'Terraform',
      'Docker',
      'Microservices',
    ],
  },
  {
    group: 'Tools',
    items: [
      'Git',
      'Redis',
      'Kafka',
      'Hadoop / MapReduce',
      'ClickHouse',
      'FastAPI',
      'PostgreSQL',
      'Neo4J',
      'PyTorch',
      'TensorFlow',
      'HuggingFace',
      'MCP',
      'GitHub',
      'Linux',
      'Claude Code',
      'Codex',
    ],
  },
];

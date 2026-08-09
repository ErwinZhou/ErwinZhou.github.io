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
    org: 'ENFOS Inc.',
    role: 'Software Development Engineering Intern',
    location: 'Durham, NC',
    start: 'May 2026',
    end: 'Present',
    bullets: [
      'Designed and built a privacy-aware, multi-tenant data intelligence platform across PostgreSQL, ClickHouse, and Neo4J — processing production activity for 13K+ users across 35 tenants and modeling ~20M graph relationships.',
      'Developed incremental, idempotent ingestion pipelines and a persona engine precomputing 140+ behavior features per user, enabling low-latency analytics by eliminating full-table scans over 50M+ audit events.',
      'Optimized DynamoDB access patterns and secondary indexes for contextual agentic memory using ordered and sparse GSIs — a 95% decrease in evaluated recall rows and 44% lower conversation-list latency.',
    ],
    tags: ['PostgreSQL', 'ClickHouse', 'Neo4J', 'DynamoDB', 'AWS'],
  },
  {
    org: 'Chinasoft International',
    role: 'Backend Software Development Intern',
    location: 'Beijing, China',
    start: 'May 2023',
    end: 'Jul 2023',
    bullets: [
      'Drove a backend Hive/HDFS MapReduce workflow over 4M+ records, boosting query performance by 32%.',
      'Delivered Spring Boot backend services and REST APIs for interactive data analytics, coordinating closely with frontend engineers and non-technical designers to ship features.',
      'Engineered MySQL ingestion and streaming using Sqoop, Kafka, and ZooKeeper, ensuring reliable data flow and reducing end-to-end processing latency by 27%.',
    ],
    tags: ['Spring Boot', 'Hadoop', 'Kafka', 'MySQL', 'REST'],
  },
];

// A condensed, grouped view of skills for the About page + Experience header.
// `columns` slices `items` sequentially into the SkillsGrid wedge layout — e.g. [1, 2, 3, 4]
// means the first item is column 1, the next 2 are column 2, and so on. Counts must sum to items.length.
export const SKILLS: { group: string; items: string[]; columns: number[] }[] = [
  {
    group: 'Programming Languages',
    columns: [1, 2, 3, 4],
    items: [
      'SQL',
      'Shell',
      'Rust',
      'TypeScript',
      'JavaScript',
      'C',
      'C++',
      'Python',
      'Java',
      'Go',
    ],
  },
  {
    group: 'Cloud',
    columns: [5, 3, 4],
    items: [
      'GCP Compute Engine',
      'Google Kubernetes Engine',
      'Microservices',
      'Kubernetes',
      'Terraform',
      'AWS',
      'Docker',
      'GCP',
      'Amazon Bedrock',
      'Amazon EventBridge',
      'AWS Lambda',
      'AWS Fargate',
    ],
  },
  {
    group: 'Tools',
    columns: [5, 3, 4],
    items: [
      'PyTorch',
      'MCP',
      'Kafka',
      'Hadoop / MapReduce',
      'ClickHouse',
      'Claude Code',
      'Git',
      'Codex',
      'FastAPI',
      'PostgreSQL',
      'Neo4J',
      'Redis',
    ],
  },
];

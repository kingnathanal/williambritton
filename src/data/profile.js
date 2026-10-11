export const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brittonwilliam/' },
  { label: 'GitHub', href: 'https://github.com/kingnathanal' },
  { label: 'Email', href: 'mailto:will.nathanal@gmail.com' },
  { label: 'Photography', href: 'https://nathanal.com/' },
  { label: 'Medium', href: 'https://medium.com/@kingnathanal' }
]

export const professionalSummary =
  "I'm a Staff Software Engineer and technical lead at General Motors, with 16+ years across software engineering, production operations, and platform engineering. I lead Atmos compute and networking work for shared Azure infrastructure supporting approximately 490 onboarded teams. My DevOps experience dates to 2013, and I hold an M.S. in Computer Science from Eastern Michigan University."

export const skills = {
  'Cloud & orchestration': ['Azure', 'AKS', 'GCP', 'GKE', 'Kubernetes', 'Karpenter', 'Istio', 'Docker'],
  'Infrastructure & delivery': ['Terraform', 'Terragrunt', 'Azure DevOps', 'GitHub Actions', 'Argo CD', 'GitOps'],
  'Networking & security': ['Cloud networking', 'Istio ingress', 'DNS A records', 'IPAM', 'NetBox', 'Enterprise network policies'],
  'Reliability & observability': ['Compute & network SLOs', 'OpenTelemetry', 'Datadog', 'Prometheus', 'Grafana', 'Cluster health checks', 'Automated remediation'],
  'Languages & data': ['Python', 'Go', 'Java', 'SQL', 'PostgreSQL', 'TimescaleDB', 'Databricks', 'Synapse'],
  'Personal & research': ['AWS EC2', 'Gray-failure detection', 'Edge networks', 'MCP', 'Photography']
}

export const experience = [
  {
    name: 'General Motors',
    years: 'Mar 2023 — Present',
    position: 'Staff Software Engineer',
    highlights: [
      'Technical lead for the Atmos compute and networking team, guiding shared Azure infrastructure supporting approximately 490 onboarded teams. Partners with tenants to resolve migration blockers and build reusable infrastructure and self-service capabilities.',
      'Delivered the initial multi-tenant GCP foundation with identity federation, GKE custom ComputeClasses, Argo tooling, OpenTelemetry, and Datadog.',
      'Implemented Karpenter-based self-service node pools for GPU and specialized workloads; manages AKS operations and Istio ingress within enterprise security and network policies.',
      'Defines Terraform and Terragrunt standards, Azure DevOps and GitHub Actions pipelines, and Argo CD GitOps deployment patterns.',
      'Helps define compute and network SLOs and platform observability with OpenTelemetry and Datadog; builds cluster health checks that trigger automated remediation.',
      'Implemented self-service DNS A-record provisioning and automated subnet CIDR allocation with NetBox and Terraform.',
      'Mentors engineers through technical demonstrations, game days, and hands-on troubleshooting. Received the General Motors Critical Technical Talent Award.'
    ]
  },
  {
    name: 'General Motors',
    years: 'Sep 2020 — Mar 2023',
    position: 'Solution Architect / System Engineer',
    highlights: [
      'Coordinated infrastructure and modernization initiatives for 50+ application teams, aligning architects, product owners, security leads, and developers on requirements and delivery.',
      'Drove security remediation and operating-system and middleware compliance work; reported risk and technology debt to directors and CIO stakeholders.',
      'Designed and supported a Microsoft Dynamics CRM implementation and completed the Layer7 to Azure API Management migration ahead of deadline.'
    ]
  },
  {
    name: 'Detroit Diesel',
    context: 'Contractor through SunSoft Technologies and DXC Technology',
    years: 'Nov 2014 — Sep 2020',
    position: 'Senior Software Engineer',
    highlights: [
      'Served as technical lead for a server application team, providing architecture, training, release support, and engineering leadership.',
      'Architected Java, Spring MVC, and Spring Boot applications and delivery flows for server systems supporting mechatronics engineering emissions data.',
      'Built Jenkins pipelines for Docker and WebSphere deployments; administered Jenkins, GitLab, Artifactory, SonarQube, and AppDynamics on SUSE Linux.'
    ]
  }
]

export const teamEnablement = [
  {
    title: 'Make the path legible',
    description:
      'Partner with tenant teams through architecture reviews, onboarding, roadshows, and office hours; resolve infrastructure issues that block migrations and delivery.'
  },
  {
    title: 'Build better defaults',
    description:
      'Build reusable infrastructure patterns, self-service compute and DNS provisioning, and consistent Terraform, Terragrunt, and GitOps delivery practices.'
  },
  {
    title: 'Grow shared judgment',
    description:
      'Mentor engineers through technical demonstrations, tabletop discussions, game days, and hands-on troubleshooting.'
  }
]

export const earlierExperience = [
  {
    years: 'Jul 2013 — Oct 2014',
    role: 'Operations Administrator / DevOps .NET Developer',
    company: 'Covisint'
  },
  {
    years: 'Sep 2011 — Jul 2013',
    role: 'Service Information Developer II',
    company: 'Hewlett Packard'
  },
  {
    years: 'Jun 2010 — Sep 2011',
    role: 'Junior Java/J2EE Developer (student)',
    company: 'State of Michigan'
  }
]

export const credentials = [
  'HashiCorp Terraform Associate · 2023',
  'Microsoft Certified Azure Administrator · 2022',
  'Microsoft Certified Azure Fundamentals · 2022',
  'M.S. Computer Science · Eastern Michigan University · 2026'
]

export const photographyProject = {
  name: 'Nathanal.com',
  summary:
    'My photography portfolio, migrated from Squarespace to Azure Static Web Apps with React/TypeScript, a Python Azure Functions API, and Blob Storage. Infrastructure and deployments are automated with Terraform and GitHub Actions.',
  tags: ['Photography', 'Azure', 'React', 'Terraform']
}

export const personalProjects = [
  {
    id: 'freshlybudgets',
    name: 'Freshly Budgets',
    category: 'Personal finance',
    summary:
      'An early-access household budgeting app for tracking budgets, expenses, bills, debts, and savings goals, with family sharing, spending reports, CSV imports, and a budget assistant.',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'AWS'],
    availability: 'Early access',
    links: [{ label: 'Explore Freshly Budgets', href: 'https://freshlybudget.com/' }]
  },
  {
    id: 'pictl',
    name: 'pictl',
    category: 'Raspberry Pi fleet CLI',
    summary:
      'A Go learning project for managing Raspberry Pis over SSH. Brings reachability checks, system metrics, health checks, package updates, and remote command execution into one CLI.',
    tags: ['Go', 'Cobra', 'SSH', 'Raspberry Pi'],
    availability: 'Hobby project',
    links: [{ label: 'View code', href: 'https://github.com/kingnathanal/pictl' }]
  },
  {
    id: 'bookshelf',
    name: 'Bookshelf MCP',
    category: 'Technical reference search',
    summary:
      'A personal research tool that connects AI assistants to technical PDFs through MCP. Combines keyword and semantic search to return relevant passages with book, page, and section references.',
    tags: ['Python', 'FastMCP', 'PostgreSQL', 'pgvector', 'Ollama'],
    availability: 'Private personal project',
    links: []
  }
]

export const bio =
  'William Britton Jr is a Staff Software Engineer with 16+ years across software engineering, production operations, and platform engineering, including DevOps experience dating to 2013. At General Motors, he is technical lead for Atmos compute and networking, guiding shared Azure infrastructure supporting approximately 490 onboarded teams. He delivered the initial multi-tenant GCP foundation. His work includes Kubernetes, self-service compute and networking, infrastructure as code, GitOps, observability, and tenant enablement. He completed an M.S. in Computer Science at Eastern Michigan University, with gray-failure detection research accepted to ICMLA 2026 and pending publication. AWS EC2 experience comes from personal and research projects.'

// Verified against the official ICMLA 2026 program on October 4, 2026.
export const conferenceResearch = {
  title: 'Detecting Gray Failures in Edge Networks with Lightweight Unsupervised Learning',
  authors: 'William Britton and Ourania Spantidi',
  status: 'Accepted · Publication pending',
  summary: 'My graduate research uses lightweight unsupervised learning to detect gray failures in a six-node Raspberry Pi edge network, with Python telemetry agents, an AWS EC2 control plane, and experimental MQTT-based mitigation.',
  presentation: 'October 6, 2026 · 10:20 a.m. Eastern · Ballroom C East',
  session: 'Special Session 3A · Anomaly Detection in Complex and Evolving Systems',
  programUrl: 'https://www.icmla-conference.org/icmla26/schedule.html',
  paperListingUrl: 'https://www.icmla-conference.org/icmla26/ss3papers.html'
}

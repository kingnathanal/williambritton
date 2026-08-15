export const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brittonwilliam/' },
  { label: 'GitHub', href: 'https://github.com/kingnathanal' },
  { label: 'Email', href: 'mailto:will@nathanal.com' },
  { label: 'Photography', href: 'https://nathanal.com/' },
  { label: 'Medium', href: 'https://medium.com/@kingnathanal' }
]

export const skills = {
  'Cloud Platform': ['Microsoft Azure', 'AKS', 'Kubernetes', 'Istio', 'Azure Networking', 'Multi-tenant platforms'],
  'Infrastructure as Code': ['Terraform', 'Terragrunt', 'Go automation', 'NetBox IPAM', 'Infrastructure design'],
  'Delivery & Reliability': ['GitHub Actions', 'Azure DevOps', 'ArgoCD', 'Datadog', 'Grafana', 'Prometheus'],
  'Data & Integration': ['Azure Postgres', 'Event Hub', 'Service Bus', 'PostgreSQL', 'TimescaleDB'],
  'Application Engineering': ['Go', 'Python', 'Java', 'C#', 'TypeScript', 'Vue', 'React', '.NET'],
  'Research & Creative': ['AI/ML', 'Digital forensics', 'Technical writing', '3D printing', 'Photography']
}

export const experience = [
  {
    name: 'General Motors',
    years: 'Mar 2023 — Present',
    position: 'Staff Software Engineer',
    highlights: [
      'Leads platform engineering strategy and delivery for Azure-based internal cloud platforms supporting 400+ microservices.',
      'Drives Terraform, Terragrunt, and GitHub Actions standards that improve repeatability, auditability, and developer onboarding.',
      'Directs AKS operations, tenant enablement, service-mesh patterns, and resource optimization across multi-tenant environments.',
      'Implemented NetBox-backed IPAM automation with Terraform to standardize CIDR allocation for platform subnet provisioning.',
      'Recognized with the General Motors Critical Technical Talent Award for exceptional technical impact and individual performance.'
    ]
  },
  {
    name: 'General Motors',
    years: 'Sep 2020 — Mar 2023',
    position: 'Solution Architect / System Engineer',
    highlights: [
      'Coordinated IT initiatives for 50+ application teams, providing architectural guidance, compliance support, and delivery alignment.',
      'Delivered executive-level reporting on compliance, technology debt, risk posture, and modernization progress.',
      'Drove critical security and vulnerability remediation initiatives and completed a Layer7 to Azure API Management migration ahead of deadline.'
    ]
  },
  {
    name: 'Detroit Diesel / SunSoft Technologies / DXC Technology',
    years: 'Nov 2014 — Sep 2020',
    position: 'Senior Software Engineer',
    highlights: [
      'Served as technical lead for a server application team, providing architecture, training, release support, and engineering leadership.',
      'Architected Java, Spring MVC, and Spring Boot application and microservice delivery flows across tooling, deployment, and release management.',
      'Developed Jenkins pipelines for Docker container deployments and WebSphere releases while supporting critical mechatronics engineering applications.'
    ]
  }
]

export const teamEnablement = [
  {
    title: 'Make the path legible',
    description:
      'Partner with application teams through architecture reviews, roadshows, office hours, and practical onboarding—not a PDF someone finds six months too late.'
  },
  {
    title: 'Build better defaults',
    description:
      'Turn repeatable platform work into standards with Terraform, Terragrunt, GitHub Actions, and NetBox-backed IPAM automation.'
  },
  {
    title: 'Grow shared judgment',
    description:
      'Use technical demos, tabletop discussions, game days, and mentorship to make teams more capable when the obvious answer is not available.'
  }
]

export const careerArc = [
  {
    years: '2023 — Present',
    role: 'Staff Software Engineer',
    company: 'General Motors',
    focus: 'Cloud platform engineering, developer enablement, and technical strategy.'
  },
  {
    years: '2020 — 2023',
    role: 'Solution Architect / System Engineer',
    company: 'General Motors',
    focus: 'Architecture, security remediation, and delivery alignment for 50+ application teams.'
  },
  {
    years: '2014 — 2020',
    role: 'Senior Software Engineer',
    company: 'Detroit Diesel / SunSoft Technologies / DXC Technology',
    focus: 'Java and Spring systems, DevOps tooling, release engineering, and mechatronics data.'
  },
  {
    years: '2010 — 2014',
    role: 'Developer / Operations Engineer',
    company: 'State of Michigan, Hewlett Packard, and Covisint',
    focus: 'Full-stack development, production operations, databases, and the foundations of DevOps.'
  }
]

export const credentials = [
  'HashiCorp Terraform Associate · 2023',
  'Microsoft Certified Azure Administrator · 2022',
  'Microsoft Certified Azure Fundamentals · 2022',
  'M.S. Computer Science · Eastern Michigan University · 2026'
]

export const projects = [
  {
    name: 'Cloud Platform Engineering',
    summary:
      'Azure-based internal platforms supporting 400+ microservices, with AKS operations, tenant enablement, platform guardrails, and developer onboarding.',
    tags: ['Azure', 'AKS', 'Platform engineering']
  },
  {
    name: 'AI Anomaly Detection for Edge Network Failover',
    summary:
      'An unsupervised ML observability system built on a six-node Raspberry Pi edge network; 1.09M telemetry rows, 67% faster detection, and automated MQTT failover.',
    tags: ['Python', 'AI/ML', 'MQTT']
  },
  {
    name: 'Nathanal.com Azure Migration',
    summary: 'Moved the photography portfolio from Squarespace to Azure Static Web Apps, Functions, Blob Storage, Terraform, GitHub Actions, and React/TypeScript.',
    tags: ['Azure', 'React', 'Terraform']
  },
  {
    name: 'pictl Platform CLI',
    summary: 'A Go-based command-line utility concept for platform operations and Kubernetes-focused automation workflows.',
    tags: ['Go', 'Kubernetes', 'Automation']
  }
]

export const bio =
  'Will Britton is a Staff Software Engineer and technical leader. At General Motors, he leads cloud platform engineering for Azure-based internal platforms that support 400+ microservices. His work spans AKS, Terraform/Terragrunt, GitHub Actions, service mesh, NetBox-backed IPAM, observability, and developer enablement. Will completed an M.S. in Computer Science at Eastern Michigan University in 2026, with research focused on unsupervised machine learning for proactive gray-failure detection and automated failover in edge networks. Under the HyyerCode banner, he builds cloud-hosted applications, photography projects, 3D prints, technical demos, and diagrams that make complex systems easier to understand.'

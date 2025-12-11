import { motion } from "framer-motion";
import { ExternalLink, Github, Cloud, Container, GitBranch, Activity, Shield, Layers } from "lucide-react";

const projects = [
  {
    title: "Multi-Cloud Kubernetes Platform",
    description: "Enterprise-grade Kubernetes platform spanning AWS, GCP, and Azure with automated failover, GitOps deployment, and comprehensive monitoring.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    tags: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus"],
    github: "#",
    demo: "#",
    color: "blue",
  },
  {
    title: "Zero-Downtime CI/CD Pipeline",
    description: "Fully automated deployment pipeline with blue-green deployments, canary releases, and automatic rollback capabilities.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    tags: ["GitHub Actions", "Docker", "AWS", "Helm"],
    github: "#",
    demo: "#",
    color: "purple",
  },
  {
    title: "Infrastructure as Code Framework",
    description: "Reusable Terraform modules and Ansible playbooks for provisioning secure, scalable cloud infrastructure in minutes.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["Terraform", "Ansible", "AWS", "GCP"],
    github: "#",
    demo: "#",
    color: "green",
  },
  {
    title: "Observability Stack",
    description: "Complete monitoring solution with custom dashboards, alerting rules, and distributed tracing across microservices.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Grafana", "Prometheus", "Loki", "Jaeger"],
    github: "#",
    demo: "#",
    color: "orange",
  },
  {
    title: "Security Automation Suite",
    description: "Automated security scanning, vulnerability management, and compliance reporting integrated into the CI/CD pipeline.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["Vault", "Trivy", "SAST", "DAST"],
    github: "#",
    demo: "#",
    color: "pink",
  },
  {
    title: "Serverless Event Platform",
    description: "Event-driven architecture using AWS Lambda, SQS, and EventBridge for processing millions of events daily.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["Lambda", "EventBridge", "SQS", "DynamoDB"],
    github: "#",
    demo: "#",
    color: "blue",
  },
];

const tagIcons: Record<string, typeof Cloud> = {
  Kubernetes: Layers,
  Docker: Container,
  AWS: Cloud,
  GCP: Cloud,
  Terraform: Shield,
  "GitHub Actions": GitBranch,
  Grafana: Activity,
  Prometheus: Activity,
  Vault: Shield,
  Lambda: Cloud,
};

const colorClasses = {
  cyan: "from-cyan/30 to-transparent border-cyan/30 hover:border-cyan/60",
  purple: "from-purple/30 to-transparent border-purple/30 hover:border-purple/60",
  green: "from-green/30 to-transparent border-green/30 hover:border-green/60",
  orange: "from-orange/30 to-transparent border-orange/30 hover:border-orange/60",
  pink: "from-pink/30 to-transparent border-pink/30 hover:border-pink/60",
  blue: "from-blue/30 to-transparent border-blue/30 hover:border-blue/60",
  red: "from-red/30 to-transparent border-red/30 hover:border-red/60",
};

const tagColors = {
  cyan: "bg-cyan/20 text-cyan border-cyan/30",
  purple: "bg-purple/20 text-purple border-purple/30",
  green: "bg-green/20 text-green border-green/30",
  orange: "bg-orange/20 text-orange border-orange/30",
  pink: "bg-pink/20 text-pink border-pink/30",
  blue: "bg-blue/20 text-blue border-blue/30",
  red: "bg-red/20 text-red border-red/30",
};
<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
read_file

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world infrastructure and automation projects that power modern applications
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="perspective-1000"
            >
              <motion.div
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -5, 
                  scale: 1.02,
                  z: 50,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative h-full rounded-2xl bg-gradient-to-br ${colorClasses[project.color as keyof typeof colorClasses]} border backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl`}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Overlay glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan/20 to-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative p-6 z-10">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => {
                      const Icon = tagIcons[tag] || Cloud;
                      return (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${tagColors[project.color as keyof typeof tagColors]}`}
                        >
                          <Icon className="w-3 h-3" />
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan/50 via-purple/50 to-pink/50 blur-xl -z-10" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Server,
  Cloud,
  GitBranch,
  Container,
  FileCode,
  Activity,
  Shield,
  Database,
  Terminal,
  Layers,
  Gauge,
  Lock,
  Zap,
  Settings,
  Network,
} from "lucide-react";

const categories = [
  { id: "linux", label: "Linux" },
  { id: "cloud", label: "Cloud" },
  { id: "cicd", label: "CI/CD" },
  { id: "devops", label: "DevOps Tools" },
  { id: "iac", label: "IaC" },
  { id: "sre", label: "SRE" },
  { id: "monitoring", label: "Monitoring" },
];

const skills = {
  linux: [
    { name: "Ubuntu/Debian", icon: Terminal, color: "cyan" },
    { name: "RHEL/CentOS", icon: Server, color: "purple" },
    { name: "Shell Scripting", icon: FileCode, color: "green" },
    { name: "System Administration", icon: Settings, color: "orange" },
    { name: "Networking", icon: Network, color: "blue" },
    { name: "Security Hardening", icon: Shield, color: "pink" },
  ],
  cloud: [
    { name: "AWS", icon: Cloud, color: "orange" },
    { name: "Azure", icon: Cloud, color: "blue" },
    { name: "GCP", icon: Cloud, color: "cyan" },
    { name: "DigitalOcean", icon: Cloud, color: "purple" },
    { name: "Cloudflare", icon: Shield, color: "orange" },
    { name: "Lambda/Functions", icon: Zap, color: "green" },
  ],
  cicd: [
    { name: "GitHub Actions", icon: GitBranch, color: "purple" },
    { name: "GitLab CI", icon: GitBranch, color: "orange" },
    { name: "Jenkins", icon: Settings, color: "blue" },
    { name: "ArgoCD", icon: Layers, color: "cyan" },
    { name: "CircleCI", icon: Activity, color: "green" },
    { name: "Azure DevOps", icon: Cloud, color: "blue" },
  ],
  devops: [
    { name: "Docker", icon: Container, color: "blue" },
    { name: "Kubernetes", icon: Layers, color: "cyan" },
    { name: "Helm", icon: Layers, color: "purple" },
    { name: "Nginx", icon: Server, color: "green" },
    { name: "Traefik", icon: Network, color: "cyan" },
    { name: "HashiCorp Vault", icon: Lock, color: "orange" },
  ],
  iac: [
    { name: "Terraform", icon: FileCode, color: "purple" },
    { name: "Ansible", icon: Settings, color: "orange" },
    { name: "Pulumi", icon: FileCode, color: "cyan" },
    { name: "CloudFormation", icon: Cloud, color: "orange" },
    { name: "Crossplane", icon: Layers, color: "blue" },
    { name: "Packer", icon: Container, color: "blue" },
  ],
  sre: [
    { name: "Incident Response", icon: Activity, color: "orange" },
    { name: "Chaos Engineering", icon: Zap, color: "purple" },
    { name: "SLO/SLI/SLA", icon: Gauge, color: "cyan" },
    { name: "Capacity Planning", icon: Database, color: "blue" },
    { name: "Disaster Recovery", icon: Shield, color: "green" },
    { name: "On-Call Management", icon: Activity, color: "pink" },
  ],
  monitoring: [
    { name: "Prometheus", icon: Gauge, color: "orange" },
    { name: "Grafana", icon: Activity, color: "orange" },
    { name: "Datadog", icon: Gauge, color: "purple" },
    { name: "ELK Stack", icon: Database, color: "cyan" },
    { name: "New Relic", icon: Activity, color: "green" },
    { name: "PagerDuty", icon: Activity, color: "green" },
  ],
};

const colorClasses = {
  cyan: "from-cyan/20 to-cyan/5 border-cyan/30 hover:border-cyan/60 hover:shadow-[0_0_30px_hsl(186_100%_50%/0.3)]",
  purple: "from-purple/20 to-purple/5 border-purple/30 hover:border-purple/60 hover:shadow-[0_0_30px_hsl(270_100%_65%/0.3)]",
  blue: "from-blue/20 to-blue/5 border-blue/30 hover:border-blue/60 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.3)]",
  green: "from-green/20 to-green/5 border-green/30 hover:border-green/60 hover:shadow-[0_0_30px_hsl(142_76%_50%/0.3)]",
  orange: "from-orange/20 to-orange/5 border-orange/30 hover:border-orange/60 hover:shadow-[0_0_30px_hsl(25_95%_53%/0.3)]",
  pink: "from-pink/20 to-pink/5 border-pink/30 hover:border-pink/60 hover:shadow-[0_0_30px_hsl(330_100%_65%/0.3)]",
};

const iconColorClasses = {
  cyan: "text-cyan",
  purple: "text-purple",
  blue: "text-blue",
  green: "text-green",
  orange: "text-orange",
  pink: "text-pink",
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("linux");

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building and maintaining modern cloud infrastructure
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-primary text-primary-foreground shadow-lg glow-cyan"
                  : "glass hover:bg-muted/50"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {skills[activeCategory as keyof typeof skills].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: -5,
                }}
                className={`perspective-1000 group relative p-6 rounded-2xl bg-gradient-to-br border transition-all duration-300 cursor-pointer ${
                  colorClasses[skill.color as keyof typeof colorClasses]
                }`}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon
                      className={`w-10 h-10 ${
                        iconColorClasses[skill.color as keyof typeof iconColorClasses]
                      }`}
                    />
                  </motion.div>
                  <span className="text-sm font-medium text-foreground/90">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

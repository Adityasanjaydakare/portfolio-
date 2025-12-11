const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Backend server is running',
    timestamp: new Date().toISOString()
  });
});

// Get portfolio data
app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'Aditya Dakare',
    title: 'DevOps Engineer',
    bio: 'Building resilient infrastructure and automating everything. Passionate about cloud-native technologies, Kubernetes, and making deployments boring.',
    email: 'hello@example.com',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    }
  });
});

// Get projects
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Multi-Cloud Kubernetes Platform",
      description: "Enterprise-grade Kubernetes platform spanning AWS, GCP, and Azure with automated failover, GitOps deployment, and comprehensive monitoring.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      tags: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus"],
      github: "#",
      demo: "#",
      color: "blue",
    },
    {
      id: 2,
      title: "Zero-Downtime CI/CD Pipeline",
      description: "Fully automated deployment pipeline with blue-green deployments, canary releases, and automatic rollback capabilities.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
      tags: ["GitHub Actions", "Docker", "AWS", "Helm"],
      github: "#",
      demo: "#",
      color: "purple",
    },
    {
      id: 3,
      title: "Infrastructure as Code Framework",
      description: "Reusable Terraform modules and Ansible playbooks for provisioning secure, scalable cloud infrastructure in minutes.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      tags: ["Terraform", "Ansible", "AWS", "GCP"],
      github: "#",
      demo: "#",
      color: "green",
    },
    {
      id: 4,
      title: "Observability Stack",
      description: "Complete monitoring solution with custom dashboards, alerting rules, and distributed tracing across microservices.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["Grafana", "Prometheus", "Loki", "Jaeger"],
      github: "#",
      demo: "#",
      color: "orange",
    },
    {
      id: 5,
      title: "Security Automation Suite",
      description: "Automated security scanning, vulnerability management, and compliance reporting integrated into the CI/CD pipeline.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      tags: ["Vault", "Trivy", "SAST", "DAST"],
      github: "#",
      demo: "#",
      color: "red",
    },
    {
      id: 6,
      title: "Serverless Event Platform",
      description: "Event-driven architecture using AWS Lambda, SQS, and EventBridge for processing millions of events daily.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      tags: ["Lambda", "EventBridge", "SQS", "DynamoDB"],
      github: "#",
      demo: "#",
      color: "blue",
    },
  ]);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      message: 'Please provide name, email, and message'
    });
  }

  // In a real application, you would send an email or save to database here
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true,
    message: 'Thank you for your message! I will get back to you soon.',
    timestamp: new Date().toISOString()
  });
});

// Get skills data
app.get('/api/skills', (req, res) => {
  res.json({
    categories: [
      { id: "linux", label: "Linux" },
      { id: "cloud", label: "Cloud" },
      { id: "cicd", label: "CI/CD" },
      { id: "devops", label: "DevOps Tools" },
      { id: "iac", label: "IaC" },
      { id: "sre", label: "SRE" },
      { id: "monitoring", label: "Monitoring" },
    ]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not Found',
    message: 'The requested endpoint does not exist'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);
});


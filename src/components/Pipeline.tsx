import { motion } from "framer-motion";
import { GitCommit, Hammer, TestTube2, Rocket, Activity, ArrowRight } from "lucide-react";

const pipelineSteps = [
  {
    id: "commit",
    label: "Commit",
    icon: GitCommit,
    description: "Code changes pushed",
    color: "cyan",
  },
  {
    id: "build",
    label: "Build",
    icon: Hammer,
    description: "Compile & package",
    color: "blue",
  },
  {
    id: "test",
    label: "Test",
    icon: TestTube2,
    description: "Run test suites",
    color: "purple",
  },
  {
    id: "deploy",
    label: "Deploy",
    icon: Rocket,
    description: "Ship to production",
    color: "green",
  },
  {
    id: "monitor",
    label: "Monitor",
    icon: Activity,
    description: "Track & observe",
    color: "orange",
  },
];

const stepColors = {
  cyan: {
    bg: "from-cyan/20 to-cyan/5",
    border: "border-cyan/40 hover:border-cyan",
    glow: "group-hover:shadow-[0_0_40px_hsl(195_100%_55%/0.4)]",
    icon: "text-cyan",
    pulse: "bg-cyan",
  },
  blue: {
    bg: "from-blue/20 to-blue/5",
    border: "border-blue/40 hover:border-blue",
    glow: "group-hover:shadow-[0_0_40px_hsl(217_91%_60%/0.4)]",
    icon: "text-blue",
    pulse: "bg-blue",
  },
  purple: {
    bg: "from-purple/20 to-purple/5",
    border: "border-purple/40 hover:border-purple",
    glow: "group-hover:shadow-[0_0_40px_hsl(270_80%_65%/0.4)]",
    icon: "text-purple",
    pulse: "bg-purple",
  },
  green: {
    bg: "from-green/20 to-green/5",
    border: "border-green/40 hover:border-green",
    glow: "group-hover:shadow-[0_0_40px_hsl(142_70%_55%/0.4)]",
    icon: "text-green",
    pulse: "bg-green",
  },
  orange: {
    bg: "from-orange/20 to-orange/5",
    border: "border-orange/40 hover:border-orange",
    glow: "group-hover:shadow-[0_0_40px_hsl(25_95%_55%/0.4)]",
    icon: "text-orange",
    pulse: "bg-orange",
  },
};

export const Pipeline = () => {
  return (
    <section id="pipeline" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">CI/CD Pipeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automated workflows from code commit to production deployment
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue via-purple to-orange hidden lg:block -translate-y-1/2 z-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue via-purple to-orange"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Pipeline steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              const colors = stepColors[step.color as keyof typeof stepColors];

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Arrow (visible on mobile/tablet between steps) */}
                  {index < pipelineSteps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`group relative p-6 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} ${colors.glow} transition-all duration-300 cursor-pointer`}
                  >
                    {/* Pulse animation on hover */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 ${colors.pulse} opacity-0 group-hover:opacity-20`}
                        initial={false}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>

                    <div className="relative flex flex-col items-center text-center">
                      {/* Step number */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-4 border ${colors.border}`}
                      >
                        <Icon className={`w-8 h-8 ${colors.icon}`} />
                      </motion.div>

                      {/* Label */}
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {step.label}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pipeline details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: "Daily Deployments", value: "50+", icon: Rocket },
            { label: "Test Coverage", value: "95%", icon: TestTube2 },
            { label: "Uptime SLA", value: "99.9%", icon: Activity },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-6 text-center"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

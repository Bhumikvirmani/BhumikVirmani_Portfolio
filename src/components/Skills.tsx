import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Cloud, Wrench, TestTube, Users } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["JavaScript", "TypeScript", "Java", "Python", "ES6"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React.js", "Next.js", "Angular", "Redux", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "SCSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Nest.js", "Express.js", "REST APIs", "GraphQL"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (EC2, S3)", "Docker", "CI/CD", "Git/GitHub"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Testing & Tools",
      icon: TestTube,
      skills: ["React DevTools", "Unit Testing", "Integration Testing", "Vite", "Webpack"],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      variants={item}
                      className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Collaboration", "Communication", "Analytical Thinking", "Adaptability", "Time Management", "Continuous Learning", "Debugging"].map((skill, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.7 + idx * 0.05 }}
                  className="px-3 py-1.5 text-sm font-medium bg-accent/10 text-accent rounded-lg border border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

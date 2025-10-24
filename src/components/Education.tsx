import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award, ExternalLink } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master's in Computer Applications",
      institution: "JIMS / GGSIPU",
      gpa: "8.6",
      period: "Jan '23 - June '25",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Bachelor's in Computer Applications",
      institution: "JIMS / GGSIPU",
      gpa: "8.5",
      period: "Jan '20 - June '23",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const certifications = [
    {
      name: "AI in Product Management - Certification",
      link: "https://drive.google.com/file/d/1jwmHrFNb9RsyU3r237JIYrNEajiNjiK-/view"
    },
    {
      name: "Smart India Hackathon - Certificate",
      link: "https://drive.google.com/file/d/1Tg3nAeF0S1QxhUle2te6-Q-H9HVFeqRP/view"
    },
    {
      name: "OOPs in Java - Coding Ninjas",
      link: "https://drive.google.com/file/d/1u_jccF2enPf3pIZGdYr9StgXUyvkdSRE/view"
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>

          {/* Education */}
          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.gradient}`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-primary font-semibold">{edu.institution}</p>
                      <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:flex-col md:items-end">
                    <span className="text-sm text-muted-foreground">GPA</span>
                    <span className="text-2xl font-bold text-primary">{edu.gpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-teal-500">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications & Achievements</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <p className="text-foreground">{cert.name}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

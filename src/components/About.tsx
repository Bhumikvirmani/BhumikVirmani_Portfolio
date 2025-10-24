import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full Stack Developer experienced in designing and delivering scalable, reusable UI systems 
              and performance-driven applications using <span className="text-primary font-semibold">React.js</span>, 
              <span className="text-primary font-semibold"> TypeScript</span>, 
              <span className="text-primary font-semibold"> Redux</span>, and 
              <span className="text-primary font-semibold"> Node.js</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Skilled in building internal tools and platforms that support process management, automation, 
              and optimization, with expertise in ES6, HTML, CSS, RESTful APIs, SQL/NoSQL integration.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Adept at writing clean, maintainable, well-tested code and collaborating with cross-functional 
              teams to enhance scalability, maintainability, availability, and system visibility in agile environments.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

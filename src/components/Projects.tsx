import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "BrickHive - Real Estate Platform",
      description: "A comprehensive real estate platform with responsive design and secure authentication. Built with Next.js, featuring JWT-based authentication, form validation, and scalable backend APIs supporting 10K+ users.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express.js", "JWT"],
      link: "https://brickhive.netlify.app/",
      github: "https://github.com/bhumikvirmani",
      highlights: [
        "40% improvement in user engagement with responsive UI",
        "95% reduction in security incidents with JWT & bcrypt",
        "Scalable backend supporting 10K+ users",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "ElevateHire - Job Portal",
      description: "A dynamic job portal with role-based authentication and intuitive UX. Features secure JWT login, fast bundling with Vite, and responsive design with Tailwind CSS.",
      tech: ["React", "Redux", "Node.js", "MongoDB", "JWT", "Cloudinary"],
      link: "https://elevatehire.netlify.app",
      github: "https://github.com/bhumikvirmani",
      highlights: [
        "95% user satisfaction through intuitive UX",
        "Dynamic job listings with role-based access",
        "Fast load times with Vite and Webpack optimization",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    // {
    //   title: "Doctor Landing Page",
    //   description: "A static healthcare website deployed on AWS S3 with versioning and ACL configuration. Demonstrates cloud deployment and public access configuration skills.",
    //   tech: ["HTML5", "CSS3", "JavaScript", "AWS S3"],
    //   link: "http://doctorlandingpage.s3-website.ap-south-1.amazonaws.com/",
    //   github: "https://github.com/bhumikvirmani",
    //   highlights: [
    //     "Cloud deployment with AWS S3",
    //     "Version control and ACL configuration",
    //     "Professional healthcare design",
    //   ],
    //   gradient: "from-green-500 to-teal-500",
    // },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-xs text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-primary/50 hover:border-primary hover:bg-primary/10"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

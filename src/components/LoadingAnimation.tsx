import { motion } from "framer-motion";

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* Outer rotating circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-primary/20"
          style={{ width: "120px", height: "120px" }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Inner rotating circle */}
        <motion.div
          className="absolute inset-0 m-4 rounded-full border-4 border-primary/40"
          style={{ width: "88px", height: "88px" }}
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Center pulsing dot */}
        <motion.div
          className="absolute inset-0 m-auto rounded-full bg-primary"
          style={{ width: "24px", height: "24px" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Orbiting dots */}
        {[0, 120, 240].map((rotation, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-primary/60"
            style={{
              width: "12px",
              height: "12px",
              top: "50%",
              left: "50%",
              marginTop: "-6px",
              marginLeft: "-6px",
            }}
            animate={{
              rotate: rotation,
              x: [0, 50, 0],
              y: [0, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
      
      {/* Loading text */}
      <motion.p
        className="absolute mt-48 text-lg font-medium text-foreground/80"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default LoadingAnimation;

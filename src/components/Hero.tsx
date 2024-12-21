import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy px-6">
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-lightestSlate mb-6"
        >
          AWS Full Stack Developer
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate mb-8"
        >
          With over 10 years of experience in building scalable applications using Java,
          Angular, React, and AWS services. Specialized in microservices architecture
          and cloud-native solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green/10 text-green border border-green rounded hover:bg-green/20 transition-colors"
          >
            View Projects <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-lightSlate border border-lightSlate rounded hover:bg-lightSlate/10 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
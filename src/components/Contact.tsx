import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-lightestSlate mb-12 text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-lightNavy p-8 rounded-lg text-center"
        >
          <p className="text-lightSlate mb-8 max-w-2xl mx-auto">
            I'm currently open to new opportunities and would love to hear about
            your project. Whether you have a question or just want to say hi, feel
            free to reach out!
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:your.email@example.com"
              className="text-lightSlate hover:text-green transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-green transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-green transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-green transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>

          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-4 bg-green/10 text-green border border-green rounded hover:bg-green/20 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
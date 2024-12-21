import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-lightestSlate mb-12 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-lightNavy p-8 rounded-lg"
        >
          <p className="text-lightSlate mb-6">
            With over a decade of experience in software development, I specialize in
            building scalable and secure applications using modern technologies and
            best practices. My expertise spans across the entire development
            lifecycle, from architecture design to deployment and maintenance.
          </p>

          <p className="text-lightSlate mb-6">
            I have extensive experience with:
          </p>

          <ul className="list-disc list-inside text-lightSlate space-y-2 mb-6">
            <li>Full-stack development using Java, Spring Boot, Angular, and React</li>
            <li>Cloud architecture and deployment using AWS services</li>
            <li>Microservices architecture and containerization</li>
            <li>Agile methodologies and team leadership</li>
            <li>Performance optimization and scalability</li>
          </ul>

          <p className="text-lightSlate">
            I'm passionate about creating efficient, maintainable, and user-friendly
            applications that solve real-world problems. I constantly stay updated
            with the latest technologies and best practices in software development.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
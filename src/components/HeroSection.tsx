import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50"
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to ABC
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          A modern web application built with cutting-edge technology
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
'use client';

import { motion } from 'framer-motion';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <motion.section 
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Your Confidence Begins With Every Step
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Track your movement. Boost your glow. Repeat.
        </p>
        <motion.button
          className="glow-button bg-white text-purple-600 font-semibold py-3 px-8 rounded-full text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download the App
        </motion.button>
      </motion.section>

      {/* Affirmation Card */}
      <motion.div
        className="shimmer bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-lg w-full text-center shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Daily Affirmation
        </h2>
        <p className="text-xl italic">
          "The universe is obsessed with my strides today."
        </p>
      </motion.div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <motion.div 
      className="min-h-[70vh] flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-xl text-center max-w-2xl opacity-90">
        Our privacy policy is currently being updated to ensure the highest standards of data protection and transparency.
      </p>
    </motion.div>
  );
} 
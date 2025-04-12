'use client';

import { motion } from 'framer-motion';

export default function Press() {
  return (
    <motion.div 
      className="min-h-[70vh] flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Press</h1>
      <p className="text-xl text-center max-w-2xl opacity-90">
        Stay tuned for press releases, media coverage, and the latest news about Hot Girl Steps.
      </p>
    </motion.div>
  );
} 
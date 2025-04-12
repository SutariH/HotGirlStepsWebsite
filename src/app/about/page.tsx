'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      className="min-h-[70vh] flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About Hot Girl Steps</h1>
      <p className="text-xl text-center max-w-2xl opacity-90">
        Coming soon! We're working on bringing you the full story behind Hot Girl Steps and our mission to empower through movement.
      </p>
    </motion.div>
  );
} 
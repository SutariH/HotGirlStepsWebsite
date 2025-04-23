'use client';

import { motion } from 'framer-motion';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Hero Section (Attention) */}
      <motion.section 
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hot Girl Steps
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90">
          Confidence looks good on you—and it starts with your next walk.
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-80">
          A ✨free✨ step-counting app that turns your daily walks into a confidence-boosting ritual. With sparkle animations, affirmations, streaks & sass. Walk. Glow. Repeat.
        </p>
        <motion.button
          className="glow-button bg-white text-purple-600 font-semibold py-3 px-8 rounded-full text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💖 Get it on the App Store
        </motion.button>
      </motion.section>

      {/* What's a Hot Girl Walk Section (Interest) */}
      <motion.section
        className="shimmer bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-lg w-full mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          What's a Hot Girl Walk?
        </h2>
        <p className="text-lg mb-4">
          Hot Girl Walk = A daily stroll with main character energy. You reflect on your goals, channel your inner baddie, and move your body like the universe is watching (because it is).
        </p>
        <p className="text-lg mb-4">
          We made an app for that:
        </p>
        <ul className="text-left space-y-2">
          <li>🎯 Track your steps & slay your goals</li>
          <li>💅 Daily affirmations that hype you up</li>
          <li>💌 Hot Girl Passes so your streak stays safe</li>
          <li>🥇 Milestones that actually celebrate you</li>
          <li>✨ Sparkles. So. Many. Sparkles.</li>
        </ul>
      </motion.section>

      {/* Who Is It For Section (Desire) */}
      <motion.section
        className="shimmer bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-lg w-full mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Built for Girls Who Walk Like They Already Won
        </h2>
        <p className="text-lg mb-4">
          You're not just walking. You're glowing up.
        </p>
        <p className="text-lg mb-4">
          With Hot Girl Steps, every stroll becomes a moment.
        </p>
        <p className="text-lg mb-4">
          You'll get:
        </p>
        <ul className="text-left space-y-2">
          <li>A gorgeous progress ring that glows as you get closer</li>
          <li>Secret sparkles the more you walk (yes, it's magical)</li>
          <li>Encouraging messages that sound like your BFF</li>
          <li>Milestone cards that pop up like confetti</li>
        </ul>
        <p className="text-lg mt-4">
          It's everything your fitness tracker isn't: fun, cute, and made *for the girls.*
        </p>
      </motion.section>

      {/* Final CTA Section (Action) */}
      <motion.section
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the Glow Gang
        </h2>
        <p className="text-xl mb-8 opacity-90">
          ✨ Ready to romanticize your walks? ✨ Download Hot Girl Steps and turn every walk into a self-love sesh.
        </p>
        <motion.button
          className="glow-button bg-white text-purple-600 font-semibold py-3 px-8 rounded-full text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Hot Girl Steps
        </motion.button>
      </motion.section>
    </div>
  );
}

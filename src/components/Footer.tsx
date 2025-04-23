'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-purple-500/90 to-pink-500/90 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hot Girl Steps</h3>
            <p className="text-white/80">
              A step-tracking app made for the girls – track goals, earn sparkles, and glow with every walk.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-white/80 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-white/80 hover:text-white transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Vim Digital Oy. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link 
                href="mailto:hello@vimdigital.fi"
                className="text-white/80 hover:text-white transition-colors"
              >
                hello@vimdigital.fi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
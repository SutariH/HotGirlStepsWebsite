import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="/privacy" className="text-gray-400 hover:text-gray-500">
              Privacy Policy
            </a>
            <a href="/press" className="text-gray-400 hover:text-gray-500">
              Press
            </a>
            <a href="/about" className="text-gray-400 hover:text-gray-500">
              About
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Hot Girl Steps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
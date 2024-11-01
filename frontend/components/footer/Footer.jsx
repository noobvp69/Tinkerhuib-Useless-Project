import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import InteractiveElement from '../interactiveelement/InteractiveElement';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <InteractiveElement/>
          <p className="text-gray-400">
            © {currentYear} MyWebsite. All rights reserved.
          </p>
    </footer>
  );
}
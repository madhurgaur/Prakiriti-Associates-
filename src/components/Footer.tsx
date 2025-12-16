import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 px-4 md:px-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">About Us</h3>
          <p className="text-sm text-gray-400">Prakriti Associate is a leading consultancy providing IT solutions, cloud services, and automation for modern businesses. We deliver reliable, scalable, and innovative technology support.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition">Home</a></li>
            <li><a href="#" className="hover:text-primary transition">About</a></li>
            <li><a href="#" className="hover:text-primary transition">Services</a></li>
            <li><a href="#" className="hover:text-primary transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition">Cloud Automation</a></li>
            <li><a href="#" className="hover:text-primary transition">Server Management</a></li>
            <li><a href="#" className="hover:text-primary transition">Custom Development</a></li>
            <li><a href="#" className="hover:text-primary transition">SEO & Web</a></li>
          </ul>
        </div>

        {/* Support & Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Support & Policies</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition">FAQ</a></li>
            <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition">Support Center</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <ul className="text-sm text-gray-400 space-y-2 mb-4">
            <li>Email: <a href="mailto:info@mayanktripathi@gmail.com" className="hover:text-primary">mayanktripathi@gmail.com</a></li>
            <li>Phone: <a href="tel:+911234567890" className="hover:text-primary">+91 7275342889</a></li>
            <li>Location: Gorakhpur, India</li>
          </ul>
          <div className="flex space-x-4 mt-2">
            {/* Social Media Icons (SVG placeholders) */}
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <svg width="24" height="24" fill="currentColor" className="inline"><path d="M8 19c7.732 0 11.946-6.409 11.946-11.946 0-.182 0-.364-.012-.545A8.548 8.548 0 0022 4.59a8.19 8.19 0 01-2.357.646A4.118 4.118 0 0021.448 3.2a8.224 8.224 0 01-2.605.996A4.107 4.107 0 0015.448 3c-2.266 0-4.104 1.838-4.104 4.104 0 .322.036.637.106.938A11.654 11.654 0 013 4.149a4.104 4.104 0 001.27 5.477A4.073 4.073 0 012.8 9.1v.052a4.104 4.104 0 003.292 4.022 4.093 4.093 0 01-1.085.145c-.265 0-.522-.026-.773-.075a4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600">
              <svg width="24" height="24" fill="currentColor" className="inline"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.25c.41-.77 1.36-1.25 2.25-1.25 1.93 0 3.5 1.57 3.5 3.5v5.5z"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <svg width="24" height="24" fill="currentColor" className="inline"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.124v-3.622h3.124v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.732 0 1.324-.592 1.324-1.324v-21.35c0-.733-.592-1.325-1.324-1.325z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Prakriti Associate. All rights reserved.
      </div>
    </footer>
  );
}



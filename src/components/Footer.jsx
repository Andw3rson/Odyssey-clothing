import React from 'react'
import { Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    customerService: [
      { name: 'FAQs', href: '#' },
      { name: 'Contact Us', href: '#' }
    ],
    termsAndPolicy: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Returns & Exchange Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Newsletter Section - Left Column (Wider) */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold mb-4 text-display">NewsLetter</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Access Exclusive Offers and Early Product Releases Today.
              </p>
              <div className="flex gap-0 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent text-sm"
                />
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-r-lg transition-colors duration-300 font-semibold text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Customer Service - Middle Left */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-display">Customer Service</h3>
              <ul className="space-y-3">
                {footerLinks.customerService.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terms and Policy - Middle Right */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-display">Terms and Policy</h3>
              <ul className="space-y-3">
                {footerLinks.termsAndPolicy.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Brand Logo - Right Column */}
          <div className="mt-8 text-right">
            <span className="text-4xl font-bold text-display tracking-wider">ODYSSEY</span>
          </div>
        </div>

        {/* Bottom Row - Social Media and Copyright */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} - Odyssey Powered by Shopify
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

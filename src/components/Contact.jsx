import React from 'react'

const Contact = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* This section is now handled by the Testimonials component as the About section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-display">
            JOIN THE ODYSSEY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Be part of a community that values authenticity, creativity, and street culture. 
            Follow our journey and stay updated with the latest drops.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              FOLLOW US
            </button>
            <button className="btn-outline">
              SUBSCRIBE TO NEWSLETTER
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

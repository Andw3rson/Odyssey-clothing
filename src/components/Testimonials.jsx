import React from 'react'

const Testimonials = () => {
  return (
    <section id="collection" className="section-padding bg-white">
      <div className="container-custom">
        {/* Collection Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 md:mb-16">
        {/* Classic Collection Banner */}
        <div
          className="relative h-64 sm:h-80 md:h-96 overflow-hidden group cursor-pointer rounded-lg"
          style={{
            backgroundImage: "url('/images/banners/classic.jfif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition duration-300 group-hover:bg-black/60">
            <div className="text-center text-white px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-display leading-tight">
                Most Requested 'CLASSIC' Collections
              </h2>
              <button className="btn-secondary text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                SHOP COLLECTION
              </button>
            </div>
          </div>
        </div>

        {/* Fluffy Collection Banner */}
        <div
          className="relative h-64 sm:h-80 md:h-96 overflow-hidden group cursor-pointer rounded-lg"
          style={{
            backgroundImage: "url('/images/banners/flffy.jfif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition duration-300 group-hover:bg-black/60">
            <div className="text-center text-white px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-display leading-tight">
                Most Slept on 'FLFFY' Collections
              </h2>
              <button className="btn-secondary text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                SHOP COLLECTION
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 text-display">
            THE ODYSSEY COMPANY
          </h2>
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base lg:text-lg">
              Founded in 2025 by Jusper Anderson H. Carodan, Odyssey was created with a bold vision: to transform the 
              streetwear scene with designs that inspire individuality, creativity, and confidence. At Odyssey, we believe 
              fashion is more than just clothing it’s a way of telling your story, expressing your personality, and embarking 
              on a journey of self-discovery.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg">
              What makes Odyssey stand out is our commitment to puff-printed designs, a unique printing technique that gives 
              every piece a premium, textured finish. This not only adds depth and dimension to our designs but also delivers
              a look and feel that regular prints simply can’t match. Every Odyssey piece is carefully crafted using high-quality 
              fabrics to ensure durability, comfort, and long-lasting wear because your style deserves to stay bold for years to come.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg">
              Our inspiration comes from the modern urban lifestyle dynamic, expressive, and full of character. Each design represents
              freedom, individuality, and the fearless pursuit of creativity. We create fashion that speaks to people who dare to stand
              out, those who want more than just clothes they want a brand that aligns with their values and aspirations.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg">
              At Odyssey, we’re not just selling shirts; we’re building a community that celebrates uniqueness, confidence, and 
              authenticity. When you wear Odyssey, you’re not just wearing clothes you’re wearing your journey. Join us as we take 
              streetwear to the next level, one puff-printed masterpiece at a time. Welcome to Odyssey!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

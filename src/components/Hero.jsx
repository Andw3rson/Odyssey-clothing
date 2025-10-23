import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="bg-white">
      {/* Sale Banner */}
      <div className="sale-banner text-xs sm:text-sm">
        SALE 30% OFF USE CODE: SALE30
      </div>
      
      {/* Collection Banner */}
      <div className="sale-banner bg-gray-700 text-xs sm:text-sm">
        COLLECTION 25/26
      </div>

      {/* Hero Image */}
      <div className="relative">
        <div 
          className="h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero/hero-background.jfif')`, // Replace with your hero background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="text-center px-4 relative z-10">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-display drop-shadow-lg">
                  ODYSSEY
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                  Discover the latest streetwear collection with urban-inspired designs
                </p>
                <button className="btn-secondary text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 shadow-lg">
                  SHOP COLLECTION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

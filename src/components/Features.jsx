import React, { useState } from 'react'

const Features = () => {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['ALL', 'SLEEVES', 'TEES']

  const products = [
    { 
      id: 1, 
      name: 'ALL WE NEED IS MONEY Tee', 
      price: 1200, 
      category: 'TEES', 
      badge: 'NEW ARRIVAL', 
      image: '/images/products/all-we-need-is-money-tee.png' // Replace image path
    },
    { 
      id: 2, 
      name: 'Vampire Fangs Tee', 
      price: 1100, 
      category: 'TEES', 
      badge: 'BEST SELLER', 
      image: '/images/products/vampire-fangs-tee.png' 
    },
    { 
      id: 3, 
      name: 'I DID ABSOLUTELY F*CK ALL TODAY Tee', 
      price: 950, 
      category: 'TEES', 
      badge: null, 
      image: '/images/products/fck-all-today-tee.png' 
    },
    { 
      id: 4, 
      name: 'Acid Wash Distressed Tee', 
      price: 1300, 
      category: 'TEES', 
      badge: 'NEW ARRIVAL', 
      image: '/images/products/acid-wash-tee.png' 
    },
    { 
      id: 5, 
      name: 'PRAMOND Star Zip-Up', 
      price: 2800, 
      category: 'TEES', 
      badge: null, 
      image: '/images/products/pramond-star-zipup.png' 
    },
    { 
      id: 6, 
      name: 'Abstract Panel Tee', 
      price: 1400, 
      category: 'TEES', 
      badge: 'BEST SELLER', 
      image: '/images/products/abstract-panel-tee.png' 
    },
    { 
      id: 7, 
      name: 'Fluffy Pattern Hoodie', 
      price: 3200, 
      category: 'SLEEVES', 
      badge: null, 
      image: '/images/products/fluffy-pattern-hoodie.png' 
    },
    { 
      id: 8, 
      name: 'Distressed Face Hoodie', 
      price: 2900, 
      category: 'SLEEVES', 
      badge: 'NEW ARRIVAL', 
      image: '/images/products/distressed-face-hoodie.png' 
    },
    { 
      id: 9, 
      name: 'Havoc Script Tee', 
      price: 1100, 
      category: 'TEES', 
      badge: 'BEST SELLER', 
      image: '/images/products/havoc-script-tee.png' 
    },
    { 
      id: 10, 
      name: 'Moon & Star Hoodie', 
      price: 3500, 
      category: 'SLEEVES', 
      badge: null, 
      image: '/images/products/moon-star-hoodie.png' 
    },
    { 
      id: 11, 
      name: 'RISE Glitch Tee', 
      price: 1200, 
      category: 'TEES', 
      badge: 'NEW ARRIVAL', 
      image: '/images/products/rise-glitch-tee.png' 
    },
    { 
      id: 12, 
      name: 'ONEONEYEAR Spray Tee', 
      price: 1000, 
      category: 'TEES', 
      badge: null, 
      image: '/images/products/oneoneyear-spray-tee.png' 
    },
    { 
      id: 13, 
      name: 'Grills Tee', 
      price: 1150, 
      category: 'TEES', 
      badge: 'BEST SELLER', 
      image: '/images/products/grills-tee.png'
    },
    { 
      id: 14, 
      name: 'ZEALOT Tank Top', 
      price: 900, 
      category: 'TEES', 
      badge: null, 
      image: '/images/products/zealot-tank.png' 
    },
    { 
      id: 15, 
      name: 'Spider Tank Top', 
      price: 950, 
      category: 'TEES', 
      badge: 'NEW ARRIVAL', 
      image: '/images/products/spider-tank.png' 
    },
    { 
      id: 16, 
      name: 'Futuristic Hoodie', 
      price: 4200, 
      category: 'SLEEVES', 
      badge: null, 
      image: '/images/products/futuristic-hoodie.png' 
    },
    { 
      id: 17, 
      name: 'Tribal Knit Sweater', 
      price: 3800, 
      category: 'SLEEVES', 
      badge: 'BEST SELLER', 
      image: '/images/products/tribal-knit-sweater.png' 
    },
    { 
      id: 18, 
      name: 'Rib Cage Cassette Tee', 
      price: 1300, 
      category: 'TEES', 
      badge: null, 
      image: '/images/products/rib-cage-cassette-tee.png' 
    },
    { 
      id: 19, 
      name: 'Kanni Budaym Hoodie', 
      price: 4500, 
      category: 'SLEEVES', 
      badge: 'NEW ARRIVAL', 
      image: '/images/products/kanni-budaym-hoodie.png' 
    },
    { 
      id: 20, 
      name: 'Skeleton Puffer Jacket', 
      price: 5200, 
      category: 'SLEEVES', 
      badge: null, 
      image: '/images/products/skeleton-puffer-jacket.png' 
    },
    { 
      id: 21, 
      name: 'Skeleton Hands Sweater', 
      price: 3600, 
      category: 'SLEEVES', 
      badge: 'BEST SELLER', 
      image: '/images/products/skeleton-hands-sweater.png' 
    },
    { 
      id: 22, 
      name: 'Demon Profile Tee', 
      price: 1100, 
      category: 'TEES', 
      badge: null, 
      image: '/images/products/demon-profile-tee.png' 
    }
  ]

// Filter products by category
const filteredProducts = activeCategory === 'ALL' 
  ? products 
  : products.filter(product => product.category === activeCategory)

// Sort products based on selected option
const sortedProducts = [...filteredProducts].sort((a, b) => {
  switch (sortBy) {
    case 'price-low':
      return a.price - b.price
    case 'price-high':
      return b.price - a.price
    case 'newest':
      return b.id - a.id
    case 'featured':
    default:
      return 0
  }
})

const handleSortChange = (e) => {
  setSortBy(e.target.value)
}

return (
  <section id="shop" className="section-padding bg-white">
    <div className="container-custom">
      {/* Category Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors duration-300 whitespace-nowrap ${
                activeCategory === category 
                  ? 'text-black border-b-2 border-black pb-1' 
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
          <span className="whitespace-nowrap">{filteredProducts.length} Items</span>
          <select 
            value={sortBy}
            onChange={handleSortChange}
            className="border border-gray-300 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-8 md:mb-12">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card group cursor-pointer">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.badge && (
                <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-black text-white text-xs px-1 sm:px-2 py-1 font-medium">
                  {product.badge}
                </div>
              )}
            </div>
            <div className="p-2 sm:p-3 lg:p-4">
              <h3 className="font-medium text-xs sm:text-sm text-gray-900 mb-1 line-clamp-2 leading-tight">
                {product.name}
              </h3>
              {/* Peso sign next to price */}
              <p className="text-xs sm:text-sm font-semibold text-black">
                ₱{product.price.toLocaleString()}.00
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mb-6 md:mb-8">
        <button className="btn-outline text-sm sm:text-base">
          VIEW ALL
        </button>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-1 sm:space-x-2">
        <button className="px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-500 hover:text-black transition-colors duration-300">
          ←
        </button>
        <button className="px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium bg-black text-white">
          1
        </button>
        <button className="px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-500 hover:text-black transition-colors duration-300">
          2
        </button>
        <button className="px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-500 hover:text-black transition-colors duration-300">
          →
        </button>
      </div>
    </div>
  </section>
)
}

export default Features
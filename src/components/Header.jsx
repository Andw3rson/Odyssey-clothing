import React, { useState } from 'react'
import { Menu, X, Search, User } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => {
    setShowSearch(!showSearch)
    setSearchQuery('')
    setSearchResults([])
    setSelectedProduct(null)
  }

  // Product List
  const products = [
    { id: 1, name: 'ALL WE NEED IS MONEY Tee', price: 1200, category: 'TEES', badge: 'NEW ARRIVAL', image: '/images/products/all-we-need-is-money-tee.png' },
    { id: 2, name: 'Vampire Fangs Tee', price: 1100, category: 'TEES', badge: 'BEST SELLER', image: '/images/products/vampire-fangs-tee.png' },
    { id: 3, name: 'I DID ABSOLUTELY F*CK ALL TODAY Tee', price: 950, category: 'TEES', badge: null, image: '/images/products/fck-all-today-tee.png' },
    { id: 4, name: 'Acid Wash Distressed Tee', price: 1300, category: 'TEES', badge: 'NEW ARRIVAL', image: '/images/products/acid-wash-tee.png' },
    { id: 5, name: 'PRAMOND Star Zip-Up', price: 2800, category: 'TEES', badge: null, image: '/images/products/pramond-star-zipup.png' },
    { id: 6, name: 'Abstract Panel Tee', price: 1400, category: 'TEES', badge: 'BEST SELLER', image: '/images/products/abstract-panel-tee.png' },
    { id: 7, name: 'Fluffy Pattern Hoodie', price: 3200, category: 'SLEEVES', badge: null, image: '/images/products/fluffy-pattern-hoodie.png' },
    { id: 8, name: 'Distressed Face Hoodie', price: 2900, category: 'SLEEVES', badge: 'NEW ARRIVAL', image: '/images/products/distressed-face-hoodie.png' },
    { id: 9, name: 'Havoc Script Tee', price: 1100, category: 'TEES', badge: 'BEST SELLER', image: '/images/products/havoc-script-tee.png' },
    { id: 10, name: 'Moon & Star Hoodie', price: 3500, category: 'SLEEVES', badge: null, image: '/images/products/moon-star-hoodie.png' },
    { id: 11, name: 'RISE Glitch Tee', price: 1200, category: 'TEES', badge: 'NEW ARRIVAL', image: '/images/products/rise-glitch-tee.png' },
    { id: 12, name: 'ONEONEYEAR Spray Tee', price: 1000, category: 'TEES', badge: null, image: '/images/products/oneoneyear-spray-tee.png' },
    { id: 13, name: 'Grills Tee', price: 1150, category: 'TEES', badge: 'BEST SELLER', image: '/images/products/grills-tee.png' },
    { id: 14, name: 'ZEALOT Tank Top', price: 900, category: 'TEES', badge: null, image: '/images/products/zealot-tank.png' },
    { id: 15, name: 'Spider Tank Top', price: 950, category: 'TEES', badge: 'NEW ARRIVAL', image: '/images/products/spider-tank.png' },
    { id: 16, name: 'Futuristic Hoodie', price: 4200, category: 'SLEEVES', badge: null, image: '/images/products/futuristic-hoodie.png' },
    { id: 17, name: 'Tribal Knit Sweater', price: 3800, category: 'SLEEVES', badge: 'BEST SELLER', image: '/images/products/tribal-knit-sweater.png' },
    { id: 18, name: 'Rib Cage Cassette Tee', price: 1300, category: 'TEES', badge: null, image: '/images/products/rib-cage-cassette-tee.png' },
    { id: 19, name: 'Kanni Budaym Hoodie', price: 4500, category: 'SLEEVES', badge: 'NEW ARRIVAL', image: '/images/products/kanni-budaym-hoodie.png' },
    { id: 20, name: 'Skeleton Puffer Jacket', price: 5200, category: 'SLEEVES', badge: null, image: '/images/products/skeleton-puffer-jacket.png' },
    { id: 21, name: 'Skeleton Hands Sweater', price: 3600, category: 'SLEEVES', badge: 'BEST SELLER', image: '/images/products/skeleton-hands-sweater.png' },
    { id: 22, name: 'Demon Profile Tee', price: 1100, category: 'TEES', badge: null, image: '/images/products/demon-profile-tee.png' }
  ]

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(value.toLowerCase()) ||
        p.category.toLowerCase().includes(value.toLowerCase())
    )
    setSearchResults(filtered)
  }

  const handleSelectProduct = (product) => {
    setSelectedProduct(product)
    setShowSearch(false)
    setSearchQuery('')
    setSearchResults([])
  }

  const logoConfig = {
    type: 'text',
    text: 'ODYSSEY',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    alt: 'ODYSSEY Logo'
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container-custom relative">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Left Navigation */}
            <nav className="hidden lg:flex space-x-8 xl:space-x-12">
              <a href="#shop" className="text-black hover:text-gray-600 transition text-sm font-medium uppercase">SHOP</a>
              <a href="#collection" className="text-black hover:text-gray-600 transition text-sm font-medium uppercase">COLLECTION</a>
              <a href="#about" className="text-black hover:text-gray-600 transition text-sm font-medium uppercase">ABOUT US</a>
            </nav>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              {logoConfig.type === 'image' ? (
                <img src={logoConfig.image} alt={logoConfig.alt} className="h-8 md:h-10 w-auto object-contain" />
              ) : (
                <span className="text-2xl md:text-3xl font-bold text-black tracking-wider">{logoConfig.text}</span>
              )}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button onClick={toggleSearch} className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="h-5 w-5 text-black" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="h-5 w-5 text-black" />
              </button>
              <button onClick={toggleMenu} className="lg:hidden p-2 hover:bg-gray-100 rounded-full">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="relative bg-gray-50 border-t border-gray-200 py-3 px-4 flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                autoFocus
              />
              <button onClick={toggleSearch} className="ml-2 p-2 text-gray-500 hover:text-black">
                <X className="h-5 w-5" />
              </button>

              {/* Search Results */}
              {searchQuery && (
                <div className="absolute top-14 left-0 right-0 bg-white shadow-md rounded-md border border-gray-200 max-h-60 overflow-y-auto z-50">
                  {searchResults.length > 0 ? (
                    searchResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectProduct(item)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-800 flex justify-between"
                      >
                        <span>{item.name}</span>
                        <span className="text-gray-500 text-xs">₱{item.price.toLocaleString()}</span>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500 text-sm">No results found.</div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Display Selected Product Below Header */}
      {selectedProduct && (
        <div className="container-custom py-10">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-72 object-cover rounded-lg mb-4"
            />
            {selectedProduct.badge && (
              <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                {selectedProduct.badge}
              </span>
            )}
            <h2 className="text-2xl font-bold mt-3 mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-700 mb-1">Category: {selectedProduct.category}</p>
            <p className="text-lg font-semibold text-black">₱{selectedProduct.price.toLocaleString()}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Header

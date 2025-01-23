import React from 'react'

const Card = () => {
    return (
        <div className="w-72 border  shadow-sm">
        
          <div className="relative w-full h-72 object-cover">
            <img
              src="./card.png"
              alt="Stylish cafe chair"
              className="w-full h-full object-cover"
            />
            
            <div className="absolute top-3 right-3 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
              -30%
            </div>
          </div>
    
         
          <div className="p-4">
            <h3 className="text-lg font-bold mb-1">Syltherine</h3>
            <p className="text-sm text-gray-500 mb-3">Stylish cafe chair</p>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">Rp 2.500.000</span>
              <span className="text-sm line-through text-gray-400">Rp 3.500.000</span>
            </div>
          </div>
        </div>
      );
}

export default Card








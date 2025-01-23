import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-[url(./front.png)] bg-left bg-cover bg-no-repeat w-full h-80 relative'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-55'></div>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex-col text-black flex justify-center gap-2 items-center'>
          <span className='font-semibold text-4xl'>Shop</span>
          <span className='font-semibold text-sm' >Home<i class="ri-arrow-right-wide-line"></i> Shop</span>
        </div>

      </div>

      <div class="flex items-center justify-between p-4  bg-[#F9F1E7] px-20 ">
        <div class="flex items-center space-x-4">
        <i class="ri-equalizer-line"></i>
          <button class="text-muted-foreground hover:text-primary">Filter</button>
        <img src="./icon.png" className='h-5'  alt="" />
        <img src="./list.png" className='h-5' alt="" />
          <span class="text-gray-400 text-2xl">|</span>
          <span class="text-muted">Showing 1-16 of 32 results</span>
        </div>

        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <span class="text-muted font-semibold">Show</span>
            <select class="ml-2 border border-border p-2 h-10 bg-input text-foreground">
              <option>16</option>
              <option>32</option>
              <option>64</option>
            </select>
          </div>

          <div class="flex items-center">
            <span class="text-muted font-semibold ">Sort by</span>
            <select class="ml-2 border border-border w-32 h-10 p-1 bg-input text-foreground focus:outline-none">
              <option value="default" selected>Default</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 grid-rows-4 gap-4 py-12 px-14 place-items-center w-full">
           
      {[...Array(16)].map((_, index) => (
        <Card key={index} />
      ))}
      </div>
    <div className="flex justify-center items-center gap-4 py-8">
      <button className="bg-[#F9F1E7]  text-gray-800 font-semibold py-2 px-4  rounded shadow">
        Prev
      </button>
      <button className="bg-[#F9F1E7]  text-gray-800 font-semibold py-2 px-4  rounded shadow">
        1
      </button>
      <button className="bg-[#F9F1E7]  text-gray-800 font-semibold py-2 px-4  rounded shadow">
        2
      </button>
      <button className="bg-[#F9F1E7]  text-gray-800 font-semibold py-2 px-4  rounded shadow">
        3
      </button>
      <button className="bg-[#F9F1E7]  text-gray-800 font-semibold py-2 px-4  rounded shadow">
        Next
      </button>
    </div>
 
     
     <Footer/>
    </div>
    

  )
}

export default Home

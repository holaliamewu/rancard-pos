import React from 'react'
import ProductComponents from '../components/ProductComponents'

export default function Home() {
  return (
    <div className='flex flex-col w-full min-h-screen pt-[74px] px-[24px] bg-gray-100 '>

    <span className='flex w-full  justify-between' >
      <h1 className='text-[40px] font-[700] ' >Product</h1>
      <span className='flex gap-[16px] ' > 
        <button className='flex  items-center justify-center text-[20px] text-[#0dd983] p-[24px] rounded-full border border-[#0dd983] h-[69px]  ' >Add Product</button>
        <button className='flex  items-center justify-center text-[20px] text-white p-[24px] rounded-full border border-[#0dd983] h-[69px] bg-[#0dd983]  ' >Add to cart</button>
      </span>
      </span>

      <section className=' mt-[40px] ' >
        <ProductComponents />
      </section>
  </div>  )
}

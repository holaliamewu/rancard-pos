import React from 'react'
import { Star } from 'lucide-react';

export default function Product() {
  return (
    <div className='w-full pt-[74px] px-[24px] bg-gray-100 '>
      <span className='flex w-full min-h-screen justify-between' >
        <h1 className='text-[40px] font-[700] ' >Product</h1>
        <span className='flex gap-[16px] ' > 
          <button className='flex  items-center justify-center text-[20px] text-[#0dd983] p-[24px] rounded-full border border-[#0dd983] h-[69px]  ' >Add Product</button>
          <button className='flex  items-center justify-center text-[20px] text-white p-[24px] rounded-full border border-[#0dd983] h-[69px] bg-[#0dd983]  ' >Add to cart</button>
        </span>
        <section className='' >
          <span className='' >
            <img src='https://images.app.goo.gl/zLrEoGEAwmnuJS5u5' alt='picture of product' />
            <span className='' >
              <h3 className='' >Fufu with soup</h3>
              <span className='' >
                <Star />
                <h5 className='' >4.9</h5>
              </span>
            </span>
          </span>
        </section>
      </span>
    </div>
  )
}

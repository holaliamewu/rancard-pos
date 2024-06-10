import React from 'react'
import { Star } from 'lucide-react';
import { productData } from '../assets/productData'

export default function ProductComponents() {

    const allProducts  = productData.map( product => (
        <span className=' flex flex-col box-border gap-[16px] w-[290px]   ' >
        <img className=' h-[217px] rounded-[8px] ' src={product.img} alt='picture of product' />
        <span className='flex items-center justify-between px-[16px] ' >
          <h3 className=' text-[22px] font-[400] ' >Fufu with soup</h3>
          <span className='flex mb-[4px]  ' >
            <Star size={24} fill='#ffa800' stroke='#ffa800' />
            <h5 className='text-[20px] font-[500] ' >4.9</h5>
          </span>
          </span>
          <h5 className='text-[18px] font-[700] px-[16px]  ' >GHS 35</h5>
      </span>
    ))
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[36px] place-items-center place-content-start' > { allProducts }</div>
  )
}

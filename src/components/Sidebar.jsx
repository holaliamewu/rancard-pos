import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='flex flex-col items-center  bg-white w-[358px] h-full '>
        <div className='flex flex-col gap-[16px] items-center bg-transparent w-[296px] ' >
            <NavLink to='/' className='flex w-full rounded-[8px] px-[24px] py-[16px] active:bg-[#0dd983] focus:bg-[#0dd983] focus:text-white text-[20px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' >Home</NavLink>
            <NavLink to='/products' className='flex w-full rounded-[8px] px-[24px] py-[16px] active:bg-[#0dd983] focus:bg-[#0dd983] focus:text-white text-[20px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' >Products</NavLink>
            <NavLink to='/order' className='flex w-full rounded-[8px] px-[24px] py-[16px] active:bg-[#0dd983] focus:bg-[#0dd983] focus:text-white text-[20px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' >Order</NavLink>
            <NavLink to='/report' className='flex w-full rounded-[8px] px-[24px] py-[16px] active:bg-[#0dd983] focus:bg-[#0dd983] focus:text-white text-[20px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' >Report</NavLink>
        </div>
    </div>
  )
}

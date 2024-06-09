import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, ShoppingBag, ShoppingCart, BarChartBig } from 'lucide-react'

export default function Sidebar() {

  return (
    <div className='flex flex-col items-center  bg-white w-[358px] h-full px-[5%] '>
        <div className='flex flex-col gap-[16px] items-center bg-transparent w-[296px]  bg-white' >
            <NavLink 
            to="/" 
          end 
          style={({ isActive }) => ({
            background: isActive ? '#0dd983' : '#fff'
          })} 
            className='flex w-full rounded-[8px] px-[24px] py-[16px] focus:text-white text-[20px] gap-[8px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' > <Home size={20} /> Home</NavLink>
            <NavLink 
            to='/products' 
            style={ (isActive) => { { background: isActive ? '#0dd983' : '#fff'}}} 
            className='flex w-full rounded-[8px] px-[24px] py-[16px] active:bg-[#0dd983] focus:bg-[#0dd983] focus:text-white text-[20px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' > <ShoppingBag size={20} /> Products</NavLink>
            <NavLink 
            to='/order' 
            style={ (isActive) => { { background: isActive ? '#0dd983' : '#fff'}}} 
            className='flex w-full rounded-[8px] px-[24px] py-[16px] active:bg-[#0dd983] focus:bg-[#0dd983] focus:text-white text-[20px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' > <ShoppingCart size={20} /> Order</NavLink>
            <NavLink 
            to='/report' 
            style={ (isActive) => { { background: isActive ? '#0dd983' : '#fff'}}} 
            className='flex w-full rounded-[8px] px-[24px] py-[16px] active:bg-[#0dd983] focus:bg-[#0dd983] focus:text-white text-[20px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' > <BarChartBig size={20} /> Report</NavLink>
        </div>
    </div>
  )
}

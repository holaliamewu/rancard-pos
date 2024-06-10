import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, ShoppingBag, ShoppingCart, BarChartBig } from 'lucide-react'

export default function Sidebar() {

  return (
    <div className='hidden lg:flex flex-col items-center  bg-white max-w-[300px] h-full px-[5%] sticky left-0 top-[104px] '>
        <div className='flex flex-col gap-[16px] items-center bg-transparent  w-[230px]  bg-white' >
            <NavLink 
            to="/" 
          end 
          style={({ isActive }) => ({
            background: isActive ? '#0dd983' : '#fff'
          })} 
            className='flex w-full rounded-[8px] px-[24px] py-[16px] focus:text-white text-[20px] gap-[8px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' > <Home size={20} /> Home</NavLink>
            <NavLink 
            to='/products' 
            end
            style={ (isActive) => { { background: isActive ? '#0dd983' : '#fff'}}} 
            className='flex w-full rounded-[8px] px-[24px] py-[16px] active:bg-[#0dd983] gap-[8px] focus:bg-[#0dd983] focus:text-white text-[20px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' > <ShoppingBag size={20} /> Products</NavLink>
            <NavLink 
            to='/order'
            end 
            style={ (isActive) => { { background: isActive ? '#0dd983' : '#fff'}}} 
            className='flex w-full rounded-[8px] px-[24px] py-[16px] active:bg-[#0dd983] focus:bg-[#0dd983] gap-[8px] focus:text-white text-[20px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' > <ShoppingCart size={20} /> Order</NavLink>
            <NavLink 
            to='/report' 
            end
            style={ (isActive) => { { background: isActive ? '#0dd983' : '#fff'}}} 
            className='flex w-full rounded-[8px] px-[24px] py-[16px] active:bg-[#0dd983] focus:bg-[#0dd983] gap-[8px] focus:text-white text-[20px] font-[600] leading-[24px] bg-transparent text-[#8f8f8f] ' > <BarChartBig size={20} /> Report</NavLink>
        </div>
    </div>
  )
}

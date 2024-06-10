import React from 'react'
import { ShoppingCart, Bell, UserRound, ChevronDown  } from 'lucide-react'

export default function Header() {
  return (
    <div className='flex justify-between items-center  shadow-[0px_1px_14px_6px_#00000005] h-[104px] sticky z-10 bg-white left-0 top-0 px-[5%] '>
        <span className='text-[40px] text-[#0dd983] font-[400] ' >Syst</span>
        <span className='hidden lg:inline-block' >
            <span className='flex items-center justify-center border border-[#cbcbcb] h-[64px] w-[495px] rounded-full px-[24px] py-[16px] ' >search</span>
        </span>
        <span className='flex items-center gap-[24px] ' >
        <span className='hidden lg:flex items-center justify-center gap-[16px] px-[8px] py-[16px] rounded-full bg-[#0dd983] text-white w-[88px] h-[42px] ' >
            <span className='' >
                <ShoppingCart /> 
            </span>
            <h4 className='' >0</h4>
        </span>
        <Bell /> 
        <span className='flex items-center justify-center gap-[16px] w-[88px] h-[48px] ' >
            <UserRound />  
            <ChevronDown />
        </span>
        </span>
    </div>
  )
}

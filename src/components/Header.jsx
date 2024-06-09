import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center shadow-[0px_1px_14px_6px_#00000005] h-[104px] '>
        <span className='text-[40px] text-[#0dd983] font-[400] ' >Syst</span>
        <span className='' >
            <span className='flex items-center justify-center border border-[#cbcbcb] h-[64px] w-[495px] rounded-full px-[24px] py-[16px] ' >search</span>
        </span>
        <span className='' >cart, bell, user and drop-down</span>
    </div>
  )
}

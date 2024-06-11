import { Trash2 } from 'lucide-react'
import React from 'react'

export default function Product() {
  return (
    <div className='bg-[#f5f5f5] w-full h-full pt-[74px] px-[24px] font-["UncutSemibold"] ' >
      <h1 className='mb-[40px] text-[40px] '>Product History</h1>  

      <section className='' >
        <span className='' >
          <th className='flex items-center justify-between w-[90%] mx-auto bg-[#efefef] px-[15px] py-[17px] ' >
            <h3 className=' w-1/3 max-w-[287px] text-left ' >Name</h3>
            <h3 className=' w-1/3 max-w-[275px] text-left ' >Variant</h3>
            <span className='flex items-center justify-between  w-1/3 ' >
              <h3 className='' >Qty</h3>
              <h3 className='' >Min. Price</h3>
              <h3 className=' w-[70px] ' >Action</h3>
            </span>
          </th>
          <span className='bg-white' >
          <tr className='flex items-center justify-between w-[90%]  px-[15px] py-[16px] border-b border-b-[#b5b5b5] mx-auto bg-white' >
            <td className='w-1/3 max-w-[275px] text-left ' >Fried rice</td>
            <td className='w-1/3 max-w-[275px] text-left' >Assorted/plain</td>
            <span className='flex items-center justify-between w-1/3' >
              <td className='' >50</td>
              <td className='' >45</td>
              <td className='flex items-center justify-center min-w-[70px] ' ><Trash2 size={18}  color='#f5222d' /></td>
            </span>
          </tr>
          <tr className='flex items-center justify-between w-[90%]  px-[15px] py-[16px] border-b border-b-[#b5b5b5] mx-auto bg-white' >
            <td className='w-1/3 max-w-[275px] text-left ' >Fried rice</td>
            <td className='w-1/3 max-w-[275px] text-left' >Assorted/plain</td>
            <span className='flex items-center justify-between w-1/3' >
              <td className='' >50</td>
              <td className='' >45</td>
              <td className='flex items-center justify-center min-w-[70px] ' ><Trash2 size={18}  color='#f5222d' /></td>
            </span>
          </tr>
          <tr className='flex items-center justify-between w-[90%]  px-[15px] py-[16px] border-b border-b-[#b5b5b5] mx-auto bg-white' >
            <td className='w-1/3 max-w-[275px] text-left ' >Fried rice</td>
            <td className='w-1/3 max-w-[275px] text-left' >Assorted/plain</td>
            <span className='flex items-center justify-between w-1/3' >
              <td className='' >50</td>
              <td className='' >45</td>
              <td className='flex items-center justify-center min-w-[70px] ' ><Trash2 size={18}  color='#f5222d' /></td>
            </span>
          </tr>
          <tr className='flex items-center justify-between w-[90%]  px-[15px] py-[16px] border-b border-b-[#b5b5b5] mx-auto bg-white' >
            <td className='w-1/3 max-w-[275px] text-left ' >Fried rice</td>
            <td className='w-1/3 max-w-[275px] text-left' >Assorted/plain</td>
            <span className='flex items-center justify-between w-1/3' >
              <td className='' >50</td>
              <td className='' >45</td>
              <td className='flex items-center justify-center min-w-[70px] ' ><Trash2 size={18}  color='#f5222d' /></td>
            </span>
          </tr>
          <tr className='flex items-center justify-between w-[90%]  px-[15px] py-[16px] border-b border-b-[#b5b5b5] mx-auto bg-white' >
            <td className='w-1/3 max-w-[275px] text-left ' >Fried rice</td>
            <td className='w-1/3 max-w-[275px] text-left' >Assorted/plain</td>
            <span className='flex items-center justify-between w-1/3' >
              <td className='' >50</td>
              <td className='' >45</td>
              <td className='flex items-center justify-center min-w-[70px] ' ><Trash2 size={18}  color='#f5222d' /></td>
            </span>
          </tr>
          <tr className='flex items-center justify-between w-[90%]  px-[15px] py-[16px] border-b border-b-[#b5b5b5] mx-auto bg-white' >
            <td className='w-1/3 max-w-[275px] text-left ' >Fried rice</td>
            <td className='w-1/3 max-w-[275px] text-left' >Assorted/plain</td>
            <span className='flex items-center justify-between w-1/3' >
              <td className='' >50</td>
              <td className='' >45</td>
              <td className='flex items-center justify-center min-w-[70px] ' ><Trash2 size={18}  color='#f5222d' /></td>
            </span>
          </tr>
          <tr className='flex items-center justify-between w-[90%]  px-[15px] py-[16px] border-b border-b-[#b5b5b5] mx-auto bg-white' >
            <td className='w-1/3 max-w-[275px] text-left ' >Fried rice</td>
            <td className='w-1/3 max-w-[275px] text-left' >Assorted/plain</td>
            <span className='flex items-center justify-between w-1/3' >
              <td className='' >50</td>
              <td className='' >45</td>
              <td className='flex items-center justify-center min-w-[70px] ' ><Trash2 size={18}  color='#f5222d' /></td>
            </span>
          </tr>
          <div className='main-container flex w-[220px] gap-[16px] items-center flex-nowrap  relative ml-auto my-0'>
      <div className='flex w-[140px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[1]'>
        <div className='flex w-[28px] pt-[4px] pr-[9px] pb-[4px] pl-[9px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#0cd883] rounded-[4px] relative z-[2]'>
          <span className="flex w-[10px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Uncut_Sans'] text-[18px] font-normal leading-[21.6px] text-[#fff] relative text-center whitespace-nowrap z-[3]">
            1
          </span>
        </div>
        <div className='flex w-[29px] pt-[4px] pr-[9px] pb-[4px] pl-[9px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#d4d4d4] rounded-[4px] relative z-[4]'>
          <span className="flex w-[11px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Uncut_Sans'] text-[18px] font-normal leading-[21.6px] text-[#fff] relative text-center whitespace-nowrap z-[5]">
            2
          </span>
        </div>
        <div className='flex w-[29px] pt-[4px] pr-[9px] pb-[4px] pl-[9px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#d4d4d4] rounded-[4px] relative z-[6]'>
          <span className="flex w-[11px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Uncut_Sans'] text-[18px] font-normal leading-[21.6px] text-[#fff] relative text-center whitespace-nowrap z-[7]">
            3
          </span>
        </div>
        <div className='flex w-[30px] pt-[4px] pr-[9px] pb-[4px] pl-[9px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#d4d4d4] rounded-[4px] relative z-[8]'>
          <span className="flex w-[12px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Uncut_Sans'] text-[18px] font-normal leading-[21.6px] text-[#fff] relative text-center whitespace-nowrap z-[9]">
            4
          </span>
        </div>
      </div>
      <div className='w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/eeec2aa4-55eb-4098-ae61-dfeb661fe476.png)] bg-cover bg-no-repeat relative overflow-hidden' />
      <div className='w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/b2d6118b-aa55-48a1-a9f7-10c333ffd23e.png)] bg-cover bg-no-repeat relative overflow-hidden z-10' />
    </div>

          </span>
        </span>

      </section>
  </div>
  )
}

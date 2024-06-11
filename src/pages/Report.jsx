import React from 'react'
import { Banknote, Landmark, UsersRound} from 'lucide-react'

export default function Report() {
  return (
    <div className=''>
      <span className='flex justify-between items-center' >
      <h1 className='text-[40px] ' >Report</h1>
        <div className=' flex w-[137px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] flex-col gap-[8px] items-start flex-nowrap rounded-[6px] border-solid border border-[#868686] relative overflow-hidden mx-auto my-0'>
          <div className='flex w-[105px] gap-[24px] items-center shrink-0 flex-nowrap relative'>
            <h5 className="h-[34px] shrink-0 basis-auto font-['Grotesk'] text-[24px] font-medium leading-[33.6px] text-[#5b5b5b] relative text-left whitespace-nowrap z-[1]">
              Filter
            </h5>
            <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[2]'>
              <div className='w-[14px] h-[8px] bg-[url(../assets/images/fbb1689c-4def-404a-88c6-70aa08f517e3.png)] bg-[length:100%_100%] bg-no-repeat relative z-[3] mt-[8px] mr-0 mb-0 ml-[5px]' />
            </div>
          </div>
        </div>
      </span>

        <div className=' flex w-[1026px] gap-[24px] items-start flex-nowrap relative mx-auto my-0'>
          <div className='flex pt-[29px] pr-[22px] pb-[29px] pl-[22px] flex-col gap-[8px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] relative overflow-hidden'>
            <div className='flex flex-col gap-[40px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]'>
              <div className='flex w-[134px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[2]'>
                <div className='w-[24px] h-[24px] shrink-0 relative z-[3]'>
                  <Landmark size={19} />
                </div>
                <span className="h-[22px] shrink-0 basis-auto font-['UncutSemibold'] text-[18px] font-medium leading-[21.6px] text-[#000] relative text-left whitespace-nowrap z-[5]">
                  Total Orders
                </span>
              </div>
              <span className="h-[29px] shrink-0 basis-auto font-['UncutSemibold'] text-[24px] font-semibold leading-[28.8px] text-[#000] relative text-left whitespace-nowrap z-[6]">
                50
              </span>
            </div>
          </div>
          <div className='flex pt-[29px] pr-[22px] pb-[29px] pl-[22px] flex-col gap-[8px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] relative overflow-hidden z-[7]'>
            <div className='flex flex-col gap-[40px] items-start self-stretch shrink-0 flex-nowrap relative z-[8]'>
              <div className='flex w-[169px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[9]'>
                <div className='w-[24px] h-[24px] shrink-0 relative z-10'>
                    <UsersRound size={20} />
                </div>
                <span className="h-[22px] shrink-0 basis-auto font-['UncutSemibold'] text-[18px] font-medium leading-[21.6px] text-[#000] relative text-left whitespace-nowrap z-[12]">
                  Total Customers
                </span>
              </div>
              <span className="h-[29px] shrink-0 basis-auto font-['UncutSemibold'] text-[24px] font-semibold leading-[28.8px] text-[#000] relative text-left whitespace-nowrap z-[13]">
                300
              </span>
            </div>
          </div>
          <div className='flex pt-[29px] pr-[22px] pb-[29px] pl-[22px] flex-col gap-[8px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] relative overflow-hidden z-[14]'>
            <div className='flex flex-col gap-[40px] items-start self-stretch shrink-0 flex-nowrap relative z-[15]'>
              <div className='flex w-[184px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[16]'>
                <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[17]'>
                  <Banknote />
                </div>
                <span className="h-[22px] shrink-0 basis-auto font-['UncutSemibold'] text-[18px] font-medium leading-[21.6px] text-[#000] relative text-left whitespace-nowrap z-[19]">
                  Successful Orders
                </span>
              </div>
              <span className="h-[29px] shrink-0 basis-auto font-['UncutSemibold'] text-[24px] font-semibold leading-[28.8px] text-[#000] relative text-left whitespace-nowrap z-20">
                50
              </span>
            </div>
          </div>
          <div className='flex pt-[29px] pr-[22px] pb-[29px] pl-[22px] flex-col gap-[8px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] relative overflow-hidden z-[21]'>
            <div className='flex flex-col gap-[40px] items-start self-stretch shrink-0 flex-nowrap relative z-[22]'>
              <div className='flex w-[76px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[23]'>
                <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[24]'>
                  <Banknote />
                </div>
                <span className="h-[22px] shrink-0 basis-auto font-['UncutSemibold'] text-[18px] font-medium leading-[21.6px] text-[#000] relative text-left whitespace-nowrap z-[26]">
                  Sales
                </span>
              </div>
              <span className="h-[29px] shrink-0 basis-auto font-['UncutSemibold'] text-[24px] font-semibold leading-[28.8px] text-[#000] relative text-left whitespace-nowrap z-[27]">
                GHS4,450
              </span>
            </div>
          </div>
        </div>  
    </div>
    )
}

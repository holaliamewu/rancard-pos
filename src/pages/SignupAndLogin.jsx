import React, { useState } from 'react'

export default function SignupAndLogin() {

  const [ login, setLogin ] = useState(true)
  return (
    <div className='flex  '>
      <section className='hidden lg:inline-block bg-red-300 lg:w-1/2 h-[100vh]' >photo here</section>
      <section className='flex flex-col gap-[80px] items-center justify-center w-full lg:w-1/2 h-[100vh] lg:pl-[100px]' >
        <h1 className='text-[35px] lg:mr-auto font-[600] leading-[42px]' >{ login ? 'Login' : 'Sign up'} to Syst</h1>
        <form className='flex flex-col  mx-auto lg:mr-auto gap-[40px] w-full max-w-[600px]  ' >
          { login ? 
            (<>
              <span className='flex flex-col' >
              <label htmlFor='email' className='text-[16px] text-[#707070] leading-[19.2px] font-[400] ' >Email</label>
              <input className='border-b border-b-[#cccccc] w-[90%] ' type='email' name='email' />
            </span>
            <span className='flex flex-col' >
              <label htmlFor='password' className='text-[16px] text-[#707070] leading-[19.2px] font-[400] ' >Password</label>
              <input className='border-b border-b-[#cccccc] w-[90%] ' type='password' name='password' />
            </span>
              </>
            ) :
            <>
              <span className='flex flex-col' >
              <label htmlFor='email' className='text-[16px] text-[#707070] leading-[19.2px] font-[400] ' >Email</label>
              <input className='border-b border-b-[#cccccc] w-[90%] ' type='text' name='email' />
            </span>
              <span className='flex flex-col' >
              <label htmlFor='firstName' className='text-[16px] text-[#707070] leading-[19.2px] font-[400] ' >First name</label>
              <input className='border-b border-b-[#cccccc] w-[90%] ' type='text' name='firstName' />
            </span>
              <span className='flex flex-col' >
              <label htmlFor='lastName' className='text-[16px] text-[#707070] leading-[19.2px] font-[400] ' >Last name</label>
              <input className='border-b border-b-[#cccccc] w-[90%] ' type='text' name='lastName' />
            </span>
            <span className='flex flex-col' >
              <label htmlFor='password' className='text-[16px] text-[#707070] leading-[19.2px] font-[400] ' >Password</label>
              <input className='border-b border-b-[#cccccc] w-[90%] ' type='password' name='password' />
            </span>
              </>
        }
          <span className='flex flex-col w-[90%] gap-[20px]' >
          { 
            login ?
            <span onClick={ () => { setLogin(false)}} className=' text-sm ml-auto underline cursor-pointer ' >sign up, rather ?</span>
            : <span onClick={ () => {setLogin(true)}} className=' text-sm ml-auto underline cursor-pointer ' >log in, rather ?</span>
          }
            <button type='button' className='flex items-center justify-center bg-[#0dd9834f] h-[60px] px-[16px] py-[24px] rounded-full text-[23px] text-[#16CB7F] font-[500] leading-[27.6px] ' >{ login ? 'Log in' : 'Sign up'}</button>
          </span>
        </form>
      </section>
    </div>
  )
}

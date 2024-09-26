import React from 'react'

const Onboard = () => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-neutral-900 flex justify-center items-center'>
        <div className='p-10 border border-neutral-800 bg-neutral-900 rounded w-[500px]'>

        <h1 className='text-xl font-bold'>One more thing...</h1>
        <p></p>
        <div className='mt-5 space-y-5'>
            <div className='flex flex-col'>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' className='bg-transparent bg-neutral-800 rounded p-2 mt-1 focus:border-2 border-main-green outline-none'/>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' className='bg-transparent bg-neutral-800 rounded p-2 mt-1 focus:border-2 border-main-green outline-none'/>
            </div>

            <button className='w-full bg-main-green text-dark-green py-3 rounded active:scale-90 duration-200'>
                Submit
            </button>

        </div>
        </div>
    </div>
  )
}

export default Onboard
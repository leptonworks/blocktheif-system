import React from 'react'



export default function manuLogin() {
  return (
    
    <section className="h-screen grid md:grid">

      {/* <div className="w-full h-full bg-black text-center md:h-screen"> */}
   
          
            
              
            <div className='bg-[#1E1E1E] flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900   p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN UP</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>First Name</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Sur Name</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>

                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Re-enter Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <button>Forgot Password</button>
                </div>
                <button className='w-full my-5 py-2 bg-[#2e47a5] shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>LOGIN</button>

            </form>
        </div>



              
            
          
        
     
    </section>



  )
}
import React from 'react'

function Component1() {
    return (
        <div className='bg-[#E5F9FF] flex flex-col justify-center items-center md:h-[100vh] pt-20 md:pt-0'>
            <div className='flex flex-col justify-center items-center gap-5 md:mt-40'>
                <div className='text-[12px] md:text-xl md:text-[1rem]'>WHO WE ARE</div>
                <div className='text-2xl md:text-[2rem] font-bold'>We’re  – an online <p className='block md:inline'>Canadian insurer</p></div>
                <div className=' pl-10 pr-10'>
                    {/* for mobile */}
                    <p className='md:px-[30%] text-center text-[14px] '>As Canada’s own online insurance solution company, we’re changing insurance for the better. By using data and analytics, we’re able to offer customized coverage at a competitive price in language you can understand, and all in as little as 5 minutes.</p>
                    {/* for desktop */}
         
                </div>
            </div>
            <div className='text-[1rem] bg-[#24BBE3] text-[#ffffff] p-3 pl-16 pr-16 rounded-full mt-10'>
                How we work
            </div>
            <div className='flex flex-col md:flex-row gap-5 text-black mt-20 m-5'>
                <div className='flex flex-col bg-white p-10 shadow-lg rounded-md md:w-[27vw] gap-5'>
                    <p className='font-semibold text-2xl'>Our purpose</p>
                    <p>For our clients to be confident
                        <p>and secure about their future.</p>
                    </p>
                    <div className='self-end mt-5'>
                        <img src="/about/img1.png" alt="img" className='h-20' />
                    </div>
                </div>
                <div className='flex flex-col bg-white p-10 shadow-lg rounded-md md:w-[27vw] gap-5'>
                    <p className='font-semibold text-2xl'>Our Ambition</p>
                    <p>To be the leading financial institution that
                        <p>best combines the human and digital</p>
                        <p>experience.</p>
                    </p>
                    <div className='self-end'>
                        <img src="/about/img2.png" alt="img" className='h-20' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component1

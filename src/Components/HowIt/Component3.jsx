import React from 'react'

function Component3() {
    return (
        <div className='bg-[#FCFCFC] pb-20 pt-10'>
            <div className='flex flex-col justify-center items-center text-center mt-20 gap-5'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[12px] md:text-[16px]'>HOW IT WORKS</p>
                    <div className='text-xl md:text-4xl font-bold'>How  saves your time and money</div>
                </div>
                <div className='font-base text-sm md:text-[20px] p-1 md:p-3'>
                    <p className='inline md:block'> It’s simple! Just answer a few questions and </p>
                    <p className='inline md:block'>customize your insurance coverage. Then, buy directly online.</p>
                </div>
            </div>
            <div className='mt-28 md:pr-56 md:pl-56'>
                <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                    <div className='md:w-1/2 p-5 md:p-0'>
                        <p className='text-2xl md:text-3xl font-bold mb-3'>Compare</p>
                        <p>We do the insurance shopping. Through extensive research, we pick only quality insurance companies to provide quotes. Based on an individual’s needs, we review the market and show multiple quotes. This enables the client to compare and choose the right coverage at the right price.</p>
                        <br />
                        <p>Our main goal is to provide consumers with as much information as possible, whether online or by speaking with one of our knowledgeable insurance brokers.</p>
                    </div>
                    <div className='self-start pl-4 md:pl-0'>
                        <img src="/HowIt/img4.png" alt='img' className='h-40 block md:hidden' />
                        <img src="/HowIt/img1.png" alt="img" className='h-96 hidden md:block' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center mt-10'>
                    <div className='self-start pl-4 md:pl-0'>
                        <img src="/HowIt/img2.png" alt="img" className='h-40 md:h-96' />
                    </div>
                    <div className='md:w-1/2 p-5'>
                        <p className='text-2xl md:text-3xl font-bold mb-3'>Purchase</p>
                        <p>Our process is easy and our customer-friendly system walks the client through the process from start to finish.</p>
                        <ol className='list-decimal pl-5 pr-5'>
                            <li>Request a quote online or by phone</li>
                            <li>Choose the right quote from our participating insurance carriers</li>
                            <li>Fill out the online application and print out the policy confirmation</li>
                        </ol>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-10'>
                    <div className='md:w-1/2 p-5'>
                        <p className='text-2xl md:text-3xl font-bold mb-3'>Manage</p>
                        <p>Customer service is our top priority. The convenience of insuring online doesn't stop with the purchasing process. With B-Insure, clients can:</p>
                        <ul className='list-disc pl-5 pr-5'>
                            <li>View, update and change policies online anytime</li>
                            <li>Contact our experienced broker support staff via email or phone</li>
                            <li>Report a claim online* or call a toll-free number for each individual insurer</li>
                        </ul>
                        <p>*Claims reporting is not available online for all product lines.</p>
                    </div>
                    <div className='self-start pl-4 md:pl-0'>
                        <img src="/HowIt/img3.png" alt="img" className='h-40 md:h-96' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component3

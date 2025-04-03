import React from 'react'

function Component2() {
  return (
    <div className="text-lg flex flex-col justify-center items-center gap-5 md:pt-20 md:pb-20 pt-10">
      <div className="text-2xl md:text-4xl font-bold md:font-semibold text-center">
        Frequently Asked <p className='block md:inline'>Questions</p>
      </div>
      <p className='hidden md:block text-center'>
        Learning about insurance and claims doesn’t have to be complicated. Read <p>on for some simple answers to the questions we hear most.</p>
      </p>
      <p className='block md:hidden text-center px-10 py-0 md:p-5 text-[14px]'>When you need help with insurance and claims, it’s at the ready 24/7.</p>
      <p className='block md:hidden font-semibold'>I have a different question <img src="/arrow/arrow.png" alt="arrow" className="inline pl-2"/></p>
    </div>
  )
}

export default Component2

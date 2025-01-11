// import React from 'react'
import Info from '@/Components/Auto/Info'
import Form from '@/Components/LifeInsurance/Form'
import Component1 from '@/Components/Auto/Component1'
import Component2 from '@/Components/Auto/Component2'
import Component3 from '@/Components/Auto/Component3'
import Component4 from '@/Components/Auto/Component4'
import Coverage from '@/Components/Auto/Coverage'
import Customer from '@/Components/LifeInsurance/Customer'
import Component5 from '@/Components/Auto/Component5'
import Component6 from '@/Components/Auto/Component6'
import Component7 from '@/Components/Auto/Component7'
import Component9 from '@/Components/LifeInsurance/component9'
import Deliver from '@/Components/Auto/Deliver'

function Auto() {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center m-auto md:pl-56 md:pr-52 pt-24 mb-40'>
                <div>
                    <Info />
                </div>
                <div>
                    <Form />
                </div>
            </div>
            <div>
                <Component1 />
            </div>
            <div>
                <Component2 />
            </div>
            <div>
                <Component3 />
            </div>
            <div>
                <Component4 />
            </div>
            <div className=' md:hidden'>
                <Deliver />
            </div>
            <div className=' md:hidden'>
                <Component5 />
            </div>
            <div className=' md:hidden'>
                <Component6 />
            </div>
            <div>
                <Coverage />
            </div>

            <div>
                <Customer />
            </div>
            <div className='hidden md:block'>
                <Component5 />
            </div>
            <div className='hidden md:block'>
                <Component6 />
            </div>
            <div>
                <Component7 />
            </div>
            <div>
                <Component9 />
            </div>
        </div>
    )
}

export default Auto

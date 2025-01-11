// import React from 'react'
import Info from '@/Components/AutoMobileInsurance/Info'
import Form from '@/Components/LifeInsurance/Form'
import Component1 from '@/Components/AutoMobileInsurance/Component1'
import Component2 from '@/Components/AutoMobileInsurance/Component2'
import Component3 from '@/Components/AutoMobileInsurance/Component3'
import Component4 from '@/Components/AutoMobileInsurance/Component4'
import Customer from '@/Components/LifeInsurance/Customer'
import Component5 from '@/Components/AutoMobileInsurance/Component5'
import Component6 from '@/Components/AutoMobileInsurance/Component6'
import Component9 from '@/Components/LifeInsurance/component9'
import Coverage from '@/Components/AutoMobileInsurance/Coverages'

function AutoMobileInsurance() {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center m-auto md:pl-56 md:pr-52 pt-24 mb-40'>
                <div>
                    <Info/>
                </div>
                <div>
                    <Form/>
                </div>
            </div>
            <div>
                <Component1/>
            </div>
            <div className='bg-white'>
                <Component2/>
            </div>
            <div>
                <Component3/>
            </div>
            <div>
                <Component4/>
            </div>
            <div>
                <Coverage/>
            </div>
            <div>
                <Customer/>
            </div>
            <div>
                <Component5/>
            </div>
            <div className='bg-white'>
                <Component6/>
            </div>
            <div>
                <Component9/>
            </div>
        </div>
    )
}

export default AutoMobileInsurance

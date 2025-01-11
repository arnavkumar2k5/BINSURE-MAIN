// import React from 'react'
import Info from '@/Components/RestaurantInsurance/Info'
import Form from '@/Components/LifeInsurance/Form'
import Component1 from '@/Components/RestaurantInsurance/Component1'
import Component2 from '@/Components/RestaurantInsurance/Component2'
import Component3 from '@/Components/RestaurantInsurance/Component3'
import Component4 from '@/Components/RestaurantInsurance/Component4'
import Coverage from '@/Components/RestaurantInsurance/Coverage'
import Customer from '@/Components/LifeInsurance/Customer'
import Component5 from '@/Components/RestaurantInsurance/Component5'
import Component9 from '@/Components/LifeInsurance/component9'

function RestaurantInsurance() {
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
            <div>
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
            <div className='bg-white'>
                <Customer/>
            </div>
            <div className='bg-white'>
                <Component5/>
            </div>
            <div>
                <Component9/>
            </div>
        </div>
    )
}

export default RestaurantInsurance

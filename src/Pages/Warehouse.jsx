// import React from 'react'
import Info from '@/Components/Warehouse.jsx/Info'
import Form from '@/Components/LifeInsurance/Form'
import Component1 from '@/Components/Warehouse.jsx/Component1'
import Component2 from '@/Components/Warehouse.jsx/Component2'
import Component3 from '@/Components/Warehouse.jsx/Component3'
import Component4 from '@/Components/Warehouse.jsx/Component4'
import Component5 from '@/Components/Warehouse.jsx/Component5'
import Coverage from '@/Components/Warehouse.jsx/Coverage'
import Customer from '@/Components/LifeInsurance/Customer'
import Component6 from '@/Components/Warehouse.jsx/Component6'
import Component9 from '@/Components/LifeInsurance/component9'

function Warehouse() {
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
                <div className='bg-white'>
                    <Component3/>
                </div>
                <div className='bg-white'>
                    <Component4/>
                </div>
                <div className='bg-white'>
                    <Component5/>
                </div>
                <div>
                    <Coverage/>
                </div>
                <div>
                    <Customer/>
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

export default Warehouse

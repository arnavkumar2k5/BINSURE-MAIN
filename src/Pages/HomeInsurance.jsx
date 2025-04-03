// import React from 'react'
import Info from '@/Components/HomeInsurance/Info'
import Form from '@/Components/LifeInsurance/Form'
import Component1 from '@/Components/HomeInsurance/Component1'
import Component2 from '@/Components/HomeInsurance/Component2'
// import Component3 from '@/Components/HomeInsurance/Component4'
import Component4 from '@/Components/HomeInsurance/Component4'
import Component5 from '@/Components/HomeInsurance/Component5'
import Customer from '@/Components/LifeInsurance/Customer'
import Component6 from '@/Components/HomeInsurance/Component6'
import Component9 from '@/Components/LifeInsurance/component9'
import Coverage from '@/Components/HomeInsurance/Coverage'

function HomeInsurance() {
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
                <Component4 />
            </div>
            <div>
                <Component5 />
            </div>
            {/* <div>
                <Coverage />
            </div> */}
            {/* <div>
                <Component3 />
            </div> */}



            <div>
                <Customer />
            </div>
            <div>
                <Component6 />
            </div>
            <div>
                <Component9 />
            </div>
        </div>
    )
}

export default HomeInsurance

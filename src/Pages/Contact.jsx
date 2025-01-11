import React from 'react'
import Component1 from '@/Components/Contact/Component1'
import Component2 from '@/Components/Contact/Component2'
import Component3 from '@/Components/Contact/Component3'
import Coverage from '@/Components/Contact/Coverage'

function Contact() {
    return (
       <div>
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
            <Coverage/>
        </div>
       </div> 
    )
}

export default Contact

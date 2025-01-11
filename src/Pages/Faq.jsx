import React from 'react'
import Component1 from '@/Components/Faq/Component1'
import Component2 from '@/Components/Faq/Component2'
import Coverage from '@/Components/Faq/Coverage'

function Faq() {
    return (
        <div>
            <div>
                <Component2/>
            </div>
            <div>
                <Component1/>
            </div>
            <div>
                <Coverage/>
            </div>
        </div>
    )
}

export default Faq

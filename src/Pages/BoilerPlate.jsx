// import React from 'react';
import Component9 from '@/Components/LifeInsurance/component9';

function BoilerPlate() {
    return (
        <div>
            <h1 className="text-center mt-10 p-2 text-xl md:text-3xl font-bold mb-5 md:mb-20">
                FAQ / PRIVACY POLICY / TERMS OF USE SAMPLE TEMPLATE
            </h1>
            <div className='bg-white'>
        <div className="max-w-5xl mx-auto p-2 md:p-8 md:pb-[40rem] pt-5">
            <div className='w-full text-[0.01rem] bg-gray-400 text-gray-400 mb-10'>""</div>

            <div className="mb-6 p-2">
                <h2 className="font-bold md:text-3xl mb-2">1. Main title</h2>
                <p className="mb-2">
                    We understand every individual and business is unique in its own ways and needs.
                </p>
                <p>We’ve made service points more granular.</p>
            </div>

            <div className="mb-6 p-2">
                <h2 className="font-bold md:text-2xl mb-2">2. Sub title</h2>
                <p className="mb-2">
                    We understand every individual and business is unique in its own ways and needs.
                </p>
                <p>We’ve made service points more granular.</p>
            </div>

            <div className="mb-6 p-2">
                <h2 className="font-bold md:text-xl mb-2">3. Paragraph title</h2>
                <p>
                    We understand every individual and business is unique in its own ways and needs.
                </p>
                <p>We’ve made service points more granular.</p>
            </div>

            <div className="mb-6 p-2">
                <ol className="list-decimal pl-6">
                    <li>Bullet Points</li>
                    <li>We understand every individual and business is unique in its own ways and needs.</li>
                    <li>We’ve made service points more granular.</li>
                    <li>We understand every individual and business is unique in its own ways and needs.</li>
                    <li>We’ve made service points more granular.</li>
                    <li>We understand every individual and business is unique in its own ways and needs.</li>
                    <li>We’ve made service points more granular.</li>
                    <li>We understand every individual and business is unique in its own ways and needs.</li>
                    <li>We’ve made service points more granular.</li>
                </ol>
            </div>

            <div className='hidden md:block'>
                <p>
                    Link text –{' '}
                    <a href="https://www.binsure.ca" className="text-cyan-700 font-semibold">
                        www.binsure.ca
                    </a>
                </p>
            </div>
            </div>
        </div>
            <div>
                <Component9/>
            </div>
        </div>
    );
}

export default BoilerPlate;

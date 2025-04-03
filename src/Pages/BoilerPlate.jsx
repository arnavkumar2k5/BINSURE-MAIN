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
            <div className="bg-blue-500 flex flex-col md:flex-row p-10 justify-center text-white text-sm gap-10 md:gap-40">
      <div className="text-start">
        <p className="text-lg md:text-2xl font-semibold pb-5 text-start">Changing way of insurance for good</p>
        <p className="text-start">
          Join the team that is making health insurance simple, transparent, and
          human.
        </p>
      </div>
      <div className="flex flex-row gap-5 text-xs md:text-lg text-center font-semibold">
        <div className="p-3 md:pt-5 md:pl-10 md:pr-10 w-1/2 md:w-auto rounded-xl bg-white text-blue-600">
          <p className="hidden md:block">
          Become a partner
          </p>
          <p className="block md:hidden">
            Become a Partner
          </p>
        </div>
        <div className="p-3 md:pt-5 md:pl-5 md:pr-5 rounded-xl w-1/2 md:w-auto border-2 border-white text-white">
          <p className="hidden md:block">
          Get a free quote
          </p>
          <p className="block md:hidden">
          Get a free quote
          </p>
        </div>
      </div>
    </div>
            </div>
        </div>
    );
}

export default BoilerPlate;

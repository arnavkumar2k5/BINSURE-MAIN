import React from 'react'

function Component3() {
  return (
    <div className="flex flex-col justify-center items-center py-20 mx-auto  md:gap-10">
      <div className="text-lg text-center p-2">
        <div className="text-lg md:text-4xl font-bold">Warehouse Insurance Coverage</div>
        <p className="text-sm md:text-lg text-[#073141] font-medium mx-auto mt-5">
          Warehouses insurance coverage protects businesses against
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm md:text-base gap-10 justify-center p-5 md:p-20 text-[#3D3D3D] md:pt-10">
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
          <div className="text-lg md:text-xl font-bold md:mb-5">
            Property Damage
          </div>
          <p>
            Provide Liability Insurance to new and existing restaurants, delis and cafés.
          </p>
          <div className="flex justify-end md:mt-[5rem]">
            <img src="/Warehouse/img3.png" alt="farmer" className="h-16" />
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
          <div className="text-lg md:text-xl font-bold md:mb-5">
            Employee Injuries
          </div>
          <p>
            If an employee is injured while working in a warehouse, the warehouse can be sued for negligence.
          </p>
          <div className="flex justify-end my-10 md:mt-[3.5rem]">
            <img src="/Warehouse/img4.png" alt="farmer" className="h-16" />
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
          <div className="text-lg md:text-xl font-bold mb-5">Product Liability</div>
          <p>
            If a product stored in a warehouse is found to be defective and causes harm to consumer, the warehouse can be held liable.
          </p>
          <div className="flex justify-end my-10 md:mt-[1.95rem]">
            <img src="/Warehouse/img5.png" alt="farmer" className="h-16" />
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
          <div className="text-lg md:text-xl font-semibold mb-5">Breach of Contract</div>
          <p>
            If a warehouse fails to fulfill its obligations under a contract, it can be sued for breach of contract.
          </p>
          <div className="flex justify-end my-10 md:mt-[3.45rem]">
            <img src="/Warehouse/img6.png" alt="farmer" className="h-16" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component3

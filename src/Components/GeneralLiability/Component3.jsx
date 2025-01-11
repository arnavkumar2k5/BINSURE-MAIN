import React from 'react'

function Component3() {
    return (
        <div className="bg-white flex flex-col justify-center items-center py-20 mx-auto gap-20">
              <div className="text-lg text-center p-2">
                <div className="text-xl md:text-4xl font-semibold">General Liability insurance coverages </div>
                <p className="text-lg max-w-[47rem] mx-auto mt-5">
                Liability insurance provides peace of mind in the event of potentially costly liability {" "}
                <p className='inline md:block'>situations for all types of businesses and professions.</p>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm md:text-lg gap-10 justify-start p-5 md:px-40">
                <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
                  <div className="text-lg md:text-2xl font-bold md:mb-5">
                  Bodily Injury
                  </div>
                  <p>
                  CGL policies can protect your business from liability if you are found responsible for injuries to a third party, including bodily injury and property damage.
                  </p>
                  <div className="flex justify-end md:mt-[3.5rem]">
                    <img src="/Warehouse/img4.png" alt="farmer" className="h-20" />
                  </div>
                </div>
                <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
                  <div className="text-lg font-bold md:mb-5">
                  Property Damage
                  </div>
                  <p>
                  If your business causes damage to a third-party’s property I.e., client’s home, office or at your business premises, this type of CGL coverage will cover lawyer fees and other expenses if you’re sued.
                  </p>
                  <div className="flex justify-end md:mt-[1.8rem]">
                    <img src="/Warehouse/img3.png" alt="farmer" className="h-20" />
                  </div>
                </div>
                <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
                  <div className="text-lg font-bold mb-5">Product Liability</div>
                  <p>
                  Product liability covers you for any injuries or property damage caused by a product you sell or service you provide. 
                  </p>
                  <div className="flex justify-end md:mt-[5.5rem]">
                    <img src="/Warehouse/img5.png" alt="farmer" className="h-20" />
                  </div>
                </div>
                <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
                  <div className="text-lg font-bold mb-5">Personal and Advertising Injury Liability</div>
                  <p>
                  Personal and advertising liability protects you from financial loss from non-physical personal injury and covers third-party lawsuits.
                  </p>
                  <div className="flex justify-end md:mt-[4.4rem]">
                    <img src="/General/img5.png" alt="farmer" className="h-20" />
                  </div>
                </div>
                <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
                  <div className="text-lg font-bold mb-5">Tenant’s Legal Liability</div>
                  <p>
                  Tenant insurance, also called tenant’s legal liability, covers you from the risk of operating on leased premises. Your CGL insurance can cover you for damage to rental spaces caused by you or your employees. 
                  </p>
                  <div className="flex justify-end md:mt-[1rem]">
                    <img src="/General/img6.png" alt="farmer" className="h-20" />
                  </div>
                </div>
              </div>
            </div>
      );
    }

export default Component3

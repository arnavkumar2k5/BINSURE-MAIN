import React from "react";

function Deliver() {
    return (
        <div className="bg-white">
            <div className="m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10 md:hidden mt-10">
                <div className="flex flex-col justify-center items-center mx-auto gap-10 pb-10">
                    <div className="text-lg text-center">
                        <div className="text-2xl md:text-4xl font-bold">How we Deliver</div>
                        <p className="text-sm max-w-[47rem] mx-auto mt-2">
                            Ready to compare quotes and save?
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm md:text-lg gap-10 justify-center">
                        <div className="border-2 hover:bg-[#D1F5FF] border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
                            <div className="text-xl md:text-2xl font-bold mb-5">
                                Tell us about your vehicle                                   </div>
                            <p>
                                Answer a few basic questions about your driving & car insurance history.                            </p>
                            <div className="flex justify-end mt-[30px] mb-[70px] md:mt-[3rem]">
                                <img src="/public/deliveryImg1.png" alt="farmer" className="h-16" />
                            </div>
                        </div>
                        <div className="border-2 border-gray-200 hover:bg-[#D1F5FF] rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
                            <div className="text-xl md:text-2xl font-bold mb-5">
                                Compare your quotes
                            </div>
                            <p>
                                See quotes from insurance companies side by side.
                            </p>
                            <div className="flex justify-end mt-[30px] mb-[70px] md:mt-[3rem]">
                                <img src="/public/deliveryImg2.png" alt="farmer" className="h-16" />
                            </div>
                        </div>
                        <div className="border-2 border-gray-200 rounded-sm p-5 hover:bg-[#D1F5FF] text-start flex flex-col w-full sm:w-1/4">
                            <div className="text-xl md:text-2xl font-bold mb-5">
                                Choose the right coverage
                            </div>
                            <p>
                                Find the right protection for your vehicle.                            </p>
                            <div className="flex justify-end mt-[30px] mb-[70px] md:mt-[3rem]">
                                <img src="/public/deliveryImg3.png" alt="farmer" className="h-16" />
                            </div>
                        </div>
                        <div className="border-2 border-gray-200 rounded-sm p-5 hover:bg-[#D1F5FF] text-start flex flex-col w-full sm:w-1/4">
                            <div className="text-xl md:text-2xl font-bold mb-5">
                                Get covered
                            </div>
                            <p>
                                Connect with the provider and secure your rate.                            </p>
                            <div className="flex justify-end mt-[30px] mb-[70px] md:mt-[3rem]">
                                <img src="/public/deliveryImg4.png" alt="farmer" className="h-16" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deliver;

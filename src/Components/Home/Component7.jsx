import React from 'react';

function Component7() {
  return (
    <div className="flex flex-col md:flex-row justify-center pt-20 px-8 gap-20 pd-10 md:pb-20 bg-white border-t border-gray-300">
      <div className="max-w-sm">
        <img src="/Home/comma.png" alt="Quote Icon" className='h-20 hidden md:block' />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">What People Say</h2>
        <p className="text-gray-600 mt-2">
          Our customers are our top priority. <p>Let’s hear what they have to say.</p>
        </p>

        <div className="flex space-x-4 mt-6">
          <button className="w-10 h-10 flex items-center justify-center border rounded-full text-blue-600 border-blue-600">
            ←
          </button>
          <button className="w-10 h-10 flex items-center justify-center border rounded-full text-blue-600 border-blue-600">
            →
          </button>
        </div>
      </div>

      <div className="md:w-[48%] bg-white shadow-xl rounded-2xl p-8 md:p-10 pb-10">
        <p className="text-gray-800 text-sm md:text-lg">
          I highly recommend them. They were attentive to our needs and worked tirelessly to find us the perfect policy. We couldn't be happier with our family protection plan!
        </p>

        <div className="bg-gray-300 h-px mt-20 md:mt-28 mb-5"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center">
            <img src="/Home/profile.png" alt="Profile" className="md:w-12 h-12 rounded-full" />
            <div className="ml-4">
              <p className="text-gray-800 font-semibold text-sm">Barbara D. Smith</p>
            </div>
          </div>
          <div>
            <img src="/Home/star.png" alt="Rating" className="w-24 mt-3 md:mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component7;

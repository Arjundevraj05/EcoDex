import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

const Status1 = () => {
  return (
    <div className='mb-6 mt-10 flex justify-center flex-row gap-3 flex-wrap'> {/* Reduced gap */}
      {/* Biodegradable Section */}
      <div className='cursor-pointer flex flex-row items-center bg-gradient-to-b from-green-300 to-green-500 rounded-lg p-[2px] hover:scale-105 transition-transform duration-200 w-72 h-36'> {/* Reduced width */}
        <div className='flex items-center bg-gray-50 rounded-lg p-5 w-full h-full'>
          <div className='rounded-full p-3 bg-gradient-to-b from-green-100 to-green-200 flex-shrink-0'>
            <Image src='/icons/biodegradable.svg' width={50} height={50} alt='Biodegradable Icon' />
          </div>
          <div className='ml-4 flex-grow'>
            <p className='font-poppins font-semibold text-xl bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text'>
              Biodegradable
            </p>
            <p className='font-poppins font-bold text-3xl mt-2 bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text'>
              <CountUp end={567} duration={2.5} />
            </p>
          </div>
        </div>
      </div>

      {/* Non-Biodegradable Section */}
      <div className='cursor-pointer flex flex-row items-center bg-gradient-to-b from-green-300 to-green-500 rounded-lg p-[2px] hover:scale-105 transition-transform duration-200 w-72 h-36'> {/* Reduced width */}
        <div className='flex items-center bg-gray-50 rounded-lg p-5 w-full h-full'>
          <div className='rounded-full p-3 bg-gradient-to-b from-green-100 to-green-200 flex-shrink-0'>
            <Image src='/icons/nonbiodegradable.svg' width={50} height={50} alt='Non-Biodegradable Icon' />
          </div>
          <div className='ml-4 flex-grow'>
            <p className='font-poppins font-semibold text-xl bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text'>
              Non-Biodegradable
            </p>
            <p className='font-poppins font-bold text-3xl mt-2 bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text'>
              <CountUp end={1023} duration={2.5} />
            </p>
          </div>
        </div>
      </div>

      {/* Carbon Emissions Released Section */}
      <div className='cursor-pointer flex flex-row items-center bg-gradient-to-b from-green-300 to-green-500 rounded-lg p-[2px] hover:scale-105 transition-transform duration-200 w-72 h-36'> {/* Reduced width */}
        <div className='flex items-center bg-gray-50 rounded-lg p-5 w-full h-full'>
          <div className='rounded-full p-3 bg-gradient-to-b from-green-100 to-green-200 flex-shrink-0'>
            <Image src='/icons/carbon1.svg' width={50} height={50} alt='Carbon Emissions Icon' />
          </div>
          <div className='ml-4 flex-grow'>
            <p className='font-poppins font-semibold text-xl bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text'>
              Carbon Emissions Released
            </p>
            <p className='font-poppins font-bold text-3xl bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text'>
              <CountUp end={456} duration={2.5} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status1;

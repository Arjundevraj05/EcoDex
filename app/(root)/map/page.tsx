import MapComponent from '@/components/MapComponent';
import React from 'react';

const Page = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-green-50  font-sans p-6'>
      {/* Card Container */}
      <div className="ml-40 w-full max-w-4xl bg-white shadow-xl rounded-lg p-6"> 
        {/* Card with shadow and rounded corners */}
        
        {/* Heading Section */}
        <div className="mb-7 text-center"> 
          <h2 className="text-4xl font-bold text-gray-800 tracking-wide">
            <span className="font-stacker font-bold">RAG-ED Location</span>
          </h2>
        </div>
        
        {/* Map Section */}
        <div className="h-[70vh] overflow-hidden"> 
          {/* Set height for the map section */}
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Page;

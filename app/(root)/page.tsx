"use client"; // This ensures that the page is treated as a Client Component

import React from "react";
import HeaderBox from "@/components/HeaderBox";
import Status1 from "@/components/Status1";
import dynamic from "next/dynamic";

// Dynamically import the MapComponent with SSR disabled
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
});

const Page = () => {
  const user = { name: "John Doe" };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 font-sans">
      <HeaderBox user={user} />
      <Status1 />

      {/* Refined Heading for Ragbot Location */}
      <div className="mt-8">
        <h2 className="text-3xl font-stacker font-bold text-gray-800 tracking-wide text-center">
          <span className="text-green-800">
            RAG-ED Location
          </span>
        </h2>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg mt-6 border-t-4 border-green-500">
        <MapComponent />
      </div>
    </div>
  );
};

export default Page;

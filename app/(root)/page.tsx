"use client"; // This ensures that the page is treated as a Client Component

import React from "react";
import {Leaf}  from 'lucide-react'
import HeaderBox from "@/components/HeaderBox";
import Status1 from "@/components/Status1";
import dynamic from "next/dynamic";

function AnimatedGlobe() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-pulse"></div>
      <div className="absolute inset-2 rounded-full bg-green-400 opacity-40 animate-ping"></div>
      <div className="absolute inset-4 rounded-full bg-green-300 opacity-60 animate-spin"></div>
      <div className="absolute inset-6 rounded-full bg-green-200 opacity-80 animate-bounce"></div>
      <Leaf className="absolute inset-0 m-auto h-16 w-16 text-green-600 animate-pulse" />
    </div>
  )
}

const Page = () => {
  const user = { name: "John Doe" };

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-50 font-sans">
      <HeaderBox user={user} />

      {/* Refined Heading for Ragbot Location */}
      <div className="ml-40 mt-5 text-center mb-20">
        <AnimatedGlobe />
        <h1 className="text-6xl font-bold mb-6 text-gray-800 tracking-tight">
        Revolutionize <br/><span className="text-green-600">Waste Management</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
        With Eco-Dex and RAG-ED, experience a smarter, greener approach to waste collection!
        </p>
        <div className="mt-8">
        <Status1 />
      </div>
      </div>

    </div>
  );
};

export default Page;

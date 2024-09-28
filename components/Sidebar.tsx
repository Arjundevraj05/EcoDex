'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  HomeIcon,
  DocumentReportIcon,
  MapIcon,
  CameraIcon,
  MenuAlt2Icon,
  XIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false); // State to track page load

  useEffect(() => {
    // Set loaded to true after component mounts to trigger transition
    setLoaded(true);
  }, []);

  const navigation = [
    { name: 'Home', icon: HomeIcon, href: '/' },
    { name: 'Reports', icon: DocumentReportIcon, href: '/reports' },
    { name: 'Map', icon: MapIcon, href: '/map' },
    { name: 'Live Camera Feed', icon: CameraIcon, href: '/live-camera' },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between w-full bg-gray-50 text-black px-4 py-3 shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Sidebar"
          className="focus:outline-none"
        >
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuAlt2Icon className="h-6 w-6" />
          )}
        </button>
        <div className="flex items-center">
          <Image src="/icons/logo_main.svg" width={34} height={34} alt="logo" />
          <span className="ml-2 font-bold font-stacker text-xl">EcoDexHub</span>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform transition-transform duration-500 ease-in-out ${
          loaded ? 'translate-x-0' : '-translate-x-full'
        } ${isOpen ? 'md:translate-x-0' : '-translate-x-full'} md:translate-x-0 bg-gray-50 text-black w-52 z-50 border-r-2 shadow-lg`}
      >
        <div className="flex flex-col h-full p-6 border-b-1">
          {/* Logo Section */}
          <div className="flex items-center mb-8 border-b border-gray-300 pb-4">
            <Image src="/icons/logo_main.svg" width={34} height={34} alt="logo" />
            <span className="ml-2 text-lg font-stacker font-bold">Eco-Dex</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-3 text-medium font-medium text-gray-700 transition-all duration-200 rounded-md hover:bg-gray-100 hover:text-green-600"
                  >
                    <item.icon className="h-5 w-5 text-gray-500" />
                    <span className="ml-4">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Profile */}
          <div className="mt-8 flex items-center border-t border-grey-300 pt-4 space-x-4">
            <Image
              src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
              width={40}
              height={40}
              className="rounded-full"
              alt="User Avatar"
            />
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <a href="#" className="text-xs text-gray-500 hover:underline">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Sidebar;

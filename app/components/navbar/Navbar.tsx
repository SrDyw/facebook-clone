import Link from "next/link";
import React from "react";

const Navbar: React.FC = ()=>{
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Link href="/" className="text-white">Falsebook</Link>
                </div>
              </div>
              <div className="hidden md:block">
                  <div className="ml-4 flex items-center space-x-4">
                    <Link href={"/"} className="text-white hover:bg-white hover:text-black rounded-lg p-2">Home</Link>
                    <Link href={"/"} className="text-white hover:bg-white hover:text-black rounded-lg p-2">Persons</Link>
                    <Link href={"/"} className="text-white hover:bg-white hover:text-black rounded-lg p-2">Movies</Link>
                    <Link href={"/"} className="text-white hover:bg-white hover:text-black rounded-lg p-2">Groups</Link>
                    <Link href={"/"} className="text-white hover:bg-white hover:text-black rounded-lg p-2">Notifications</Link>

                    

                  </div>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

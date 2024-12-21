import Link from "next/link";
import React from "react";
import { GamesIcons, GroupIcons, HeadMomoIcons, HomeIcon, MessageIcons, MoaiIcons, MoviesIcons, NotificationIcons, OptionsIcons, PersonsIcons, UserIcons } from "../iconsComponent/icons";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="" className="text-white flex items-center font-bold">
                  <MoaiIcons/>
                  <h1 className="text-2xl">Falsebook</h1>
                  <HeadMomoIcons/>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                <Link
                  href={"/"} className="text-white hover:bg-[#fff9] hover:text-black rounded-lg p-2 pr-6 pl-6"><HomeIcon/>
                </Link>
                <Link 
                  href={"/friends"} className="text-white hover:bg-[#fff9] hover:text-black rounded-lg p-3 pr-6 pl-6"><PersonsIcons/>
                </Link>
                <Link
                  href={"/"} className="text-white hover:bg-[#fff9] hover:text-black rounded-lg p-1 pr-6 pl-6"><MoviesIcons/>
                </Link>
                <Link
                  href={"/"} className="text-white hover:bg-[#fff9] hover:text-black rounded-lg p-2 pr-6 pl-6"><GroupIcons/>
                </Link>
                <Link
                  href={"/"} className="text-white hover:bg-[#fff9] hover:text-black rounded-lg p-1 pr-6 pl-6"><GamesIcons/>
                </Link>
              </div>
            </div>
            <div className="ml-4 flex items-center space-x-4">
                <Link
                  href={"/"} className="text-white bg-[#fff5] hover:bg-[#fff9] hover:text-black rounded-[50%] p-2 transition"><OptionsIcons/>
                </Link>
                <Link
                  href={"/"} className="text-white bg-[#fff5] hover:bg-[#fff9] hover:text-black rounded-[50%] p-2 transition"><MessageIcons/>
                </Link>
                <Link
                  href={"/"} className="text-white bg-[#fff5] hover:bg-[#fff9] hover:text-black rounded-[50%] p-2 transition"><NotificationIcons/>
                </Link>
                <Link
                  href={"/login"} className="text-white bg-[#fff5] hover:bg-[#fff9] hover:text-black rounded-[50%] p-2 transition"><UserIcons/>
                </Link>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

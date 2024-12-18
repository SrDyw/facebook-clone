import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white">
                  Falsebook
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href={"/"}
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"/></svg>
                </Link>
                <Link
                  href={"/"}
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z"/></svg>
                </Link>
                <Link
                  href={"/"}
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M6.5 4A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4zM4 8.5A2.5 2.5 0 0 1 6.5 6h19A2.5 2.5 0 0 1 28 8.5v15a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 23.5zM25 8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m-1 7a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1M6 9a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m-1 7a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm7-7.95c0-.81.878-1.313 1.576-.905l5.6 3.272a.895.895 0 0 1 0 1.546l-5.6 3.272A1.048 1.048 0 0 1 13 19.331z"/></svg>
                </Link>
                <Link
                  href={"/"}
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M0 18v-1.575q0-1.075 1.1-1.75T4 14q.325 0 .625.013t.575.062q-.35.525-.525 1.1t-.175 1.2V18zm6 0v-1.625q0-.8.438-1.463t1.237-1.162T9.588 13T12 12.75q1.325 0 2.438.25t1.912.75t1.225 1.163t.425 1.462V18zm13.5 0v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14q1.8 0 2.9.663t1.1 1.762V18zM4 13q-.825 0-1.412-.587T2 11q0-.85.588-1.425T4 9q.85 0 1.425.575T6 11q0 .825-.575 1.413T4 13m16 0q-.825 0-1.412-.587T18 11q0-.85.588-1.425T20 9q.85 0 1.425.575T22 11q0 .825-.575 1.413T20 13m-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.137T12 6q1.275 0 2.138.863T15 9q0 1.25-.862 2.125T12 12"/></svg>
                </Link>
                <Link
                  href={"/"}
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                      <path d="M8.023 17.215q.05-.046.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785" />
                    </g>
                  </svg>
                </Link>
                <Link
                  href={"/"}
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5"
                      opacity="0.3"
                    />
                    <path
                      fill="currentColor"
                      d="M18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

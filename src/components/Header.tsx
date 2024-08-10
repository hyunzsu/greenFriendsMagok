import React from 'react';

export default function Header() {
  return (
    <header className="border-primary text-primary w-full border-b bg-white text-sm">
      <div className="mx-auto flex max-w-screen-xl flex-col justify-start p-4 md:flex-row md:items-center md:justify-between">
        <div className="mb-2 md:mb-0">
          <h1 className="text-lg font-bold">BrickStudio</h1>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-start space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

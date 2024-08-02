import React from 'react';

const Footer = () => {
  return (
    
      <footer className="w-full bottom-0 text-gray-700 bg-gray-300 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <img className="w-auto h-10" src='https://cdn-icons-png.freepik.com/256/3534/3534033.png?semt=ais_hybrid' alt="Logo" />
            </a>
            <p className="mt-2 text-sm text-gray-500">Start your Journey with us!</p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a className="text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.16 3c-2.5 0-4.51 2-4.51 4.48v.56C7.69 7.88 4.07 5.88 1.64 3.16a4.45 4.45 0 00-.61 2.26c0 1.56.8 2.94 2 3.74a4.48 4.48 0 01-2-.55v.05c0 2.18 1.56 4 3.64 4.41a4.52 4.52 0 01-2 .08c.56 1.74 2.2 3.01 4.14 3.04a9 9 0 01-5.58 1.92A8.94 8.94 0 010 19.54 12.78 12.78 0 007 22c8.3 0 12.84-6.88 12.84-12.84l-.01-.58A9.22 9.22 0 0024 3.56a9 9 0 01-2.63.73 4.48 4.48 0 001.96-2.48"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <path d="M17.5 6.5h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 md:mt-0 -mb-10 text-center md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">POPULAR COURSES</h2>
              <ul className="mb-10 list-none">
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">Data Analytics</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">Machine Learning</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">Artificial Intelligence</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">Web Development</a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
              <nav className="mb-10 list-none">
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">Pricing</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">Documentation</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">Guides</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">API Status</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Company</h2>
              <nav className="mb-10 list-none">
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">About Us</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">Blog Posts</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">Jobs Opening</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">Press Conferences</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Subscribe</h2>
              <div className="flex flex-col">
                <input type="email" placeholder="Your email address" className="w-full px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200" />
                <button className="px-4 py-2 font-medium text-white bg-gray-900 rounded hover:bg-gray-700 transition duration-300">Subscribe</button>
              </div>
              <p className="mt-2 text-sm text-gray-500">Get the latest updates and offers.</p>
            </div>
          </div>
        </div>
          <div className="container px-5 py-6 mx-auto flex flex-wrap flex-col sm:flex-row">
            <p className="text-sm text-center text-gray-500 sm:text-left">© 2024 Education Hub —
              <a href="https://twitter.com" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@eduhubclases</a>
            </p>
        </div>
      </footer>
  );
}

export default Footer;

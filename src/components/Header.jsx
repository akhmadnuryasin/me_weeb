import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-transparent">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-0">
                <Link to="/" className="block text-white text-2xl font-bold text-center md:text-left">
                    <span className="sr-only">Home</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                        M
                    </span>
                    e
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                        W
                    </span>
                    eeb
                </Link>
                <div className="flex flex-1 items-center justify-center md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link to="/genre" className="text-white transition hover:text-white/75">
                                    Anime
                                </Link>
                            </li>
                            <li>
                                <Link to="/movies" className="text-white transition hover:text-white/75">
                                    Manga
                                </Link>
                            </li>
                            <li>
                                <Link to="/onas" className="text-white transition hover:text-white/75">
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link to="/news" className="text-white transition hover:text-white/75">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <div className="relative">
                                <label htmlFor="Search" className="sr-only">
                                    Search
                                </label>
                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Search Anime"
                                    className="w-full rounded-md text-white px-2 border bg-transparent border-gray-700 py-0.5 pe-10 shadow-sm sm:text-sm"
                                />
                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>

                        <button
                            className="block rounded bg-transparent border border-gray-600 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:ml-4 md:mt-4 md:translate-x-0 text-center`}
            >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 py-4">
                        <Link
                            to="/genre"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            onClick={toggleMenu}
                        >
                            Anime
                        </Link>
                        <Link
                            to="/movies"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 mt-1"
                            onClick={toggleMenu}
                        >
                            Manga
                        </Link>
                        <Link
                            to="/onas"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 mt-1"
                            onClick={toggleMenu}
                        >
                            Reviews
                        </Link>
                        <Link
                            to="/news"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 mt-1"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-transparent relative z-10">
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
                                <Link to="/all/anime" className="text-white transition hover:text-white/75" onClick={closeMenu}>
                                    Anime
                                </Link>
                            </li>
                            <li>
                                <Link to="/all/manga" className="text-white transition hover:text-white/75" onClick={closeMenu}>
                                    Manga
                                </Link>
                            </li>
                            <li>
                                <Link to="/reviews" className="text-white transition hover:text-white/75" onClick={closeMenu}>
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link to="/recommendations" className="text-white transition hover:text-white/75" onClick={closeMenu}>
                                    Recommendations
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
                            aria-label="Toggle menu"
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
            <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 p-2 bg-black md:bg-transparent md:hidden`}>
                <div className="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 py-4">
                        <Link
                            to="/all/anime"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50"
                            onClick={() => {
                                closeMenu();
                            }}
                        >
                            Anime
                        </Link>
                        <Link
                            to="/all/manga"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50 mt-1"
                            onClick={() => {
                                closeMenu();
                            }}
                        >
                            Manga
                        </Link>
                        <Link
                            to="/reviews"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50 mt-1"
                            onClick={() => {
                                closeMenu();
                            }}
                        >
                            Reviews
                        </Link>
                        <Link
                            to="/recommendations"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50 mt-1"
                            onClick={() => {
                                closeMenu();
                            }}
                        >
                            Recommendations
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

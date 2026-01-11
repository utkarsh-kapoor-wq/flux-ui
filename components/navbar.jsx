"use client";

import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
    const cartItemCount = 0;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Left Navigation Links */}
                    <div className="flex items-center space-x-8">
                        <Link
                            href="/buy"
                            className="text-sm font-medium text-gray-900 hover:text-gray-600 tracking-wide"
                        >
                            BUY
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-gray-900 hover:text-gray-600 tracking-wide"
                        >
                            ABOUT
                        </Link>
                        <Link
                            href="/resources"
                            className="text-sm font-medium text-gray-900 hover:text-gray-600 tracking-wide"
                        >
                            RESOURCES
                        </Link>
                    </div>

                    {/* Center Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={50}
                                height={50}
                                className="h-10 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-5">
                        <button
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                            aria-label="Search"
                        >
                            <IoSearchOutline className="h-5 w-5" />
                        </button>
                        <button
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                            aria-label="Account"
                        >
                            <HiOutlineUser className="h-5 w-5" />
                        </button>
                        <button
                            className="relative text-gray-700 hover:text-gray-900 transition-colors"
                            aria-label="Shopping Cart"
                        >
                            <HiOutlineShoppingBag className="h-5 w-5" />
                            <span className="absolute -top-2 -right-2 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded-full h-4 w-4 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

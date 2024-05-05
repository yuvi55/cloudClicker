"use client"

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import ProfileDropdown from "./profileDropdown";
function NavigationBar() {
    const { data: session } = useSession();
    return (
        <div className="bg-white dark:bg-black border-b-2 border-gray-300 w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
                <span className="text-lg text-gray-800 dark:text-gray-200">
                                Hey {session?.user?.name  || "there !"}
                            </span>
                    <div className="flex justify-start lg:w-0 lg:flex-1 text-lg hover:text-red-500">
                      
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    {session ? (
                        <div className="flex items-center justify-end md:flex-1 lg:w-0 space-x-6">
                            <Link href="/charts">
                               Charts
                            </Link>
                            <ProfileDropdown />
                        </div>
                    ) : (
                        <div className="flex items-center justify-end md:flex-1 lg:w-0">
                            <button onClick={() => signIn()} className="whitespace-nowrap text-base font-medium text-white hover:text-gray-900 dark:text-gray-200 dark:hover:text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
                                Sign In
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;



'use client';

import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-6xl font-bold text-purple-900 mb-4">404</h1>
            <p className="text-2xl text-gray-700 mb-8">Oops! TQC does not have a resource here!</p>
            <Link className="text-xl text-purple-600 hover:underline mb-4" href="/">
                    Go back to home
            </Link>
            <Link className="text-xl text-purple-600 hover:underline mb-4" href="/contact">
                    Contact Support
            </Link>
        </div>
    );
};

export default Custom404;

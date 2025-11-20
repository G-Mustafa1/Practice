import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white body-font px-5 md:px-10 py-10">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
                {/* Brand Info */}
                <div className="flex flex-col mb-8 md:mb-0 md:w-1/4">
                    <div className='flex items-center gap-1.5 mt-5 mb-2.5'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <h2 className="text-2xl font-bold mb-2">Mustafa Shop</h2>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Air plant banjo lyft occupy retro adaptogen indego
                    </p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:w-3/4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i}>
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                CATEGORIES
                            </h2>
                            <nav className="list-none">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-sm">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-sm">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-sm">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-sm">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                    ))}
                </div>
            </div>
        </footer>


    )
}

export default Footer

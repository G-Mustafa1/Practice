import { ClipboardPenLine } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <div className="flex items-center gap-1.5 justify-center text-center mb-4">
            <ClipboardPenLine size={35} className='animate-bounce text-blue-500' />
            <h1 className="text-3xl font-bold md:text-4xl animate-pulse
            text-shadow-indigo-500 text-shadow-md text-indigo-500">
                My Todo App
            </h1>
        </div>
    )
}

export default Header

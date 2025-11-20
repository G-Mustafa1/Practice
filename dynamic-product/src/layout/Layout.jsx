import React from 'react'
import NavbarHero from '../components/NavbarHero'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Navbar should be outside main */}
            <NavbarHero />

            {/* Main content with padding-top to offset fixed navbar */}
            <main className="flex-grow pt-18">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout

import React, { use, useEffect } from 'react'
import Product from './Product'
import Hero from '../components/Hero'
import instance from '../api/dummy'
import axios from 'axios'
const Home = () => {
    
    return (
        <>
        <Hero />
        <Product />
        </>
    )
}

export default Home

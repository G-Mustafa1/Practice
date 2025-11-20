import { i } from 'framer-motion/client'
import React from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const {id, title, thumbnail, category, description, price, rating} = item;
    // const params = useParams();  
    // console.log(params);
      
    return (
        <div
            className="lg:w-1/4 md:w-1/2 p-5 w-full bg-white rounded-md shadow-md shadow-gray-400"
        >
            <div className="block relative h-auto rounded overflow-hidden">
                <img
                    alt={title}
                    className="object-cover object-center w-full h-full block"
                    src={item.thumbnail}
                />
            </div>
            <div className="mt-4">
                <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">
                    {item.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-semibold">
                    {item.title}
                </h2>
                <p className='text-sm'>{item.description.slice(0, 50)}</p>
                <div className='flex justify-between items-center mt-1.5'>
                    <span className="font-bold">
                        ${item.price}
                    </span>
                    <span className='font-bold'>
                        {item.rating}
                    </span>
                </div>
                <div className='flex justify-center '>
                    <Link to={`/productdetail/${id}`} className='py-2.5 text-center bg-blue-500 text-white rounded-lg mt-2.5 w-full'>See Detail</Link>
                </div>
            </div>
        </div >
    )
}

export default ProductCard

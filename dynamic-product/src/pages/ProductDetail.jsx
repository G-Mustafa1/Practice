import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import instance from '../api/dummy';
import { FacebookIcon, GithubIcon, HeartIcon, MoveDownIcon, Star, TwitterIcon } from 'lucide-react';
import Loader from '../components/Loader'; 
import NotFound from '../components/NotFound';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [like, setLike] = useState(false);
    const [color, setColor] = useState({
        bg: "bg-white",
        text: "text-gray-600"
    });

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const res = await instance.get(`/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.log(error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const getStar = (rating) => {
        const count = Math.floor(rating);
        return Array.from({ length: count }, (_, i) => i);
    };

    if (loading) return <Loader />;

    if (!product) return <NotFound />

    return (
        <section className={`${color.bg} ${color.text} body-font overflow-hidden transition-all duration-500`}>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={product.thumbnail}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                            {product.category}
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            {product.title}
                        </h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                {getStar(product.rating).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                                ))}
                                <span className={`${color.text} ml-3`}>{product.rating}</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <FacebookIcon className="w-5 h-5 text-blue-600" />
                                <TwitterIcon className="w-5 h-5 text-blue-400" />
                                <Link to="https://github.com/G-Mustafa1">
                                    <GithubIcon className="w-5 h-5 text-gray-600" />
                                </Link>
                            </span>
                        </div>
                        <p className="leading-relaxed">{product.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button onClick={() => setColor({ bg: "bg-white", text: "text-gray-600" })} className="border-2 bg-white rounded-full w-6 h-6 focus:outline-blue-500 focus:outline-2" />
                                <button onClick={() => setColor({ bg: "bg-gray-700", text: "text-white" })} className="border-2 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-white focus:outline-2" />
                                <button onClick={() => setColor({ bg: "bg-indigo-500", text: "text-white" })} className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-white focus:outline-2" />
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <MoveDownIcon size={16} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                            <Link to="/" className="flex ml-auto text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 rounded">
                                Go Back
                            </Link>
                            <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded">
                                Add to Cart
                            </button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <HeartIcon
                                    onClick={() => setLike(!like)}
                                    className={`w-6 h-6 ${like ? "text-red-500" : "text-gray-600"}`}
                                    fill={like ? "currentColor" : "none"}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;

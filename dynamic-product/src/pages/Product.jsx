import axios from 'axios';
import React, { useEffect, useState } from 'react'
import instance from '../api/dummy';
import Loader from '../components/Loader';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);
    const [search, setSearch] = useState('all');
    // console.log(products);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await instance.get('/products/categories');
                setCategory(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const url = search === 'all'
                    ? "/products"
                    : `/products/category/${search}`;
                const response = await instance.get(url);
                setProducts(response.data.products);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [search]);
    return (
        <div>
            {loading && <Loader />}
            <section className="text-gray-600 body-font">
                <div className="container px-10 py-2.5 mx-auto">
                    <Categories category={category} setSearch={setSearch} search={search} />
                    <div className="flex justify-center flex-wrap gap-8 mb-5 ">
                        {products.map((item) => (
                           <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product

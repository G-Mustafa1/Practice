import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { useContext, useEffect, useRef, useState } from "react";
import Progress from "@/components/ui/progress";
import { CartContext } from "@/context/CartContext";
import ProductDialog from "@/components/ProductDialog";
import { message, Pagination } from "antd";

const Home = () => {
    const productRef = useRef(null);
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(20);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { addProduct, checkProduct } = useContext(CartContext);

    useEffect(() => {
        fetchApi();
    }, [limit, skip])

    const fetchApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const data = await response.json();
            setProducts(data.products);
            setTotal(data.total);
        } catch (error) {
            setError({ message: error.message || "No products found" });
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        }
    }

    const scrollProduct = () => {
        productRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <Hero scrollProduct={scrollProduct} />
            <section ref={productRef} id="product" className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured Collection
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover our carefully curated selection of premium products,
                        designed to elevate your lifestyle with timeless elegance.
                    </p>
                </div>
                {loading ? (
                    <div className="container mx-auto px-4 py-4">
                        <Progress />
                    </div>
                ) : error ? (
                    <div className="flex justify-center">
                        <h1 className="text-red-500">{error}</h1>
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center gap-6">
                        {
                            products.map((item) => (
                                <ProductCard
                                    key={item.id} products={item} addProduct={addProduct} checkProduct={checkProduct}
                                />
                            ))
                        }
                    </div>
                )}
            </section>
            <div className="flex justify-center">
                <Pagination
                    onChange={(page) => setSkip((page - 1) * limit)}
                    onShowSizeChange={(page, pageSize) => setLimit(pageSize)}
                    defaultCurrent={1} total={total} pageSize={limit} 
                />
            </div>
        </>
    );
};

export default Home;

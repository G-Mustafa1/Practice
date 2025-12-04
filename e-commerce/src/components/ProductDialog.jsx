import React, { useContext } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import { CartContext } from '@/context/CartContext'
import { Button } from './ui/button';
import { Package, Shield, ShoppingCart, Star, Truck } from 'lucide-react';
import Swal from 'sweetalert2';

const ProductDialog = ({ product, setOpen, open }) => {
    const { checkProduct, addProduct } = useContext(CartContext);

    const features = [
        {
            icon: <Truck size={16} className='text-[#0d98a5]' />,
            title: "Free Shipping",
            description: "On orders over $05",
        },
        {
            icon: <Shield size={16} className='text-[#0d98a5]' />,
            title: "2 Year Warranty",
            description: "Extended protection",
        },
        {
            icon: <Package size={16} className='text-[#0d98a5]' />,
            title: "Easy Returns",
            description: "30-day return policy",
        },
    ];

    const addToCart = (item) => {
        addProduct(item);
        Swal.fire({
            toast: true,
            icon: "success",
            title: "Added to cart!",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
        });
        setTimeout(() => {
            setOpen();
        }, 1500);
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className=" max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="sr-only">Produkju</DialogTitle>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-8 w-full">
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-500 w-[100%]">
                        <img
                            src={product.images[1] || product.thumbnail}
                            alt={product.name}
                            className='w-[100%] h-[100%] object-cover'
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-2">
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                                {product.category}
                            </p>
                            <h2 className="text-3xl font-bold mt-2">{product.title}</h2>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 text-[#0d98a5] ${i < Math.floor(product.rating)
                                            ? "fill-current"
                                            : ""
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                                ({product.rating} rating)
                            </span>
                        </div>

                        <p className="text-3xl font-bold mb-6">
                            ${product.price.toFixed(2)}
                        </p>

                        <DialogDescription className='mb-2.5' >
                            {product.description}
                        </DialogDescription>

                        <div className="space-y-3 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-[#d0fbff]">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">{feature.title}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="mt-auto space-y-3">
                    <Button
                        size="lg"
                        className="w-full bg-[#0d98a5] hover:bg-[#0d98a5]/90"
                        onClick={() => addToCart(product)}
                    >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        {checkProduct(product.id) ? `Added to cart (${checkProduct(product.id).quantity}) ✔` : "Add to cart"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ProductDialog

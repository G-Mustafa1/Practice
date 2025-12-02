import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";
import Swal from "sweetalert2";
import ProductDialog from "./ProductDialog";
import { useState } from "react";


export function ProductCard({ products, addProduct, checkProduct }) {
    const [open, setOpen] = useState(false);
    const addToCart = (product) => {
        addProduct(product);
        Swal.fire({
            toast: true,
            icon: "success",
            title: "Added to cart!",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
        });
    }
    return (
        <>
        <Card
            onClick={() => setOpen(true)}
            className="group cursor-pointer overflow-hidden transition-all hover:shadow-card-hover animate-scale-in pt-0 w-[350px]"
        >
            <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                    src={products.images[0] || ""}
                    alt="Product Image"
                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <p className="text-xs text-[#0d98a5] font-medium uppercase tracking-wide">
                            {products.category}
                        </p>
                        <h3 className="font-semibold text-lg mt-1 group-hover:text-primary transition-colors">
                            {products.title || ""}
                        </h3>
                    </div>
                </div>

                <div className="flex items-center gap-1 mb-3 text-[#0d98a5]">
                    <Star className="h-4 w-4 fill-current " />
                    <span className="text-sm font-medium">{products.rating}</span>
                </div>

                <p className="text-2xl font-bold">${products.price}</p>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button
                    className="w-full bg-[#0d98a5] hover:bg-[#0d98a5]/90"
                    onClick={(e) => {
                        e.stopPropagation();
                        addToCart(products);
                    }}
                >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {
                        checkProduct(products.id) ? `Added to cart (${checkProduct(products.id).quantity}) ✔` : `Add to cart`
                    }
                </Button>
            </CardFooter>
        </Card>
        {open && <ProductDialog product={products} setOpen={setOpen} open={open} />}
        </>
    );
}

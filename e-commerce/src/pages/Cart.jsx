import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import Swal from "sweetalert2";
import CartDetail from "@/components/CartDetail";

export default function Cart() {
    const nagigate = useNavigate();
    const [expandedIndex, setExpandedIndex] = useState(null); // NEW STATE
    const { cart, addProduct, removeProduct, removeQuantity, clearCart } = useContext(CartContext);

    const totalAmount = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    const handleRemoveProduct = (item) => {
        removeProduct(item.id)
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'info',
            title: `Removed from cart`,
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
        });
    }

    const clearAll = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Your entire cart will be cleared!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0d98a5",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, clear all",
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                Swal.fire({
                    title: "Cleared!",
                    text: "Your cart has been emptied.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                    toast: true,
                    position: "top-end"
                });
            }
        });
    }

    return (
        <main className="flex-1 container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#0d98a5]">Shopping Cart</h1>

            {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <ShoppingBag className="h-20 w-20 text-muted-foreground mb-4" />
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">Your cart is empty</h2>
                    <p className="text-muted-foreground mb-6 text-sm md:text-base">
                        Add some products to get started
                    </p>
                    <Link to="/" >
                        <Button className="bg-[#0d98a5] hover:bg-[#0d98a5]/90">Continue Shopping</Button>
                    </Link>
                </div>
            ) : (
                <div className="grid gap-8 lg:grid-cols-3">
                    <CartDetail clearCart={clearAll} cart={cart} removeQuantity={removeQuantity} addProduct={addProduct} handleRemoveProduct={handleRemoveProduct} />
                    <div className="lg:col-span-1">
                        <div className="border rounded-lg p-6 bg-card sticky top-24">
                            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                            <div className="space-y-3 mb-4">

                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Total Items</span>
                                    <span className="font-medium">{totalQuantity}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="font-medium">${totalAmount.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span className="font-medium">$0.5</span>
                                </div>

                                <Separator />

                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span>${(totalAmount + 0.5).toFixed(2)}</span>
                                </div>
                            </div>

                            <Button
                                onClick={() => nagigate("/checkout")} 
                            size="lg" className="w-full bg-[#0d98a5] hover:bg-[#168a95]">
                                Proceed to Checkout
                            </Button>
                        </div>
                    </div>

                </div>
            )}
        </main>
    );
}

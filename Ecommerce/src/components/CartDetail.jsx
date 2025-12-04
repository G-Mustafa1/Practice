import React, { useState } from 'react'
import { Button } from './ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartDetail = ({cart, handleRemoveProduct, addProduct, removeQuantity, clearCart}) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const expandText = (id) => {
        if (expandedIndex === id) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(id);
        }
    };
    return (
        <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => {
                const isExpanded = item.id === expandedIndex;
                return (
                    <div
                        key={item.id}
                        className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border bg-card"
                    >
                        <img
                            src={item.images[1] || item.images[0]}
                            alt={item.title}
                            className="w-24 h-24 object-cover rounded-md mx-auto sm:mx-0"
                        />

                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row justify-between gap-2 mb-2">

                                <div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
                                        <h3 className="font-semibold text-md sm:text-lg">
                                            {item.title}
                                        </h3>
                                        <span className="text-gray-400 text-sm">
                                            ({item.category})
                                        </span>
                                    </div>

                                    <p className={`text-sm text-muted-foreground mt-1 ${isExpanded ? "" : "line-clamp-2"}`}>
                                        {item.description}
                                    </p>
                                    <button
                                        onClick={() => expandText(item.id)}
                                        className="text-[#0d98a5] text-xs underline mt-1">
                                        {isExpanded ? "Show Less" : "Show More"}
                                    </button>
                                </div>

                                <Button
                                    className="bg-red-500 hover:bg-red-600 w-full sm:w-auto"
                                    onClick={() => handleRemoveProduct(item)}
                                    size="sm"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                                <div className="flex items-center gap-2">

                                    <Button
                                        className="h-8 w-8 bg-red-500 hover:bg-red-600"
                                        disabled={item.quantity === 1}
                                        onClick={() => removeQuantity(item)}
                                        size="icon"
                                    >
                                        <Minus className="h-3 w-3" />
                                    </Button>

                                    <span className="w-10 text-center font-medium text-lg">
                                        {item.quantity}
                                    </span>

                                    <Button
                                        className="h-8 w-8 bg-blue-500 hover:bg-blue-600 text-white"
                                        onClick={() => addProduct(item)}
                                        size="icon"
                                    >
                                        <Plus className="h-3 w-3" />
                                    </Button>
                                </div>

                                <p className="text-lg sm:text-xl font-bold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}

            <Button 
                onClick={clearCart}
                variant="outline"
                className="w-full"
            >
                Clear Cart
            </Button>
        </div>
    )
}

export default CartDetail

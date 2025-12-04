import { Menu, Search, ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import { useContext, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { CartContext } from "@/context/CartContext";

export function Navbar() {
    const { cart } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: "Shop", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center">
                        <h1 className="text-3xl font-bold bg-hero-gradient bg-clip-text text-[#0d98a5]">
                            Mustafa Shop
                        </h1>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    `text-md font-medium hover:text-[#0d98a5] transition-colors duration-200
                                    ${isActive ? "text-[#0d98a5]" : ""}
                                `
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="hidden md:flex">
                            <Search size={20} />
                        </button>

                        <Link to="/cart">
                            <button
                                className="relative"
                            >
                                <ShoppingCartIcon size={22} />
                                <span className="absolute -top-3 -right-3 h-5 w-5 bg-red-500 text-white text-xs 
                                    rounded-full flex items-center justify-center font-medium
                                    transform transition-all duration-300">
                                    {cart.length}
                                </span>
                            </button>
                        </Link>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px]">
                                <div className="flex flex-col space-y-4 mt-8">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}

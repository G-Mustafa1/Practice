import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Separator } from "./ui/separator";

const Footer = () => {
    const navItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ]
    return (
        <footer className=" text-[#000000] py-12 mt-16 border-t border-white/10 inset-shadow-xs  shadow-blue-500">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-2xl font-bold text-[#0d98a5] mb-3">Mustafa Shop</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Your one-stop destination for premium, modern and stylish products.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink className={({ isActive }) =>
                                    isActive
                                        ? "text-[#0d98a5] font-semibold"
                                        : "text-gray-700 hover:text-[#0d98a5]"
                                } to={item.href}>{item.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-black mb-4">Customer Support</h3>
                    <ul className="space-y-3 text-sm">
                        <li>Email: support@mustafashop.com</li>
                        <li>Phone: +92 300 1234567</li>
                        <li>Working Hours: 9am - 10pm</li>
                        <li className="hover:text-[#0d98a5] cursor-pointer">FAQ</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-black mb-4">Follow Us</h3>
                    <div className="flex items-center gap-4">
                        <Facebook className="w-5 h-5 hover:text-[#0d98a5] cursor-pointer" />
                        <Twitter className="w-5 h-5 hover:text-[#0d98a5] cursor-pointer" />
                        <Instagram className="w-5 h-5 hover:text-[#0d98a5] cursor-pointer" />
                        <Github className="w-5 h-5 hover:text-[#0d98a5] cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-600">
                <Separator className="mb-4" />
                © {new Date().getFullYear()} Mustafa Shop — All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;

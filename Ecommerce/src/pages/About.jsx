
export default function About() {
    return (
        <main className="flex-1 container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-[#0d98a5]">About Us</h1>

                <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg">
                        Welcome to LUXE, your premier destination for luxury products and exceptional shopping experiences.
                    </p>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-[#0d98a5]">Our Story</h2>
                        <p>
                            Founded with a passion for quality and elegance, LUXE brings together the finest selection of premium products.
                            We believe that everyone deserves access to luxury items that enhance their lifestyle.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-[#0d98a5]">Our Mission</h2>
                        <p>
                            Our mission is to provide an unparalleled shopping experience with carefully curated products,
                            exceptional customer service, and a commitment to quality that exceeds expectations.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibol mb-3 text-[#0d98a5]">Why Choose Us</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Handpicked luxury products</li>
                            <li>Competitive pricing</li>
                            <li>Free shipping on all orders</li>
                            <li>Secure payment options</li>
                            <li>Exceptional customer support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

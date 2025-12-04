
function Hero({scrollSection, refs}) {        
    return (
        <section id="home" className="w-full pt-20 bg-gradient-to-br  from-[#0f0f0f] to-gray-800 relative overflow-hidden">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: "url(https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="text-center">
                    <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Welcome to <br /> Dish & Delight
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Experience culinary excellence with our signature dishes crafted by world-class chefs
                    </p>
                    <button onClick={() => scrollSection(refs.menuRef)} className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                        Explore Menu →
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
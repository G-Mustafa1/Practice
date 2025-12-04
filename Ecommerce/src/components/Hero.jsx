// import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Hero({ scrollProduct }) {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(bg-ground.PNG)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in sticky top-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Your
            <span className="block bg-hero-gradient bg-clip-text text-[#0d98a5]">
              Perfect Style
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Curated collection of premium products designed for the modern
            lifestyle. Elevate your everyday with timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => {
                scrollProduct();
                // document.getElementById("product").scrollIntoView({
                //   behavior: "smooth"
                // })
              }}
              size="lg" className=" bg-[#0d98a5] hover:bg-[#0d99a6]/90">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

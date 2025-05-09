
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/ff14fd93-e7c0-4aa8-b647-bbc45e05c743.png" 
            alt="Delicious food background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            We Are In The Business Of Food
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-8">
            Our Restaurants Do
          </h2>
          
          <div className="w-full max-w-4xl flex flex-col md:flex-row gap-2 mt-8">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="SEARCH DISH OR NAME..."
                className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foodonline-primary"
              />
            </div>
            <div className="flex-grow">
              <input
                type="text"
                placeholder="ALL LOCATIONS"
                className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foodonline-primary"
              />
            </div>
            <Button size="lg" className="h-12 bg-green-500 hover:bg-green-600 text-white min-w-[100px]">
              <Search className="mr-2 h-4 w-4" /> SEARCH
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

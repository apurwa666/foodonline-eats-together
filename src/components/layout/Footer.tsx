
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter Your Email Address..." 
              className="bg-white text-black" 
            />
            <Button className="bg-foodonline-primary hover:bg-red-700 w-full sm:w-auto">
              SIGN UP
            </Button>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="text-center text-sm text-gray-400">
          <p>© 2024 FOODBAKERY. ALL RIGHTS RESERVED. DEVELOPED BY <span className="text-foodonline-primary">FOODONLINE</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

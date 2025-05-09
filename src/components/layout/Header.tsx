
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-foodonline-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <div className="text-xl font-bold text-foodonline-primary">
              FoodOnline
              <span className="block text-[9px] text-gray-500 -mt-1">A DELIGHTFUL TASTY PLACE</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          <div className="flex items-center text-sm text-gray-600 mr-4">
            <MapPin size={16} className="mr-1" />
            <span>Your current location</span>
          </div>
          <Link to="/marketplace">
            <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-100">
              MARKETPLACE
            </Button>
          </Link>
          <div className="flex items-center space-x-1">
            <Link to="/login">
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-100">
                LOGIN / REGISTER
              </Button>
            </Link>
            <Link to="/register-restaurant">
              <Button variant="default" size="sm" className="bg-foodonline-primary hover:bg-red-700 text-white">
                REGISTER RESTAURANT
              </Button>
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

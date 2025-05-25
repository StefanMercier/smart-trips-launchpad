
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold" style={{ color: '#749f45' }}>
              Global Educational Tours
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#749f45] transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#749f45] transition-colors">How It Works</a>
            <a href="#contact" className="text-gray-700 hover:text-[#749f45] transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button style={{ backgroundColor: '#749f45' }} className="hover:opacity-90">Get Started</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#749f45] transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="block px-3 py-2 text-gray-700">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700">How It Works</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full" style={{ backgroundColor: '#749f45' }}>Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

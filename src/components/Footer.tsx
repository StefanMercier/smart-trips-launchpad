
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Global Educational Tours
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering educators worldwide with smart travel solutions. 
              Making educational trips accessible, affordable, and unforgettable.
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-2">📧 info@globaleducationaltours.com</p>
              <p className="mb-2">📞 1-800-EDU-TRIP</p>
              <p>🌍 Serving educators worldwide</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Global Educational Tours. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

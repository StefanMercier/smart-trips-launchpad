
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Educational Travel?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join thousands of educators who have discovered the smart way to plan educational trips. 
          Start your journey today and see why we're the preferred choice for educational travel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
            Schedule Demo
          </Button>
        </div>
        <p className="text-blue-100 text-sm mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;

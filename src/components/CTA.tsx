
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(to right, #749f45, #5a7a33)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Educational Travel?
        </h2>
        <p className="text-xl mb-8 leading-relaxed" style={{ color: '#e8f1df' }}>
          Join thousands of educators who have discovered the smart way to plan educational trips. 
          Start your journey today and see why we're the preferred choice for educational travel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg font-semibold px-8 py-3 hover:opacity-90" style={{ backgroundColor: 'white', color: '#749f45' }}>
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white px-8 py-3 text-lg" style={{ '&:hover': { color: '#749f45' } }}>
            Schedule Demo
          </Button>
        </div>
        <p className="text-sm mt-6" style={{ color: '#e8f1df' }}>
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;

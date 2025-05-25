
const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Choose Your Destination",
      description: "Browse our curated collection of educational destinations or let our AI suggest perfect matches based on your curriculum and student interests."
    },
    {
      step: "02", 
      title: "Customize Your Itinerary",
      description: "Build your perfect trip with our drag-and-drop planner. Add educational activities, cultural experiences, and free time that aligns with your learning objectives."
    },
    {
      step: "03",
      title: "Recruit & Manage Students", 
      description: "Use our built-in tools to promote your trip, collect enrollments, process payments, and communicate with parents all in one place."
    },
    {
      step: "04",
      title: "Book & Travel",
      description: "Complete your booking with a few clicks. We handle all logistics, confirmations, and provide 24/7 support throughout your journey."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to departure in just four simple steps. Our streamlined process makes educational travel planning effortless.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80"
                alt="Students exploring"
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&q=80"
                alt="Educational destination"
                className="rounded-xl shadow-lg h-48 w-full object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=400&q=80"
                alt="Travel planning"
                className="rounded-xl shadow-lg h-48 w-full object-cover -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80"
                alt="Group travel"
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

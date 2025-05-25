
import { Calendar, Users, BookOpen } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Build Your Itinerary",
      description: "Create customized educational trips with our intelligent planning tools. Choose from thousands of destinations and activities tailored for student groups.",
      benefits: ["Smart destination matching", "Activity recommendations", "Budget optimization", "Safety-first planning"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Recruit Students",
      description: "Effortlessly promote and manage student enrollment with our comprehensive recruitment platform. Track applications and communicate seamlessly.",
      benefits: ["Digital enrollment forms", "Parent communication tools", "Payment processing", "Group management"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Book Within Minutes",
      description: "Complete your entire booking process in minutes, not hours. Our streamlined system handles all logistics while you focus on education.",
      benefits: ["One-click booking", "Instant confirmations", "24/7 support", "Mobile-friendly interface"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Educational Travel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with educational expertise to make trip planning simple, efficient, and effective.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

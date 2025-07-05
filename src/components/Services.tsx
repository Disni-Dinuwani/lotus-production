
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const services: Service[] = [
  {
    id: 1,
    title: "Wedding Photography",
    description: "Capture your special day with our premium wedding photography services.",
    price: "$1,500",
    features: [
      "Full day coverage",
      "Two photographers",
      "Online gallery",
      "100+ edited photos",
      "Engagement session"
    ]
  },
  {
    id: 2,
    title: "Event Videography",
    description: "Professional video coverage for all types of events and gatherings.",
    price: "$2,000",
    features: [
      "Up to 8 hours of coverage",
      "4K video quality",
      "Highlight reel (5-7 min)",
      "Raw footage included",
      "Drone shots (where permitted)"
    ],
    popular: true
  },
  {
    id: 3,
    title: "Commercial Photography",
    description: "High-quality product and branding photography for businesses.",
    price: "$800",
    features: [
      "Studio session (3 hours)",
      "Professional lighting",
      "20 edited images",
      "Commercial usage rights",
      "Quick turnaround"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-gray-600">
            We offer a wide range of professional photography and videography services to meet your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`${service.popular ? 'border-aqua-500 relative' : ''} flex flex-col h-full`}
            >
              {service.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-aqua-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold mb-6 text-aqua-600">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/booking" className="w-full">
                  <Button 
                    className={`w-full ${service.popular 
                      ? 'bg-aqua-600 hover:bg-aqua-700' 
                      : 'bg-gray-800 hover:bg-gray-900'}`}
                  >
                    Book Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

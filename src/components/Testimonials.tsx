
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl?: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content: "Lotus Production exceeded all our expectations for our wedding. The photos and video are absolutely stunning and captured all the special moments perfectly. We couldn't be happier!",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    initials: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Event Coordinator",
    content: "As an event planner, I've worked with many photography teams, but Lotus Production stands out for their professionalism and attention to detail. They're now our go-to for all major events.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    initials: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content: "The commercial photography for our product line was exceptional. The team understood our vision perfectly and delivered images that elevated our brand. Highly recommend!",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    initials: "ER"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding lotus-gradient text-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Client Testimonials</h2>
          <p className="text-gray-200">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={`${testimonial.avatarUrl}?auto=format&fit=crop&w=200&h=200`}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-lotus-300 text-lotus-900">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-200">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-200">{testimonial.content}</p>

                {/* Star Rating */}
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

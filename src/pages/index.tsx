
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Film, Image, UserCheck } from 'lucide-react';
import { Button } from '@/components/Navbar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Index = () => {
  const featuredProjects = [
    {
      title: "Wedding Photography",
      category: "",
      image: "images/index/WeddingPhotography.jpg"
    },
    {
      title: "Event Photography",
      category: "",
      image: "images/index/Event_Photography.jpg"
    },
    {
      title: "Portrait Photography",
      category: "",
      image: "images/index/Portrait_Photography.jpg"
    },
  ];

  const services = [
    {
      icon: <Camera className="w-10 h-10 text-aqua-600" />,
      title: "Photography",
      description: "From weddings to corporate events, our photography services capture moments in stunning detail.",
      link: "/services#photography"
    },
    {
      icon: <Film className="w-10 h-10 text-aqua-600" />,
      title: "Videography",
      description: "Professional video production for commercials, events, documentaries and brand storytelling.",
      link: "/services#videography"
    },
    {
      icon: <Image className="w-10 h-10 text-aqua-600" />,
      title: "Editing",
      description: "Expert post-production services to enhance and perfect your visual content.",
      link: "/services#editing"
    },
    {
      icon: <UserCheck className="w-10 h-10 text-aqua-600" />,
      title: "Consulting",
      description: "Strategic guidance to help you plan and execute your visual content strategy.",
      link: "/services#consulting"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="heading-lg mb-2">Featured Projects</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">Explore our recent work that showcases our creative vision and technical expertise.</p>
            </div>
            <Link to="/portfolio">
              <Button variant="ghost" className="mt-4 md:mt-0 flex items-center gap-2">
                View All Work
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredProjects.map((project, index) => (
              <Link to="/portfolio" key={index} className="group block">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-aqua-600">{project.category}</p>
                  <h3 className="text-xl font-medium mt-1">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We offer comprehensive visual content creation services to help brands and individuals tell their stories effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 rounded-lg border border-border hover:border-aqua-300 hover:shadow-md transition-all group">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-aqua-600 font-medium group-hover:text-aqua-700 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services">
              <Button className="bg-aqua-600 hover:bg-aqua-700 text-white">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-aqua-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to bring your vision to life?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's collaborate to create stunning visuals that tell your unique story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="bg-white text-aqua-700 hover:bg-white/90 text-lg px-6">
                  Book a Session
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-aqua-700 border-white hover:bg-white/10 text-lg px-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

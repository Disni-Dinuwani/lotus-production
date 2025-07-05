
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 to-dark-900/50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.lovable.app/lotus-production-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="heading-xl text-white mb-6">
            We craft <span className="text-aqua-400">visual stories</span> that captivate and inspire
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Premium videography and photography services that transform moments into lasting memories.
            Award-winning studio with a passion for visual excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/portfolio">
              <Button className="bg-aqua-600 hover:bg-aqua-700 text-white text-lg px-8 py-6">
                View Our Work
              </Button>
            </Link>
            <Link to="/booking">
              <Button
                // variant="outline"
                className="bg-aqua-600 hover:bg-aqua-700 text-white text-lg px-8 py-6"
              >
                Book a Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 flex items-center gap-3"
              onClick={() => window.open('https://youtu.be/QySuMMMK2z4?si=C43DNbljqx_LuIXE', '_blank')}
            >
              <div className="bg-aqua-500 rounded-full p-2 flex items-center justify-center">
                <Play className="h-5 w-5 text-white" />
              </div>
              <span>Watch our showreel</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating achievements */}
      <div className="absolute bottom-10 right-10 top-50 z-20 bg-black/40 backdrop-blur-lg rounded-lg p-4 max-w-xs hidden md:block">
        <div className="text-white">
          <p className="font-medium text-aqua-400">Recognized Excellence</p>
          <div className="flex gap-4 mt-2">
            {/* <div>
              <p className="text-2xl font-bold">10+</p>
              <p className="text-sm text-gray-300">Industry Awards</p>
            </div> */}
            <div>
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm text-gray-300">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

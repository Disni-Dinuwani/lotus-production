
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Wedding Ceremony",
    category: "weddings",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    id: 2,
    title: "Corporate Event",
    category: "events",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
  },
  {
    id: 3,
    title: "Fashion Photography",
    category: "portraits",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
  },
  {
    id: 4,
    title: "Product Shoot",
    category: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1491472253230-a044054ca35f",
  },
  {
    id: 5,
    title: "Beach Wedding",
    category: "weddings",
    imageUrl: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f",
  },
  {
    id: 6,
    title: "Family Portrait",
    category: "portraits",
    imageUrl: "https://images.unsplash.com/photo-1581952976147-5a2d15560349",
  },
];

const categories = [
  "all",
  "weddings",
  "events",
  "portraits",
  "commercial",
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Our Portfolio</h2>
          <p className="text-gray-600">
            Browse through our collection of professional photography and videography projects.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"} 
              className={activeCategory === category 
                ? "bg-aqua-600 hover:bg-aqua-700" 
                : "hover:text-aqua-600 hover:border-aqua-600"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group cursor-pointer">
              <div className="relative aspect-[4/3]">
                <img 
                  src={`${item.imageUrl}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-serif font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-200">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-aqua-600 hover:bg-aqua-700">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

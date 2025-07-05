
import React from 'react';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "10+",
    label: "Years Experience"
  },
  {
    value: "500+",
    label: "Projects Completed"
  },
  {
    value: "50+",
    label: "Awards Won"
  },
  {
    value: "100%",
    label: "Client Satisfaction"
  }
];

const Stats = () => {
  return (
    <section className="py-12 bg-dark-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="font-serif text-4xl md:text-5xl font-bold text-lotus-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

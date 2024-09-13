import React from 'react';

type CardProps = {
  image: string;
  title: string;
  description: string;
  tags: string[];
};

const Card = ({ image, title, description, tags }: CardProps) => {
  return (
    <div className="group relative flex h-[500px] transform flex-col justify-end overflow-hidden rounded-lg bg-cover bg-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
      {/* Tags (Hidden by default, visible on hover) */}
      <div className="absolute left-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {tags.map((tag, index) => (
          <span key={index} className="rounded-full bg-white/80 px-3 py-1 text-sm text-gray-700">{tag}</span>
        ))}
      </div>
      {/* Image with dark overlay */}
      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/60"></div>
      <div className="relative p-6">
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      </div>
      {/* Description (Hidden by default, visible on hover) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="mb-4 text-sm text-white">{description}</p>
        <button className="rounded-full bg-white px-4 py-2 font-semibold text-black">More Details</button>
      </div>
    </div>
  );
};

const Cards = () => {
  const cards = [
    {
      image: '/images/cheetah.jpg', // You can replace this with actual image URLs
      title: 'Majestic Creatures of the African Savanna',
      description: "Capturing the Exquisite Patterns and Dynamic Energy of Africa's Most Iconic Big Cat",
      tags: ['Wildlife Portraits', 'Nature', 'Mammals', '#2023'],
    },
    {
      image: '/images/temple.jpg',
      title: 'A Temple’s Serene Silhouette',
      description: "Immersing in the Timeless Beauty of Sacred Architecture",
      tags: [],
    },
    {
      image: '/images/portrait.jpg',
      title: 'Moments Framed in Portraits',
      description: "Expressive Portraits That Tell Compelling Stories",
      tags: [],
    },
  ];

  return (
    <div className="flex w-full max-w-7xl flex-col gap-7 px-5 text-[#A4A4A4] md:justify-between md:gap-10">
      {/* Card section */}
      <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            tags={card.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;

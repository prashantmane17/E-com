'use client'

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      image: '/placeholder.svg?height=600&width=1200',
      title: 'Summer Collection 2024',
      description: 'Discover the hottest trends for this season',
      cta: 'Shop Now'
    },
    {
      image: '/placeholder.svg?height=600&width=1200',
      title: 'New Arrivals',
      description: 'Be the first to wear our latest styles',
      cta: 'Explore'
    },
    {
      image: '/placeholder.svg?height=600&width=1200',
      title: 'Limited Edition',
      description: 'Exclusive pieces you won\'t find anywhere else',
      cta: 'View Collection'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-pink-200">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className={`text-5xl font-bold mb-4 transition-all duration-1000 transform ${
                isVisible && currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                {slide.title}
              </h1>
              <p className={`text-xl mb-8 transition-all duration-1000 delay-300 transform ${
                isVisible && currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                {slide.description}
              </p>
              <button className={`bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform ${
                isVisible && currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

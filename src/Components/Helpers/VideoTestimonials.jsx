import { useState, useEffect } from 'react';
import LogoImg from '../../assests/HGFPMI-LOGO.png'

const TestimonialCard = ({ name, role, testimony }) => (
  <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <div className="w-16 h-16 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-red-500 rounded-full opacity-20"></div>
          <img alt='logo' src={LogoImg} className='w-[38px]' />
        </div>
      </div>
      <blockquote className="text-gray-700 text-center mb-4 line-clamp-4">
        "{testimony}"
      </blockquote>
      <div className="text-center mt-auto">
        <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>
        <p className="text-red-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = ({ data, showMore, text }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(data.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="py-8 bg-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          {
            showMore && (
              <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              </>

            )
          }

          {/* Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((testimonial) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-red-500 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 ">
            {text ? text : 'TESTIMONIES'}
          </h2> 
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
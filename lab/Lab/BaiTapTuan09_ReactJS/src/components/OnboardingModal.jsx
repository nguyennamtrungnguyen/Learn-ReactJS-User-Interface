import { useState } from 'react';

const slides = [
  {
    image: 'https://placehold.co/600x340/f9a8d4/ffffff?text=Slide+1+🍓',
    title: 'Discover Chefify',
    subtitle: 'Easy and delicious cooking instructions right here. Start exploring now!',
  },
  {
    image: 'https://placehold.co/600x340/fbbf24/ffffff?text=Slide+2+🍕',
    title: 'Discover Chefify',
    subtitle: 'Browse thousands of curated recipes from world-class chefs, step by step.',
  },
  {
    image: 'https://placehold.co/600x340/34d399/ffffff?text=Slide+3+🥗',
    title: 'Discover Chefify',
    subtitle: 'Save your favourites, build your personal recipe box and cook with confidence!',
  },
];

export default function OnboardingModal({ onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onClose && onClose();
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 flex flex-col gap-6 z-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold" style={{ color: '#E91E8C' }}>
            {slide.title}
          </h1>
          <p className="text-gray-500 mt-2 text-sm leading-relaxed">{slide.subtitle}</p>
        </div>

        {/* Image */}
        <div className="w-full aspect-video rounded-xl overflow-hidden">
          <img
            src={slide.image}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'bg-pink-500 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full py-3 font-semibold transition-colors duration-200"
        >
          {currentSlide === 2 ? 'Get Started' : 'Next'}
        </button>

        {/* Skip */}
        <p
          onClick={onClose}
          className="text-center text-pink-500 cursor-pointer text-sm hover:text-pink-700 transition-colors"
        >
          Skip
        </p>
      </div>
    </div>
  );
}

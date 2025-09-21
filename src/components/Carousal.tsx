import { useEffect, useState } from "react";
import ImageModal from "./imageModal";

interface ProjectSlideshowProps {
  images: string[] | string;
  time: number;
}

export default function Carousel({
  images,
  time,
}: ProjectSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImageUrl, setModalImageUrl] = useState<string>("");

  const isMultiple = Array.isArray(images);
  const imageArray = isMultiple ? images : [images];

  useEffect(() => {
    if (!isMultiple) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500 + time);

    return () => clearInterval(interval);
  }, [images, isMultiple]);

  const currentImage = isMultiple ? images[currentIndex] : images;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openModal = () => {
    setModalImageUrl(currentImage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageUrl("");
  };

  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      {/* Main image container */}
      <div className="relative w-full overflow-hidden bg-gray-100 shadow-lg aspect-video rounded-xl group">
        <img
          src={currentImage}
          alt="Project Preview"
          className="absolute inset-0 object-contain w-full h-full transition-all duration-500 ease-in-out"
          onClick={openModal}
        />

        {/* Gradient overlay for better dot visibility */}
        {isMultiple && (
          <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
        )}

        {/* Navigation arrows - only visible on hover of the image */}
        {isMultiple && imageArray.length > 1 && (
          <>
            <button
              onClick={() =>
                goToSlide(
                  currentIndex === 0 ? imageArray.length - 1 : currentIndex - 1
                )
              }
              className="absolute z-10 flex items-center justify-center text-white transition-all duration-300 transform -translate-y-1/2 rounded-full opacity-0 cursor-pointer left-3 top-1/2 bg-black/40 hover:bg-black/60 w-9 h-9 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-105"
              aria-label="Previous image"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                goToSlide(
                  currentIndex === imageArray.length - 1 ? 0 : currentIndex + 1
                )
              }
              className="absolute flex items-center justify-center text-white transition-all duration-300 transform -translate-y-1/2 rounded-full opacity-0 right-3 top-1/2 bg-black/40 hover:bg-black/60 w-9 h-9 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next image"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Indicator dots */}
      {isMultiple && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
          {imageArray.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ease-out focus:outline-none rounded-full ${
                index === currentIndex
                  ? "w-6 h-2 bg-white shadow-sm"
                  : "w-2 h-2 bg-white/50 hover:bg-white/70 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Active dot has a subtle glow */}
              {index === currentIndex && (
                <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse" />
              )}
            </button>
          ))}
        </div>
      )}

      <ImageModal
        isOpen={isModalOpen}
        imageUrl={modalImageUrl}
        onClose={closeModal}
        alt="Project Preview"
      />
    </div>
  );
}

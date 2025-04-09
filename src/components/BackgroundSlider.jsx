import { useState, useEffect } from "react";
import ib from "../assets/islas-ballestas.jpg";
import rnp from "../assets/roja.jpg";
import huacachina from "../assets/huacachina.jpeg";

const images = [ib.src, rnp.src, huacachina.src];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[50rem] flex flex-row justify-between items-center">
      {/* Fondo de color encima de las imágenes */}
      <div className="absolute w-full h-full bg-black/5 z-10" />

      {/* Carrusel de imágenes */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Background ${index + 1}`}
          className={`absolute w-full h-full left-0 object-cover transition-opacity duration-500 ease-in-out ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Botón de anterior */}
      <button
        className="bg-[#024dae] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center z-20"
        aria-label="Previous Slide"
        onClick={prevImage}
      >
        &lt;
      </button>

      {/* Botón de siguiente */}
      <button
        className="bg-[#024dae] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center z-20"
        aria-label="Next Slide"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
}

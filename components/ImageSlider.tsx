'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
    images: string[];
    alt: string;
}

export default function ImageSlider({ images, alt }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    if (images.length === 0) return null;

    if (images.length === 1) {
        return (
            <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    src={images[0]}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        );
    }

    return (
        <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
            <div
                className="w-full h-full relative transition-transform duration-500 ease-out"
            // style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Can use this for sliding track, but replacing image is simpler for basic slider
            >
                {/* We render current slide. For smoother transitions we could map all and translateX */}
                <Image
                    src={images[currentIndex]}
                    alt={`${alt} - Slide ${currentIndex + 1}`}
                    fill
                    className="object-cover transition-opacity duration-300"
                    priority
                />
            </div>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`transition-all duration-300 cursor-pointer w-2.5 h-2.5 rounded-full ${currentIndex === slideIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

"use client";

import Image from "next/image";
import { useState } from "react";

// If you are looking for mobile support, please refer to the
// following implementation by @daviddecorso
// https://github.com/unhingedmagikarp/comparison-slider/tree/mobile-support

const ImageComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full relative mt-[15px]" onTouchEnd={handleMouseUp} onMouseUp={handleMouseUp}>
      <div
        className="relative w-full max-w-[700px] h-[500px] md:max-w-[1118px] md:h-[628px] aspect-[70/45] m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        onTouchMove={handleMove}
        onTouchStart={handleMouseDown}
      >
        <Image
          alt=""
          fill
          draggable={false}
          priority
          src="/afterImage.png"
          className="hidden md:block"
        />
        <Image
          alt=""
          fill
          draggable={false}
          priority
          src="/afterImageMob.png"
          className="block md:hidden"
        />

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[700px] h-[500px] md:max-w-[1118px] md:h-[628px] aspect-[70/45] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            draggable={false}
            alt=""
            src="/beforeImage.png"
            className="hidden md:block"
          />
          <Image
            fill
            priority
            draggable={false}
            alt=""
            src="/beforeImageMob.png"
            className="block md:hidden"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-black cursor-pointer"
          style={{
            left: `${sliderPosition}%`,
          }}
        >
          <div className="absolute rounded-full h-[30px] w-[30px] -left-3 top-[calc(50%-5px)]" >
            <Image src='/sliderHandle.png' width={100} height={100} alt='bg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
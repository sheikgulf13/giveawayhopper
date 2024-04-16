"use client";

import Image from "next/image";
import { useState } from "react";

// If you are looking for mobile support, please refer to the
// following implementation by @daviddecorso
// https://github.com/unhingedmagikarp/comparison-slider/tree/mobile-support

const ImageComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
    <div className="w-full relative mt-[15px]" onMouseUp={handleMouseUp}>
      <div
        className="relative w-full max-w-[1118px] h-[628px] aspect-[70/45] m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        <Image
          alt=""
          fill
          draggable={false}
          priority
          src="/afterImage.png"
        />

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[1118px] h-[628px] aspect-[70/45] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            draggable={false}
            alt=""
            src="/beforeImage.png"
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
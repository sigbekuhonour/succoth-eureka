"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen custom-bg">
      <Image
        src={"/HeroBackgroundDefault.jpg"}
        alt="Hero Background Image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1
          className={`text-white text-4xl md:text-6xl font-bold text-center px-4 drop-shadow-lg
            ${visible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          Connecting the right people to the right homes
        </h1>
      </div>
    </div>
  );
}

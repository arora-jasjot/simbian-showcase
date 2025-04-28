"use client";
import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setScrollDirection("down");
      } else if (event.deltaY < 0) {
        setScrollDirection("up");
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const currentY = touch.clientY;
        if (currentY < lastY) {
          setScrollDirection("down");
        } else if (currentY > lastY) {
          setScrollDirection("up");
        }
        lastY = currentY;
      }
    };

    let lastY = 0;

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return scrollDirection;
};

export default useScrollDirection;
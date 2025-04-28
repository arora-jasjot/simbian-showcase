"use client";
import { useEffect, useState } from "react";

const useScrollDirection = (ref: React.RefObject<HTMLElement | null>) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (ref.current) {
        const element = ref.current;
        const isElementTall = element.scrollHeight > window.innerHeight; // Check if element is taller than the viewport
        const isScrolledToEnd = element.scrollTop + element.clientHeight >= element.scrollHeight;

        if (isElementTall) {
          if (isScrolledToEnd && event.deltaY > 0) {
            // If it's scrolled to the end and the scroll is down, handle scroll direction
            setScrollDirection("down");
          } else if (!isScrolledToEnd && event.deltaY < 0) {
            // If it's not scrolled to the end and the scroll is up, handle scroll direction
            setScrollDirection("up");
          }
        } else {
          // If the element height is <= 100vh, just check for mouse scroll direction
          if (event.deltaY > 0) {
            setScrollDirection("down");
          } else if (event.deltaY < 0) {
            setScrollDirection("up");
          }
        }
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (ref.current && event.touches.length > 0) {
        const element = ref.current;
        const touch = event.touches[0];
        const currentY = touch.clientY;

        const isElementTall = element.scrollHeight > window.innerHeight;
        const isScrolledToEnd = element.scrollTop + element.clientHeight >= element.scrollHeight;

        if (isElementTall) {
          if (isScrolledToEnd && currentY < lastY) {
            setScrollDirection("down");
          } else if (!isScrolledToEnd && currentY > lastY) {
            setScrollDirection("up");
          }
        } else {
          if (currentY < lastY) {
            setScrollDirection("down");
          } else if (currentY > lastY) {
            setScrollDirection("up");
          }
        }

        lastY = currentY;
      }
    };

    let lastY = 0;

    // Ensure you're adding event listeners to the window object, not a specific element
    const handleWindowWheel = (event: WheelEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        handleWheel(event);
      }
    };

    const handleWindowTouchMove = (event: TouchEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        handleTouchMove(event);
      }
    };

    // Attach event listeners to the window
    window.addEventListener("wheel", handleWindowWheel, { passive: true });
    window.addEventListener("touchmove", handleWindowTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWindowWheel);
      window.removeEventListener("touchmove", handleWindowTouchMove);
    };
  }, [ref]);

  return scrollDirection;
};

export default useScrollDirection;
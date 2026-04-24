import { useRef, useEffect, useState } from 'react';

export function useCarouselScroll(autoScrollInterval = 4000) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(33);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollEvent = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) : 0;
      setScrollProgress(progress);
      setIndicatorWidth(Math.max((clientWidth / scrollWidth) * 100, 10)); // Min width 10%

      // Calculate the center of the container
      const center = scrollLeft + clientWidth / 2;
      let minDistance = Infinity;
      let newActiveIndex = 0;
      
      Array.from(containerRef.current.children).forEach((child, index) => {
        const childElement = child as HTMLElement;
        // The center of the child element relative to the scroll container's content
        const childCenter = childElement.offsetLeft + childElement.clientWidth / 2;
        const distance = Math.abs(center - childCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          newActiveIndex = index;
        }
      });
      
      setActiveIndex(newActiveIndex);
    }
  };

  const stopAutoScroll = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    timer.current = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Fallback if no children
          if (containerRef.current.children.length === 0) return;
          const cardElement = containerRef.current.children[0] as HTMLElement;
          const cardWidth = cardElement ? cardElement.clientWidth : 380;
          containerRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        }
      }
    }, autoScrollInterval);
  };

  const handleScrollBtn = (direction: 'left' | 'right') => {
    startAutoScroll(); // Reset the timer based on user interaction
    if (containerRef.current) {
      if (containerRef.current.children.length === 0) return;
      const cardElement = containerRef.current.children[0] as HTMLElement;
      const cardWidth = cardElement ? cardElement.clientWidth : 380;
      const scrollAmount = direction === 'left' ? -(cardWidth + 24) : cardWidth + 24;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current!.offsetLeft;
    scrollLeft.current = containerRef.current!.scrollLeft;
    stopAutoScroll();
    // Temporarily remove snapping for smooth free-dragging
    containerRef.current?.classList.remove('snap-x', 'snap-mandatory');
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      containerRef.current?.classList.add('snap-x', 'snap-mandatory');
    }
    startAutoScroll(); // Resume scrolling when mouse leaves
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      containerRef.current?.classList.add('snap-x', 'snap-mandatory');
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = () => stopAutoScroll();
  const handleTouchEnd = () => startAutoScroll();

  useEffect(() => {
    startAutoScroll();
    handleScrollEvent(); // Initial calculation
    window.addEventListener('resize', handleScrollEvent);
    return () => {
      stopAutoScroll();
      window.removeEventListener('resize', handleScrollEvent);
    };
  }, []);

  return {
    containerRef,
    handlers: {
      onScroll: handleScrollEvent,
      onMouseEnter: stopAutoScroll,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
    },
    handleScrollBtn,
    scrollProgress,
    indicatorWidth,
    activeIndex
  };
}

'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices that support hovering (desktop/laptop)
    try {
      const mq = window.matchMedia && window.matchMedia('(hover: hover)');
      const canHover = mq ? mq.matches : false;
      setShowCursor(Boolean(canHover));
    } catch (e) {
      setShowCursor(false);
    }
  }, []);

  useEffect(() => {
    if (!showCursor) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Mouse for desktop
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, [showCursor]);

  if (!showCursor) return null;

  return (
    <div 
      className="fixed w-8 h-8 pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-2 h-2 bg-primary rounded-full" />
    </div>
  );
}

export default CustomCursor;
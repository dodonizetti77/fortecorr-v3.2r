import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = 'ANTES', 
  afterLabel = 'DEPOIS' 
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-lg overflow-hidden cursor-ew-resize select-none shadow-steel"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Before Image (Background - full width, black and white) */}
      <img
        src={beforeImage}
        alt="Antes"
        className="absolute inset-0 w-full h-full object-cover grayscale"
        draggable={false}
      />

      {/* After Image (Revealed on the right side) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ 
          left: `${sliderPosition}%`,
          width: `${100 - sliderPosition}%`
        }}
      >
        <img
          src={afterImage}
          alt="Depois"
          className="absolute inset-0 h-full object-cover"
          style={{ 
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw',
            maxWidth: 'none',
            left: `-${sliderPosition}%`,
            marginLeft: containerRef.current ? `-${(sliderPosition / 100) * containerRef.current.offsetWidth}px` : '0'
          }}
          draggable={false}
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-foreground cursor-ew-resize z-10"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-foreground rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-background rounded-full" />
            <div className="w-0.5 h-4 bg-background rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-20">
        <span className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded font-display text-lg text-foreground">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute bottom-4 right-4 z-20">
        <span className="bg-accent/90 backdrop-blur-sm px-4 py-2 rounded font-display text-lg text-foreground">
          {afterLabel}
        </span>
      </div>

      {/* Instruction */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        className="absolute top-4 left-1/2 -translate-x-1/2 bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-muted-foreground z-20"
      >
        ← Arraste para comparar →
      </motion.div>
    </div>
  );
}
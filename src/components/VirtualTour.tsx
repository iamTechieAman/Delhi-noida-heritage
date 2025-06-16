import React, { useState } from 'react';
import { Maximize2, Minimize2, RotateCcw } from 'lucide-react';

interface VirtualTourProps {
  panoramaUrl: string;
  title: string;
}

const VirtualTour: React.FC<VirtualTourProps> = ({ panoramaUrl, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [rotation, setRotation] = useState(0);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleRotation = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      <div className="absolute top-4 right-4 z-10 flex space-x-2">
        <button
          onClick={handleRotation}
          className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <RotateCcw size={20} />
        </button>
        <button
          onClick={toggleFullscreen}
          className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      </div>
      
      <div 
        className="relative w-full h-[500px] transition-transform duration-500"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <img
          src={panoramaUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-white/80 text-sm">
          Use mouse or touch to explore the panorama
        </p>
      </div>
    </div>
  );
};

export default VirtualTour;
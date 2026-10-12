import React from 'react';

interface BackgroundVideoProps {
  overlayOpacity?: string; // 60-70% black transparent overlay, e.g. "bg-black/65"
  className?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  overlayOpacity = 'bg-black/65',
  className = '',
}) => {
  return (
    <div
      className={`fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/background_image.jpg"
        className="w-full h-full object-cover object-center select-none pointer-events-none"
      >
        <source src="/background_video.mp4" type="video/mp4" />
        <img
          src="/background_image.jpg"
          alt="Sami Background"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
        />
      </video>
      {/* Dark Transparent Overlay 60-70% for clear text legibility */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />
    </div>
  );
};

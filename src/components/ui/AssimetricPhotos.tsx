import { motion } from "framer-motion";
import { useState } from "react";

interface ImageModalProps {
  src: string | null;
  onClose: () => void;
}

const ImageModal = ({ src, onClose }: ImageModalProps) => {
  if (!src) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.split('/').pop() || 'image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.3 }}
        className="relative max-w-[95vw] md:max-w-5xl max-h-[90vh] w-full bg-white/5 rounded-2xl p-2 backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-all duration-200 shadow-lg z-10 group"
          aria-label="Close modal"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="absolute -top-4 -left-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-all duration-200 shadow-lg group"
          aria-label="Download image"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
            />
          </svg>
        </button>

        <div className="max-h-[80vh] overflow-hidden flex items-center justify-center">
          <motion.img
            src={src}
            alt="Enlarged view"
            className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const PhotoRow = ({
  images,
  direction = "left",
  speed = 50,
  onImageClick,
}: {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
  onImageClick: (src: string) => void;
}) => {
  // Triple the images array to ensure smooth infinite scrolling
  const repeatedImages = [...images, ...images, ...images];
  const imageWidth = 260; // Width + small margin
  const totalWidth = images.length * imageWidth;

  return (
    <div className="relative w-full h-32 sm:h-40 md:h-48 overflow-hidden">
      <motion.div
        className="flex absolute"
        animate={{
          x: direction === "left" ? -totalWidth : 0
        }}
        initial={{
          x: direction === "left" ? 0 : -totalWidth
        }}
        transition={{
          repeat: Infinity,
          duration: 70,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {repeatedImages.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-1"
          >
            <img
              src={src}
              alt={`Gallery image ${i}`}
              className="w-48 sm:w-56 md:w-64 h-32 sm:h-40 md:h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
              onClick={() => onImageClick(src)}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function AssimetricPhotosGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const allImages = [
    "image01.jpeg",
    "image02.jpeg",
    "image03.jpeg",
    "image04.jpeg",
    "image05.jpeg",
    "image06.jpeg",
    "image07.jpeg",
    "image08.jpeg",
    "image09.jpeg",
    "image10.jpeg",
    "image11.jpeg",
    "image12.jpeg",
    "image13.jpeg",
    "image14.jpeg",
    "image15.jpeg",
    "image16.jpeg",
  ];

  // Split images into rows with different speeds for variety
  const imagesRow1 = allImages.slice(0, 8);
  const imagesRow2 = allImages.slice(8, 16);

  return (
    <>
      <div className="py-6 overflow-hidden">
        <div className="mb-2">
          <PhotoRow 
            images={imagesRow1} 
            direction="right" 
            speed={25}
            onImageClick={setSelectedImage}
          />
        </div>
        <div>
          <PhotoRow 
            images={imagesRow2} 
            direction="left" 
            speed={20}
            onImageClick={setSelectedImage}
          />
        </div>
      </div>
      <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}

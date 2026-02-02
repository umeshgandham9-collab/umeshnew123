import React, { useState } from 'react';
import { Heart, Image as ImageIcon, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/ui/card';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: 'https://customer-assets.emergentagent.com/job_93925170-a54d-46d9-9fdc-793833f769d3/artifacts/hj5x3zmp_umesh1.jpg',
      title: 'Umesh',
      description: 'The one who loves you more than words can say 💕',
      type: 'portrait'
    },
    {
      src: 'https://customer-assets.emergentagent.com/job_93925170-a54d-46d9-9fdc-793833f769d3/artifacts/5ndkbali_Gemini_Generated_Image_myrci8myrci8myrc.png',
      title: 'Harika',
      description: 'The most beautiful person in my world 🌹',
      type: 'portrait'
    },
    {
      src: 'https://customer-assets.emergentagent.com/job_forever-harika/artifacts/hjt3dzmc_Gemini_Generated_Image_mkpvo9mkpvo9mkpv.png',
      title: 'Our Love',
      description: 'Together forever, like these two hearts 💕',
      type: 'couple'
    },
    {
      src: 'https://customer-assets.emergentagent.com/job_forever-harika/artifacts/bsr9c8c0_unnamed.jpg',
      title: 'Holding Hands',
      description: 'I want to hold your hand forever 🤝💕',
      type: 'hands'
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <ImageIcon className="w-10 h-10 text-primary" />
          </motion.div>
          <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
            Our <span className="text-gradient-love">Gallery</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beautiful memories captured in time. Each photo tells a story of our love. 📸💕
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="valentine-card glass overflow-hidden cursor-pointer group border-border/50 hover:border-primary/50"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: image.type === 'portrait' ? 'center 25%' : 'center center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-lg text-white mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>

                  {/* Heart icon on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Memory Note */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="glass-strong p-8 rounded-2xl text-center">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl text-foreground mb-4">
              Our Story in Pictures
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Every photo here holds a special memory. From the first time we met to all the beautiful 
              moments we&apos;ve shared, these images are a testament to our love. I can&apos;t wait to add 
              more memories to this gallery, Harika. 💕
            </p>
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
              <span className="font-script text-xl text-primary">Umesh & Harika</span>
              <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
            </div>
          </Card>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <motion.div
                className="max-w-4xl max-h-[80vh] relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-display text-2xl text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.description}</p>
                </div>
              </motion.div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;

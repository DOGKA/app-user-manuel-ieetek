// @ts-nocheck
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CloseIcon, ChevronRightIcon } from './icons'

interface ImageItem {
  src: string
  alt: string
  caption?: string
}

interface ImageGalleryProps {
  images: ImageItem[]
  layout?: 'grid' | 'vertical' | 'horizontal' | 'single'
  showCaptions?: boolean
}

const layoutClasses: Record<string, string> = {
  grid: 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center',
  vertical: 'flex flex-wrap justify-center gap-4 sm:gap-6',
  horizontal: 'flex overflow-x-auto gap-4 pb-4 snap-x',
  single: 'flex justify-center',
}

const imageContainerClasses: Record<string, string> = {
  grid: 'w-full max-w-[280px]',
  vertical: 'w-44 sm:w-48 lg:w-56 flex-shrink-0',
  horizontal: 'w-44 sm:w-52 flex-shrink-0 snap-center',
  single: 'w-full max-w-md mx-auto',
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  layout = 'vertical',
  showCaptions = true,
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className={layoutClasses[layout]}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={imageContainerClasses[layout]}
          >
            <button
              onClick={() => setSelectedImage(index)}
              className="group relative w-full focus:outline-none"
            >
              <div className="phone-frame overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={`/images/${image.src}`}
                  alt={image.alt}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-xs text-white/80 flex items-center gap-1">
                    Büyütmek için tıkla <ChevronRightIcon size={12} />
                  </span>
                </div>
              </div>
              {showCaptions && image.caption && (
                <p className="mt-3 text-xs text-slate-400 text-center line-clamp-2">
                  {image.caption}
                </p>
              )}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-lg w-full"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors"
              >
                <CloseIcon size={24} />
              </button>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-4 shadow-2xl">
                <img
                  src={`/images/${images[selectedImage].src}`}
                  alt={images[selectedImage].alt}
                  className="w-full h-auto object-contain max-h-[75vh] rounded-lg"
                />
              </div>
              
              {images[selectedImage].caption && (
                <p className="mt-4 text-center text-slate-300">
                  {images[selectedImage].caption}
                </p>
              )}

              {/* Navigation dots */}
              {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === selectedImage
                          ? 'bg-green-500 w-6'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ImageGallery

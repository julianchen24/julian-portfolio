"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Define the photo data
const photos = [
  { id: 1, src: '/galleryphotos/DanielRyanJulian.png', alt: 'Gallery Photo 1' },
  { id: 2, src: '/galleryphotos/DanielRyanJulian.png', alt: 'Gallery Photo 2' },
  { id: 3, src: '/galleryphotos/DanielRyanJulian.png', alt: 'Gallery Photo 3' },
  { id: 4, src: '/galleryphotos/DanielRyanJulian.png', alt: 'Gallery Photo 4' },
  { id: 5, src: '/galleryphotos/DanielRyanJulian.png', alt: 'Gallery Photo 5' },
  { id: 6, src: '/galleryphotos/DanielRyanJulian.png', alt: 'Gallery Photo 6' },
];

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  
  const openModal = (photoId: number) => {
    setSelectedPhoto(photoId);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-20" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Home
          </Link>
        </div>
        
        {/* Title Card */}
        <div className="mb-10 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Gallery</h1>
          <p className="text-gray-600 dark:text-gray-400">A collection of photos I&apos;ve taken over the years</p>
        </div>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
              onClick={() => openModal(photo.id)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full shadow-lg">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal Overlay */}
      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={closeModal}
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Full-size image */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={photos.find(p => p.id === selectedPhoto)?.src}
                alt={photos.find(p => p.id === selectedPhoto)?.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button 
                className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ml-4"
                onClick={(e) => {
                  e.stopPropagation();
                  const prevId = selectedPhoto === 1 ? photos.length : selectedPhoto - 1;
                  setSelectedPhoto(prevId);
                }}
              >
                <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mr-4"
                onClick={(e) => {
                  e.stopPropagation();
                  const nextId = selectedPhoto === photos.length ? 1 : selectedPhoto + 1;
                  setSelectedPhoto(nextId);
                }}
              >
                <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Thumbnail navigation */}
            <div className="absolute bottom-0 inset-x-0 bg-white dark:bg-gray-800 p-4 flex space-x-2 overflow-x-auto">
              {photos.map((photo) => (
                <div 
                  key={photo.id}
                  className={`w-16 h-16 flex-shrink-0 rounded-md overflow-hidden cursor-pointer border-2 ${
                    selectedPhoto === photo.id ? 'border-blue-500' : 'border-transparent'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhoto(photo.id);
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

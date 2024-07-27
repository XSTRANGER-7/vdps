
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { photos } from '../data/galleryphotos'; // Import your photos data
import SEO from './SEO'; 

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <SEO
      title="Gallery Page - Vidya Deep Public School Website"
      description="Welcome to the Gallery page of VDPS website.Vidya deep public school Photos page . all events photos of vdps. gallery photos. annual function vdps. celebration images vidya deep. vdps website babarpur. top achools in auraiya . top schools in etawah."
      keywords="gallery page, home, website, VDPS, photos, events photos, annual function images, results, toppers, childrens day, independence day, vdps, ajitmal, babarpur, best schools, top schools, auraiya, etawah, vidya deep public school, vidya deep public school babarpur, vdps ajitmal, vdps auraiya, top schools babarpur, top schools up, top private schools, up board school in auraiya, cbse schools in auraiya"
      image="https://vidyadeeppublicschool.vercel.app/path/to/img.jpg"
      url="https://vidyadeeppublicschool.vercel.app/gallery"
    />
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-8xl">
        {photos.map((photoGroup, index) => (
          <Link 
            to={`/event/${photoGroup.eventId}`} 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center hover:opacity-85"
          >
            <div className="relative w-full h-56 sm:h-60 md:h-72">
              <img
                src={photoGroup.images[0]?.url}
                alt={photoGroup.images[0]?.alt}
                className="w-full h-full object-cover"
                style={{ padding: '10px' }} // Padding around the image
              />
            </div>
            <div className="w-full bg-black text-white py-4 text-center">
              <p className="text-lg font-semibold">{photoGroup.eventName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;


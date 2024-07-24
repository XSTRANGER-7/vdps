// import React from 'react';
// import { albums } from '../data/albums'; // Import your albums data here

// const Gallery = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {albums.map((album, index) => (
//           <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
//             <img src={album.cover} alt={album.title} className="w-full h-auto" />
//             <div className="p-4">
//               <h2 className="text-2xl font-bold mb-2">{album.title}</h2>
//               <p className="text-gray-600">{album.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;





import React from 'react';
import { photos } from '../data/galleryphotos'; // Assuming you have a photos.js file with photo data

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {photos.map((photo, index) => (
          <div key={index} className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-lg font-semibold">{photo.name}</p>
                <p className="text-sm">Some details about the photo...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;

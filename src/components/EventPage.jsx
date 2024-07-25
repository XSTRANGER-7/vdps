import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get route parameters
import { photos } from '../data/galleryphotos'; // Assuming you have a photos.js file with photo data

const EventPage = () => {
  const { eventId } = useParams(); // Get the event ID from the route parameters

  // Find the event data based on the event ID
  const eventPhotos = photos.find(photoGroup => photoGroup.eventId === eventId);

  if (!eventPhotos) {
    return <div>Event not found</div>; // Handle the case where the event is not found
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-8">{eventPhotos.eventName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-8xl">
        {eventPhotos.images.map((photo, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-56 sm:h-64 md:h-72 lg:h-96 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;

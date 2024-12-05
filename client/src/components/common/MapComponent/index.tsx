import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent: React.FC = () => {
  const position = { lat: 21.27048058044002, lng: 105.88130627486976 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDts-UTxfPMeRwGB5k5VKtoeBa1Fz_b0G4">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '300px' }}
        center={position}
        zoom={14}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

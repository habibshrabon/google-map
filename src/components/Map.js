import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const location = {
  lat: 23.750311,
  lng: 90.387909
};

const onLoad = marker =>{
  console.log('marker: ', marker);
}

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        <Marker
          onLoad={onLoad}
          position={location}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
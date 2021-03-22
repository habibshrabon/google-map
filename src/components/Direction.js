import React, { useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const location = {
  lat: 23.750311,
  lng: 90.387909,
};

function Direction(origin, destination) {
  const [directionResponse, setDirectionResponse] = useState(null);
  return (
    <LoadScript googleMapsApiKey="AIzaSyC5DqxbU72JuheDWaNmYjk-3PjrdOoldzw">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        {
            origin !== '' && destination !== '' && <DirectionsService
            // required
            options={{ 
              destination: destination,
              origin: origin,
              travelMode: 'DRIVING'
            }}
            // required
            callback={res=>{
                if(res !== null) {
                    setDirectionResponse(res);
                }
            }}
          /> 
        }
        {directionResponse && (
          <DirectionsRenderer
            // required
            options={{
              directions: directionResponse,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Direction);

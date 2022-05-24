import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import {KEY} from "../localKey"


const Maps = (props) => {
let service;
const libraries = ["places"];

const mapContainerStyle = {
  height: "100vh",
  width: "100vw"
};
const options = {
  disableDefaultUI: true,
  zoomControl: true
};
const center = {
  lat: 43.6532,
  lng: -79.3832
};

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: {KEY},
    libraries
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback(map => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(12);
    let map = mapRef.current;

    let request = {
      location: { lat, lng },
      radius: "500",
      type: ["places"]
    };

    service = new GoogleMap.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request, callback);
    function callback(results, status) {
      if (status === GoogleMap.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          let place = results[i];
          new GoogleMap.maps.Marker({
            position: place.geometry.location,
            map
          });
        }
      }
    }
  }, []);

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
      />
    </div>
  );
}

export default Maps;

// LocalKey is not being read and google react npm is not installed or not readable
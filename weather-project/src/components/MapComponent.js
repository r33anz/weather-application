import React, { useEffect} from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function LocationMarker({ setCoordinates }) {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setCoordinates({ lat, lng });
    },
    
  });
  return null;
}

const MapComponent = ({ setCoordinates, className , coordinates }) => {
   

  useEffect(() => {
  }, []);
 
  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      className={className}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={coordinates}></Marker>
      <LocationMarker setCoordinates={setCoordinates} />
    </MapContainer>
  );
};

export default MapComponent;

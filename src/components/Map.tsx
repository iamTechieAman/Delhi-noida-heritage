import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { AlertCircle } from 'lucide-react';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface MapProps {
  center: [number, number];
  zoom?: number;
  markers?: Array<{
    coordinates: [number, number];
    title: string;
  }>;
}

const Map: React.FC<MapProps> = ({ center, zoom = 13, markers = [] }) => {
  return (
    <div className="relative h-full">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker 
            key={index} 
            position={marker.coordinates}
            icon={defaultIcon}
          >
            <Popup>
              {marker.title}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-sm text-gray-600">
        © OpenStreetMap contributors
      </div>
    </div>
  );
};

export default Map;
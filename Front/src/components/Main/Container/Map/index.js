// == Import npm
import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

// == Import
import './map.scss';

// == Composant
const Map = () => {
  // position coordinates
  const position = [43.505, -0.09];

  return (
    <div id="map">
      <MapContainer
        center={position}
        zoom={13} // map zoom
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* User marker */}
        <Marker position={position}>
          {/* Popup user marker */}
          <Popup>
            Ici, c'est chez Aodren <br /> Tout le monde est invité !
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

// == Export
export default Map;

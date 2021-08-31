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
  const position = [
    ['1', 49.1749376, -0.33423359999999996],
    ['2', 47, 1],
    ['3', 48, 1],
    ['4', 49.1749376, 1],
  ];

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
  }

  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <div id="map">
      <MapContainer
        center={position}
        zoom={2} // map zoom
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* User marker */}
        {position.map((item) => (
          <Marker position={item}>
            {/* Popup user marker */}
            <Popup>
              Bienvenu chez Turpinou <br /> Petit apéro ce soir ?
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

// == Export
export default Map;

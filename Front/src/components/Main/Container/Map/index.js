// == Import npm
import React, { useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'mapbox-gl/dist/mapbox-gl.css';

// == Import
import './map.scss';

// == Composant
const Map = ({
  trucks,
  sendTruck,
  long,
  lat,
  loadMap,
  loadingMap,
}) => {
  const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1Ijoia2V5Z2VuOSIsImEiOiJja3NrNWh6MGQwczZnMnBsNHhqYnRtMDUxIn0.dq2MMs1vSwGk8nMIj9NTxQ',
  });
  const style = 'mapbox://styles/mapbox/streets-v8';
  useEffect(() => {
    if (trucks.length === 0) {
      loadingMap();
      sendTruck();
    }
  }, []);
  let centerLong;
  let centerLat;
  if (long === 0) {
    centerLong = '2.35183';
  }
  else {
    centerLong = long;
  }
  if (lat === 0) {
    centerLat = '48.85658';
  }
  else {
    centerLat = lat;
  }

  return (
    <div id="map">
      { loadMap
      && (
        <Loader
          type="Puff"
          color="#e69512"
          height={100}
          width={100}
          className="loader"
        />
      )}
      { !loadMap
      && (
      <Map style={style} center={[centerLong, centerLat]} className="map-main">
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          {trucks.map((truck) => (
            truck.events.map((item) => <Feature key={item.id} coordinates={[item.longitude.replace(',', '.'), item.latitude.replace(',', '.')]} />)
          ))}
        </Layer>
        {trucks.map((truck) => (
          truck.events.map((item) => (
            <Link
              to={`/food-truck/${truck.id}`}
              key={item.id}
            >
              <Popup
                coordinates={[item.longitude.replace(',', '.'), item.latitude.replace(',', '.')]}
                offset={{
                  'bottom-left': [12, -38], bottom: [0, -10], 'bottom-right': [-12, -38],
                }}
                className="map-popup"
              >
                <h1>{truck.name}</h1>
              </Popup>
            </Link>
          ))
        ))}

      </Map>
      )}
    </div>
  );
};

// == Export
export default Map;

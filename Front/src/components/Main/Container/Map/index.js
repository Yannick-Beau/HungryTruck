// == Import npm
import React, { useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
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
    loadingMap();
    sendTruck();
  }, []);
  console.log(trucks);
  // const events[] = trucks.map((truck) => ({
  //   ...truck.event,
  // }));
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
      <Map style={style} center={[long, lat]} className="map-main">
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          {trucks.map((truck) => (
            truck.events.map((item) => <Feature coordinates={[item.longitude.replace(',', '.'), item.latitude.replace(',', '.')]} />)
          ))}
        </Layer>

      </Map>
      )}
    </div>
  );
};

// == Export
export default Map;

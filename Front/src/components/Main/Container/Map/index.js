// == Import npm
import React, { useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// == Import
import './map.scss';

// == Composant

const Map = ({ trucks, sendTruck }) => {
  console.log(trucks);
  const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1Ijoia2V5Z2VuOSIsImEiOiJja3NrNWh6MGQwczZnMnBsNHhqYnRtMDUxIn0.dq2MMs1vSwGk8nMIj9NTxQ',
  });
  const style = 'mapbox://styles/mapbox/streets-v8';
  return (
    <div id="map">
      <Map style={style} className="map-main">
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[47, 3]} />

        </Layer>
      </Map>
    </div>
  );
};

// == Export
export default Map;

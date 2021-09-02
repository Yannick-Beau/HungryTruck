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
  // const today = new Date();
  // const trucksFilter = trucks.map((truck) => {
  //   // console.log(truck);
  //   const eventsFilter = truck.events.filter((item) => {
  //     const hoursEndRplace = item.hours_end.replace('h', '-');
  //     const hoursEnd = hoursEndRplace.split('-');
  //     console.log(parseInt(hoursEnd[0], 10), parseInt(hoursEnd[1], 10));
  //     return item.day === 'mardi' && ((parseInt(hoursEnd[0], 10) >= 1 && parseInt(hoursEnd[1], 10) > 10) || parseInt(hoursEnd[0], 10) > 1);
  //   });
  //   // console.log('eventsFilter : ', eventsFilter);
  //   if (eventsFilter.length > 0) {
  //     return {
  //       ...truck,
  //       events: eventsFilter,
  //     };
  //   }
  //   return {
  //     ...truck,
  //     events: [],
  //   };
  // });
  // console.log('trucksFilter : ', trucksFilter);

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

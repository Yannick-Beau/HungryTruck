// == Import npm
import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './map.scss';

// == Composant
const LogIn = () => {
  const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1Ijoia2V5Z2VuOSIsImEiOiJja3NrNWh6MGQwczZnMnBsNHhqYnRtMDUxIn0.dq2MMs1vSwGk8nMIj9NTxQ',
  });
  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(1);
  // const [lat, setLat] = useState(47);
  // const [zoom, setZoom] = useState(6);
  // new mapboxgl.Marker({ color: 'red' }).setLngLat([1, 47]).addTo(map);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });
  // });
  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });
  const style = 'mapbox://styles/mapbox/streets-v8';
  return (
    <Map style={style} height="600px" width="600px">
      {/* <Layer type="symbol" id="marker2" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer> */}
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.491747846041145, 51.3233379650232]} />
        <Feature coordinates={[-0.181747846041145, 50.3233379650232]} />
        <Feature coordinates={[-0.171747846041145, 53.3233379650232]} />
      </Layer>
    </Map>
  );
};

// == Export
export default LogIn;

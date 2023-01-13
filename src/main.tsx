import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

if(!navigator.geolocation){
  alert('Your browser does not have an option for geolocation :(');
  throw new Error('Your browser does not have an option for geolocation :(');
}

mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFuZ3VlcnJhOTIiLCJhIjoiY2xjdXNkdmVqMWNybTNxcGhzZXc0azVlZiJ9.P3IJ0Rate0IDViWfpHoquA';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)

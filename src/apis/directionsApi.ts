import axios from 'axios';

const directionsApi = axios.create({
   baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
   params: {
      alternatives: false,
      geometries: 'geojson',
      overview: 'simplified',
      steps: false,
      access_token: 'pk.eyJ1IjoianVsaWFuZ3VlcnJhOTIiLCJhIjoiY2xjdXNkdmVqMWNybTNxcGhzZXc0azVlZiJ9.P3IJ0Rate0IDViWfpHoquA'
   }
})

export default directionsApi;
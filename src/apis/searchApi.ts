import axios from 'axios';

const searchApi = axios.create({
   baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
   params: {
      limit: 5,
      language: 'es',
      access_token: 'pk.eyJ1IjoianVsaWFuZ3VlcnJhOTIiLCJhIjoiY2xjdXNkdmVqMWNybTNxcGhzZXc0azVlZiJ9.P3IJ0Rate0IDViWfpHoquA'
   }
})

export default searchApi;
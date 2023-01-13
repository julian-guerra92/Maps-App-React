import { useContext, useState } from 'react';
import { PlacesContext, MapContext } from '../context';
import { Feature } from '../interfaces/places';
import { LoadingPlaces } from './';

export const SearchResult = () => {

   const { isLoadingPlaces, places, userLocation } = useContext(PlacesContext);

   const { map, getRouteBetweenPoint } = useContext(MapContext);

   const [activeId, setActiveId] = useState('');

   const onPlaceClicked = (place: Feature) => {
      const [lng, lat] = place.center;
      setActiveId(place.id);
      map?.flyTo({
         zoom: 14,
         center: [lng, lat]
      })
   }

   const getRoute = (place: Feature) => {
      if (!userLocation) return;
      const [lng, lat] = place.center;
      getRouteBetweenPoint(userLocation, [lng, lat]);
   }

   if (isLoadingPlaces) {
      return (
         <LoadingPlaces />
      )
   }

   if (places.length === 0) {
      return <></>
   }

   return (
      <ul className="list-group mt-3">
         {
            places.map(place => (
               <li
                  key={place.id}
                  className={`list-group-item list-group-item-action pointer ${activeId === place.id ? 'active' : ''}`}
                  onClick={() => onPlaceClicked(place)}
               >
                  <h6>{place.text}</h6>
                  <p
                     style={{
                        fontSize: '11px'
                     }}
                  >
                     {place.place_name}
                  </p>
                  <button
                     onClick={() => getRoute(place)}
                     className={`btn btn-sm ${activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary'}`}
                  >
                     Address
                  </button>
               </li>
            ))
         }
      </ul>
   )
}

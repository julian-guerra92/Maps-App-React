import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {

   const { isMapReady, map } = useContext(MapContext)

   const { userLocation } = useContext(PlacesContext)

   const onClick = () => {
      if (!isMapReady) throw new Error('Map is not ready!');
      if (!userLocation) throw new Error('Does not have location of the user!');
      map?.flyTo({
         zoom: 14,
         center: userLocation
      })
   }

   return (
      <button
         className="btn btn-success"
         onClick={onClick}
         style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 99
         }}
      >
         My Location!
      </button>
   )
}

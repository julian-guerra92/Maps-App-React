import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResult } from './';

export const SearchBar = () => {

   const debounceRef = useRef<number>();

   const { searchPlacesByTerm } = useContext(PlacesContext);

   const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
      if (debounceRef.current)
         clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
         //todo: buscar o ejecutar la consulta
         searchPlacesByTerm(event.target.value);
      }, 1000)
   }

   return (
      <div className='search-container'>
         <input type="text"
            className="form-control"
            placeholder="Find Place..."
            onChange={onQueryChanged}
         />
         <SearchResult />
      </div>
   )
}

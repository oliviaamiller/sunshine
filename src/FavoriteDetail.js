import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleLocation } from './services/fetch-utils';
import { getFutureWeather } from './services/api-utils';
import WeatherDetails from './WeatherDetails';
import Spinner from './Spinner';

export default function FavoriteDetail() {
  const params = useParams();
  const [locationDetails, setLocationDetails] = useState('');
  const [futureForecast, setFutureForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    async function fetchSupabase() {
      const data = await getSingleLocation(params.id);
      setLocationDetails(data);
    }

   // nice! so only make the fetch if there is no data, to account for page changing?
    if (!locationDetails.lat){
      fetchSupabase();
    }
   
  }, [params.id, locationDetails.lat]);

  useEffect(() => {

    async function fetchFuture() {
      setIsLoading(true);
      const fiveDay = await getFutureWeather(locationDetails.lat, locationDetails.long);
      
      setFutureForecast(fiveDay);
      setIsLoading(false);
    }
    if (!futureForecast.current && locationDetails.lat){
      fetchFuture();
    }
  }, [futureForecast, locationDetails.lat, locationDetails.long]);

  if (futureForecast.lat) {
    return (
      
      <div className='location'>
        {isLoading
          ? <Spinner />
          : <>
            <p>{locationDetails.city_name}</p>
          
          {/* no need for these to be props, since they never change. might as well just define this array in WeatherDetails */}
            {futureForecast.daily.map((day, i) => <WeatherDetails key={`${day.dt} + ${i}`} dayForecast={day}/>)}
          </>
        }
      </div>
     
      
    );
  } else { 
    return null; 
  }
}
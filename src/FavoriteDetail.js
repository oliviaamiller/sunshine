import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleLocation } from './services/fetch-utils';
import { getFutureWeather } from './services/api-utils';
import WeatherDetails from './WeatherDetails';
import Spinner from './Spinner';

export default function FavoriteDetail() {
  const [locationDetails, setLocationDetails] = useState('');
  const [futureForecast, setFutureForecast] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
  
  useEffect(() => {
    async function fetchSupabase() {
      const data = await getSingleLocation(params.id);
      setLocationDetails(data);
    }

   
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
          
            {futureForecast.daily.map((day, i) => <WeatherDetails key={`${day.dt} + ${i}`} dayForecast={day} months={months} days={days}/>)}
          </>
              
        
          
        }
      </div>
     
      
    );
  } else { return null; }
}
function getCoordinates(lat, long, dx, dy) {
  const EARTH_RADIUS = 6371000.0;

  const newLat = Number((lat + (dx / EARTH_RADIUS) * (180 / Math.PI)).toFixed(8));
  const newLong = Number((long + (dy / EARTH_RADIUS) * (180 / Math.PI) / Math.cos(lat * Math.PI / 180)).toFixed(8));

  
  return {
    lat: newLat,
    long: newLong
  };

}

//Dist = distance in meters
export function buildCoordsByDistance(lat, long, dist) {
  const coordObj = [];
  let flag = dist;
  const step = 40233.6;

  while (flag > -dist - 1000) {
    coordObj.push(getCoordinates(lat, long, flag, 0));
    coordObj.push(getCoordinates(lat, long, 0, flag));
    
    flag = flag - step;
  }

  return coordObj;
}


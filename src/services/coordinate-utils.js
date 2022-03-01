export function getCoordinates(lat, long) {
  const EARTH_RADIUS = 6371000.0;

  const newLat = lat + (80467.2 / EARTH_RADIUS) * (180 / Math.PI);
  const newLong = long + (0 / EARTH_RADIUS) * (180 / Math.PI) / Math.cos(lat * Math.PI / 180);

  
  return {
    lat: newLat,
    long: newLong
  };

}




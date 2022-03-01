export function getCoordinates(lat, long, dx, dy) {
  const EARTH_RADIUS = 6371000.0;

  const newLat = lat + (dx / EARTH_RADIUS) * (180 / Math.PI);
  const newLong = long + (dy / EARTH_RADIUS) * (180 / Math.PI) / Math.cos(lat * Math.PI / 180);

  
  return {
    lat: newLat,
    long: newLong
  };

}




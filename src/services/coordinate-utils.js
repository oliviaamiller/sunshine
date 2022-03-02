function getCoordinates(lat, long, distanceX, distanceY) {
  const EARTH_RADIUS = 6371.07103; // in km

  const newLat = Number((lat + (distanceX / EARTH_RADIUS) * (180 / Math.PI)).toFixed(4));
  const newLong = Number((long + (distanceY / EARTH_RADIUS) * (180 / Math.PI) / Math.cos(lat * Math.PI / 180)).toFixed(4));

  return {
    lat: newLat,
    long: newLong
  };
}

// dist = distance in km
export function buildCoordsByDistance(lat, long, dist) {
  if (lat && long) {
    const coordinateArray = [];
    let loopDistance = dist;
    const step = 50; // distance (in km) to reduce each coordinate by

    while (loopDistance > (dist * -1)) {
      coordinateArray.push(getCoordinates(lat, long, loopDistance, 0));
      coordinateArray.push(getCoordinates(lat, long, 0, loopDistance));
      loopDistance = loopDistance - step;
    }
    return coordinateArray;
  } else {
    //eslint-disable-next-line
    console.error('lat and long in buildCoordsByDistance are invalid: ', `${lat} & ${long}`);
  }
}

export function calculateDistanceAsCrowFlies(lat1, long1, lat2, long2) {
  // Haversine Formula
  // The haversine formula determines the great-circle 
  // distance between two points on a sphere given their longitudes and latitudes.
  // Source: https://en.wikipedia.org/wiki/Haversine_formula
  // Addtional source w/ example js formula: https://stackoverflow.com/a/21623206/2786543

  const EARTH_RADIUS = 6371.07103; // in km
  const p = 0.017453292519943295;    // Math.PI / 180
  const a = 0.5 - Math.cos((lat2 - lat1) * p) / 2 +
    Math.cos(lat1 * p) * Math.cos(lat2 * p) *
    (1 - Math.cos((long2 - long1) * p)) / 2;
  const distance = (2 * EARTH_RADIUS) * Math.asin(Math.sqrt(a));

  return Number(distance.toFixed(4));
}
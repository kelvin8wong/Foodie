require('dotenv').config();

export function getRestaurantList (lat, lng) {
  const foursquareURL = `https://api.foursquare.com/v2/venues/search?v=20171123&ll=${lat},${lng}&radius=100000&client_id=${process.env.REACT_APP_clientId}&client_secret=${process.env.REACT_APP_clientSecret}&categoryId=4bf58dd8d48988d1d3941735`

  return fetch(foursquareURL).then(response => response.json());
}

export function getRestaurantPhoto (id) {
  const foursquarePhotoURL = `https://api.foursquare.com/v2/venues/${id}/photos?client_id=${process.env.REACT_APP_clientId}&client_secret=${process.env.REACT_APP_clientSecret}&v=20171018`
  return fetch(foursquarePhotoURL).then(response => response.json())
}
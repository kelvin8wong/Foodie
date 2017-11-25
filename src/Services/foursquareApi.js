import superagent from 'superagent';

export function getRestaurantList (lat, lng) {
  const foursquareURL = `https://api.foursquare.com/v2/venues/search?v=20171123&ll=${lat},${lng}&radius=100000&client_id=FERSEHDMQU451JXRY1QN5OULADS41SKGR4NWOTNFTIT4HOFS&client_secret=AMJOPX04B0YKCJ34CZ1EN2R5CEFCXIRKPTPXWHU4QE51RSIS&categoryId=4bf58dd8d48988d1d3941735`
  superagent
  .get(foursquareURL)
  .query(null)
  .set('Accept', 'text/json')
  .end((err, res) => {
    if (err) console.log(err);
    console.log(res);
  })
}
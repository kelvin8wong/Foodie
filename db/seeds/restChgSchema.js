
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('membsels').del().then(() => knex('restaurants').del())

    .then( () => {
      //insert seed entries for restaurants
      return knex('restaurants').insert([
      {restid: '551045fe498e2de04c7c88', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 3.2, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Indigo Age", pricetier: 3},
      {restid: '54153191498e60747d39uob', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 5.8, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Meet on Main", pricetier: 1},
    ]);
  })
  // Insert seed entries to the restaurants file
  .then( ()=> {
    return knex('membsels').insert([
      {memberid: "isaiah", memberrest: "the-veggie-garden-vancouver",
        comments: "a very nice restaurant, except the potatoes were undercooked"},
      {memberid: "isaiah", memberrest: "nuba-in-gastown-vancouver",
        comments: ""},
      {memberid: "marcos", memberrest: "54153191498e60747d391a7b",
        comments: "Really weird food. Different, but nice, really enjoyable."},
      {memberid: "marcos", memberrest: "551045fe498e2de04c7cc1b7",
        comments: "I don't normally like Mexican food, but this was nice."}
    ]);
  })
};

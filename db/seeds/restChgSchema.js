
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('membsels').del().then(() => knex('restaurants').del())

    .then( () => {
      //insert seed entries for restaurants
      return knex('restaurants').insert([
      {restid: 'the-veggie-garden-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 5.5, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Veggie Garden", pricetier: 2},
      {restid: '551045fe498e2de04c7cc1b7', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 3.2, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Indigo Age", pricetier: 3},
      {restid: 'nuba-in-gastown-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 8.5, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Nuba", pricetier: 3},
      {restid: 'tap-and-barrel-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4.2, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Tap and Barrel", pricetier: 1},
      {restid: 'budgies-burritos-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4.1, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Budgies Burritos", pricetier: 1},
      {restid: 'grub-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Grub", pricetier: 1},
      {restid: 'graze-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Graze", pricetier: 2},
      {restid: 'tera-v-burger-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4.9, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Terra-V-Burger", pricetier: 1},
      {restid: 'tao-organics-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 7.2, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Tao Organics", pricetier: 3},
      {restid: 'veggie-bowl-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 2.1, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Veggie Bowl", pricetier: 2},
      {restid: '54153191498e60747d391a7b', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 5.8, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Meet on Main", pricetier: 1},
      {restid: 'cafe-deux-soleils-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 9.0, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Cafe Deux Soleis", pricetier: 3},
      {restid: 'the-eatery-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 1.7, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "The Eatery", pricetier: 2},
      {restid: 'heirloom-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 7.7, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Heirloom", pricetier: 2},
      {restid: 'bandidas-taqueria-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 6.8, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA',
      addr1: '375 Valencia St', zipCode: '94103', restname: "Bandidas Taqueria", pricetier: 1}
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

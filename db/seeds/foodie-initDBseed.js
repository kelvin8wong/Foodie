
exports.seed = (knex, Promise) => {
  // Deletes ALL existing data from tables in required table order
  return knex('membsels').del()
    .then( () => knex('restaurants').del())
    .then( () => knex('members').del())
    .then( () => {
      // Inserts seed entries for members table
      return knex('members').insert([
        {member: 'jlpcort6', nameFirst: 'Joseph', nameLast: 'Cortina', email: 'jlpcort6@gmail.com', 
        password: 'billybob', goodForKids: true, hasParking: true},
        {member: 'marcos', nameFirst: 'Marcos', nameLast: 'Dias', email: 'marcosdias@gmail.com', 
        password: 'markymark', takeOut: true, serveAlcohol: true},
        {member: 'kelvin', nameFirst: 'Kelvin', nameLast: 'Wong', email: 'kelvinwong@gmail.com', 
        password: 'howdydoody'},
        {member: 'isaiah', nameFirst: 'Isaiah', nameLast: 'Christou', email: 'isaiahcristou@gmail.com', 
        password: 'bluebird', hotNew: true}
      ]);
    })
  // Insert seed entries to the restaurants file
  .then( ()=> {
    return knex('restaurants').insert([
      {restid: 'the-veggie-garden-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 5, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'indigo-age-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 3, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'nuba-in-gastown-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 8, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'tap-and-barrel-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'budgies-burritos-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'grub-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'graze-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'tera-v-burger-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'tao-organics-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'veggie-bowl-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'meet-on-main-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'cafe-deux-soleils-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'the-eatery-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'heirloom-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'},
      {restid: 'bandidas-taqueria-vancouver', url: 'https://www.yelp.com/biz/four-barrel-coffee-vancouver', imageUrl: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
      rating: 4, phone: '+14152520800', coordLong: -122.42184275, coordLat: 37.7670169511878,
      city: 'Vancouver', country: 'US', addr2: '', addr3: '', state: 'CA', 
      addr1: '375 Valencia St', zipCode: '94103'}
    ]);
  })
  // Insert seed entries to the restaurants file
  .then( ()=> {
    return knex('membsels').insert([
      {memberid: "isaiah", memberrest: "the-veggie-garden-vancouver",
        comments: "a very nice restaurant, except the potatoes were undercooked"},
      {memberid: "isaiah", memberrest: "indigo-age-vancouver",
        comments: "A really pretentious veggie restaurant. Waiters wre rude and indifferent. Don't go eat  at ths joint!"},
      {memberid: "isaiah", memberrest: "nuba-in-gastown-vancouver'",
        comments: ""},
      {memberid: "isaiah", memberrest: "budgies-burritos-vancouver",
        comments: "A great Mexican veggie restaurant. Had a great time."},
      {memberid: "marcos", memberrest: "nuba-in-gastown-vancouver'",
        comments: "Really weird food. Different, but nice, really enjoyable."},
      {memberid: "marcos", memberrest: "budgies-burritos-vancouver",
        comments: "I don't normally like Mexican food, but this was nice."},
      {memberid: "marcos", memberrest: "the-eatery-vancouver",
        comments: "The eatery is the place to go. Excellent vegitarian restaurant."}
    ]);
  })
};

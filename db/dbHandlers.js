/* Foodie project db handlers:
    Module containing all the foodie db handlers, that is inserting/deleting/updating data for the tables in
    the foodie db. These tables consist of members, restaurants and restaurant selections by each member if
    any.
*/
module.exports = function makeDBhandlers (knex) {
  return  {
    
    //check for the existence of a member
    checkMembExists: (member) => {
      return knex('members').select('member').where('member', member)
        .then(memberID  => {
          console.log(memberID);
          return (memberID = null) ? false  : true       
        })
    },
    
    //add a new member to the members table
    addMember: (member) => {
      return knex('members')
        .insert({
            member:       member.id,
            nameFirst:    member.fName,
            nameLast:     member.lName,
            email:        member.email,
            password:     member.pass,
            goodForKids:  member.gfk,
            takeOut:      member.to,
            hotNew:       member.hn,
            hasParking:   member.hp,
            serveAlcohol: member.sa,
            reservReq:    member.rr
          }) 
    }, //fin addmember
    
    //update member profile
    updMember: (member) =>  {
      return 
        knex('members')
          .where('member', member)
          .update({
            nameFirst:    member.fName,
            nameLast:     member.lName,
            email:        member.email,
            password:     member.pass,
            goodForKids:  member.gfk,
            takeOut:      member.to,
            hotNew:       member.hn,
            hasParking:   member.hp,
            serveAlcohol: member.sa,
            reservReq:    member.rr
          })
    }, //fin updMember
    
  //check for the existence of a store
  checkRestExists: (rest) => {
      return knex('restaurants').select('restID').where('restID', rest)
        .then(restID  => {
          console.log(restID);
          return (restID = null) ? false  : true       
        })
    },   
  //add a new restaurant to the restaurants table
    addRestaurant: (rest) => {
      return knex('restaurants')
        .insert({
          restID:     rest.id,
          url:        rest.url,
          imageUrl:   rest.image,
          rating:     rest.rating,
          phone:      rest.phone,
          coordLong:  rest.clong,
          coordLat:   rest.clat,
          city:       rest.city,
          country:    rest.country,
          addr2:      rest.addr2,
          addr3:      rest.addr3,
          state:      rest.state,
          addr1:      rest.addr1,
          zipCode:    rest.zcode
        }) 
    }, //fin addRestaurant
    addMemberSel: (sel) => {
      return knex('membSels')
        .insert({
          memberID:   sel.member,
          memberRest: sel.rest,
          comments:   sel.comments
        })
    }
  } 
}
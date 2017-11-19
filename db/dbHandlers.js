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
          })  //fin insert
    }, //fin addmember
    
    //update member profile
    updMember: (member) =>  {
      return 
        knex('members')
          .where('member', member)
          .update({
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
    },
    
  
  } 
}
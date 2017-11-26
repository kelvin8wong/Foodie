/* Foodie project db handlers:
    Module containing all the foodie db handlers, that is inserting/deleting/updating data for the tables in the foodie db. These tables consist of members, restaurants and restaurant selections by each member if any.
*/
module.exports = function makeDBhandlers (knex) {

  return  {

    //check for the existence of a member or existence and correct password
    //chkTyp: 'E' - exxistence check, 'A' - authorization check
    checkMembExistsAuth : (chkTyp, member, pass) => {
      return knex('members').select('member', 'password').where('member', member)
        .then(rtnArr  => {
          const  rtnObj = rtnArr[0];

          if (rtnObj) {
            console.log("rtn obj values: ", rtnObj.member, rtnObj.password);
          } else {
            console.log(".rtn obj values: undefined");
          }

          return rtnObj ?  {exists: true, pass: rtnObj.password} : {exists: false, pass: null}
        })
        .then(rtn => {
          // check "A" check for existence/authenticity
          return (chkTyp == "A" && rtn.exists && pass != rtn.pass) ? false : rtn.exists
        })
    },

    //get member's data
    getMemberData: (member) => {
      return knex('members').where('member', member)
        .select(
                'member', 'nameFirst', 'nameLast', 'email', 'goodForKids', 'takeOut', 'hotNew',
                'hasParking', 'serveAlcohol', 'reservReq'
               ).then(rtnArr => rtnArr[0])
    },

    //add a new member to the members table
    addMember: (newMemb) => {
      console.log('just before insert: ', newMemb);
      return knex
        .insert({
            member:       newMemb.member,
            nameFirst:    newMemb.nameFirst,
            nameLast:     newMemb.nameLast,
            email:        newMemb.email,
            password:     newMemb.password,
            goodForKids:  false,
            takeOut:      false,
            hotNew:       false,
            hasParking:   false,
            serveAlcohol: false,
            reservReq:    false
      }).into('members')
      .then(result => result)
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
    }, //fin updMember

  //check for the existence of a restaurant
  checkRestExists: (rest) => {
      return knex('restaurants').select('restid').where('restid', rest)
        .then(restID  => {
          console.log(restID);
          return restID ? true  : false
        })
    },
  //add a new restaurant to the restaurants table
    addRest: (rest) => {
      return knex('restaurants')
        .insert({
          restid:     rest.restid,
          url:        rest.url,
          imageUrl:   rest.imageUrl,
          rating:     rest.rating,
          phone:      rest.phone,
          coordLong:  rest.coordLong,
          coordLat:   rest.coordLat,
          city:       rest.city,
          country:    rest.country,
        //addr2:      rest.addr2,
        //addr3:      rest.addr3,
          state:      rest.state,
          addr1:      rest.addr1,
          zipCode:    rest.zipCode,
          name:       rest.name,
          pricetier   rest.pricetier
        })
        .then(result => result)
    }, //fin addRestaurant

//add a new restaurant to the restaurants table
    getRest: (rest) => {
      return knex('restaurants').where('restid', rest)
        .select(
          'restid', 'url', 'imageUrl', 'rating', 'phone', 'coordLong', 'coordLat', 'city', 'country',
          'addr2', 'addr3', 'state', 'addr1', 'zipCode'
        ).then(rtnArr => rtnArr[0])
    }, //fin addRestaurant

    //check for the existence of a member selection
    checkMembSelExists: (member, rest) => {
      return knex('membsels').select('memberid', 'memberrest')
        .where('memberid', member)
        .andWhere('memberrest', rest)
        .then(found  => {
          console.log(found);
          return found ? true  : false
        })
    },
    addMemberSel: (sel) => {
      return knex('membsels')
        .insert({
          memberid:   sel.member,
          memberrest: sel.restid,
          comments:   sel.comments
        })
        .then(result => result)
    },

    delMembSel: (member, rest)  =>  {
      return knex('membsels').where('memberid', member).andWhere('memberrest', rest)
    },

    getMemberSels: (member) => {
      return knex.raw(`select * from membsels join restaurants on membsels.memberrest = restaurants.restid where membsels.memberid = '${member}'`);
    }




} // fin return module function export
}
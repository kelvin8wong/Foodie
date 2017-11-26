/*
this module handles requests for retrieval of data from
database or inserting/updating data by 'routing' the http
requests to the appropriate handlers.
*/
const express = require('express')
const router = express.Router()

module.exports = (dbHandler) => {

// request check if member exists - check members file for existence
  router.get('/exist', (req, res) => {
    console.log("exists req: ", req.query.member);
    dbHandler.checkMembExistsAuth("E", req.query.member)
    .then(exists => {
      const status = exists ? "1" : "0";
      res.send(status);
    })
  });

  // request check if member and password are valid
  router.get('/auth', (req, res) => {
    console.log("sign-in req: ", req);
    dbHandler.checkMembExistsAuth("A", req.query.member, req.query.password)
    .then(valid =>  {
      if(valid) {
        req.session.member = req.query.member;
        res.send("1");
      } else {
        res.send("0");
      }
    })
  });

  // request retrieval of member data
  router.get('/mbrRtv', (req, res)  =>  {
    console.log("query member: ", req.query.member)
    dbHandler.getMemberData(req.query.member)
    .then(data  =>  {
      console.log("retrieved member data: ", data);
    })
  });

  // request retrieval of member selected restaurants
  router.get('/getMbrSels', (req, res)  =>  {
    dbHandler.getMemberSels(req.query.member)
    .then(data  =>  {
      console.log("retrieved member selections: ", data);
      res.json(data);
    })
  });

  // request from the favorites **
  router.get('/getMyFavourites', (req, res)  =>  {
    dbHandler.getMemberSels(req.session.member)
    .then(data  =>  {
      console.log("retrieved member selections: ", data);
      res.json(data.rows);
    })
  });

  // add a new member
  router.post('/membAdd', (req, res)  =>  {
    //first check he does not exist
    dbHandler.checkMembExistsAuth("E", req.body.member)
    .then(exists => {
      //if not already exists, then add
      if (!exists)  {
        dbHandler.addMember(req.body);
        return "1";
      } else {
        return "0";
      }
    })
    .then(status => {
      console.log("add member: ", req.body.member, " status: ", status);
      res.send(status)
    })
  });

  // update member data
  router.post('/membUpd', (req, res) => {
    dbHandler.updMemberData(req.body.data)
    .then(status  =>  {
      console.log("upd member data: ", req.body.data, " status: ", status);
    })
  });

  // add a member selection (restaurant)
  router.post('/selAdd', (req, res) =>  {
    //extract component data from body
    const member    = req.body.member;
    const comments  = req.body.comments;
    const rest    =   req.body.restdata;
    const restid  =   rest.restid;
    //first check that member selection does not already exist -error otherwise
    dbHandler.checkMembSelExists(member, restid)
      .then(found =>  {
        if (found) {
            console.log("memberSel found: ", member, restid);
            res.send("0");
        } else  {
          //add restaurant if not already exists
          console.log("before check rest exists");
          checkRestExists(rest)
            .then(exists => {
              if (!exists)  {
                //add restaurant to restaurants table
                console.log("before adding rest");
                addRest(rest);
              }
            //add member selection to table
            console.log("before add member selection");
            addMemberSel({member: member, restid: restid, comments: comments});
            res.send("1");
          })
        }
      })
  });

  // delete a member selection
  router.post('/selDel', (req, res) =>  {
    dbHandler.delMembSel(req.body.member, req.body.rest)
    .then(status  =>  {
      console.log("delete memb sel: ", req.body.member, req.body.rest, " status: ", status);
    })
  });

  return router
}

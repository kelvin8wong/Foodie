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
      const status = valid ? "1" : "0";
      res.send(status);
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
    })
  });

  // add a new member
  router.post('/membAdd', (req, res)  =>  {
    dbHandler.addNewMember(req.body.membData)
    .then(status => {
      console.log("add member: ", req.body.membData.member, " status: ", status);
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
    dbHandler.addMembSel(req.body.data)
    .then(status  =>  {
      console.log("add member selection: ", req.body.data, " status: ", status);
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

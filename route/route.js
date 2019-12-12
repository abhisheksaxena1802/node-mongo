const express = require('express');
const router = express.Router();

router.get('/user', async (req, res) => {
  const dbReference = req.app.locals.db.collection("user");
  try {
    const users = await dbReference.find().toArray();
    if (users.length === 0) {
      res.status(500).send({ "message": "No user found" });
    } else {
      res.status(200).send(users)
    }
  } catch (error) {
    res.status(400).send({ error: error })
  }

  router.post('/user', async (req, res) => {
    const dbReference = req.app.locals.db.collection("user");
    try {
      const body = {
        "username": req.body.username,
        "password": req.body.password
      }
      const pushUser = await dbReference.insertOne(body);
      res.status(200).send({ message: "user created" })

    } catch (error) {
      res.status(400).send({ error: error })
    }

  })


})

module.exports = router;
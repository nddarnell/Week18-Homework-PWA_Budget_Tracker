const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", async ({body}, res) => {
  try {
    let data = await Transaction.create(body)
    res.json(data)

  } catch (error) {
    console.log(error)
    res.send(error)
  }
});

router.post("/api/transaction/bulk", async ({body}, res) => {
  try {
    let data = await Transaction.insertMany(body)
    res.json(data)
  
  } catch (error) {
    console.log(error)
    res.send(error)
  }

});

router.get("/api/transaction", async (req, res) => {
  try {
    let data = await Transaction.find({}).sort({date: -1})
    res.json(data)
    
  } catch (error) {
    console.log(error)
    res.send(error)
  }
});

module.exports = router;
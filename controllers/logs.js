const express = require('express');

const router = express.Router();

const Logs = require('../models/logs');

  //Index
  router.get("/", async (req, res) => {
    await Logs.find({})
      .then((allLogs) => {
        res.render("Index", { logs: allLogs });
        res.redirect("/logs");
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  //New
  router.get("/new", (req, res) => {
    res.render("New");
  });

  //Delete
  router.delete("/:id", async (req, res) => {
    await Logs.findByIdAndRemove(req.params.id)
      .then(res.redirect("/logs"))
      .catch((error) => {
        console.log(error.message);
      });
  });

  //Update
  router.put('/:id', async (req,res) => {

      if (req.body.shipIsBroken === "on") {
          req.body.shipIsBroken = true;
        } else {
          req.body.shipIsBroken = false;
        }


      await Logs.findByIdAndUpdate(req.params.id, req.body);

      res.redirect(`/logs/${req.params.id}`);

  })

  //Create
  router.post("/", async (req, res) => {
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }

    await Logs.create(req.body)
      .then((createdLog) => {
          res.redirect("/logs")
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  //Edit
  router.get("/:id/edit", async (req, res) => {
    await Logs.findById(req.params.id)
      .then((foundLog) => {
        res.render("Edit", { log: foundLog });
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  //Show
  router.get("/:id", async (req, res) => {
    const foundLog = await Logs.findById(req.params.id);

    res.render("Show", { log: foundLog });
  });

  module.exports = router;

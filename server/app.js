const express = require("express");
var bodyParser = require("body-parser");
const { Agent } = require("./model");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/agents", async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.post("/agent/add", async (req, res, next) => {
  await Agent.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    photoUrl: req.body.photoUrl,
    agentLicence: req.body.agentLicence,
    address: req.body.address,
    practiceAreas: req.body.practiceAreas,
    aboutMe: req.body.aboutMe,
  })
  return res.status(201).json({
    message: "created",
    status: true,
  });
});

app.get("/agents/practice-areas/:area", async (req, res, next) => {
  const area = req.params.area;
  const agents = await Agent.findOne({ where: { practiceAreas: area } });
  return res.json(agents);
});

module.exports = app;

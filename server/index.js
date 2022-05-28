const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const db = require("./models");

const { Equipment } = require("./models");

app.get("/get-equipments", (req, res) => {
    Equipment.findAll().then((equip) => {
        res.send(equip);
    }).catch((err) => {
        console.log(err);
    });
})

app.post("/add-equipment", (req, res) => {
    Equipment.create({
        equipmentName: req.body.equipmentName,
        quantity: req.body.quantity,
        roomNo: req.body.roomNo,
        description: req.body.description,
        remarks: req.body.remarks,
    }).catch((err) => {
        if (err) {
          console.log(err);
        }
    });

    res.send("New Equipment Added");
})

db.sequelize.sync().then((req) => {
  app.listen(3001, () => {
    console.log("Server Running");
  });
});

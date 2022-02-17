const express = require("express");
const dataModel = require("../models/Data");
const app = express();

app.get("/getData", async (request, response) => {
    const userData = await dataModel.find({});
    

    try {
        response.render('index', { title: 'User List', userData: userData});
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/saveData", async (request, response) => {
    const userData = new dataModel(request.body);

    try {
        await userData.save();
        response.status(200).send(userData);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;
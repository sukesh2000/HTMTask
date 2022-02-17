const express = require("express");
const dataModel = require("../models/Data");
const app = express();

app.get("/getData", async (request, response) => {
    const userData = await dataModel.find({});
    userData.sort((a, b)=>{
        if (a.course < b.course){
            return -1;
        }
        if ( a.course > b.course ){
            return 1;
        }
        return 0;
    })
    
    tmp = {};
    userData.forEach((data)=>{
        let course =  data.course;
        delete this.course;
        if(!(course in tmp)){
            tmp[course] = [];
            tmp[course].push(data);
        }
        else{
            tmp[course].push(data);
        }
    })

    try {
        response.render('index', { title: 'User List', userData: tmp});
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
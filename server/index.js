const express = require("express")
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose")
const app = express()
var database , collection;
const DATABASE_NAME = "Visual";
app.use(cors())
app.listen(5000, () => {
    MongoClient.connect("mongodb+srv://user:Swap1234@cluster0.ljxvoxv.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("VisualData");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });

});
app.get("/data", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
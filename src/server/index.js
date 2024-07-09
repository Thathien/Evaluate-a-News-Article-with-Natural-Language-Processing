var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const FormData = require("form-data");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const APIResponseExample = require("./mockAPI.js");
const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("dist"));

app.get("/", function (req, res) {
    res.sendFile("dist/index.html");
});

app.listen(8080, function () {
    console.log("Example app listening on port 8000!");
});

app.get("/test", function (req, res) {
    res.send(APIResponseExample);
});

// POST request callBack = (req, res) 
const callBack = (req, res) => {
    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("txt", req.body.formText);
    formdata.append("lang", "en");
    formdata.append("model", "general");
    axios
        .post("https://api.meaningcloud.com/sentiment-2.1", formdata)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
};
app.post("/api", callBack);
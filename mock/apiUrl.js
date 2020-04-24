const express = require("express");
const apiUrl = express.Router();


apiUrl.get("/apiServe/list", (req, res) => {
    res.send({
        "example": [
            {"firstName": "John", "lastName": "Doe"},
            {"firstName": "Anna", "lastName": "Smith"},
            {"firstName": "Peter", "lastName": "Jones"}
        ]
    })
})

module.exports = apiUrl;
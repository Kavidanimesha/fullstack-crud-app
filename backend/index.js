const express = require('express');
const mysql = require('mysql');
const cors = require ('cors')

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#Kavi756#",
    database: "test",

})

app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.json("Hello This is Backend")
})

app.get("/books", (req,res) => {
    const q = "SELECT * FROM books"
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req,res) => {
    const q = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("data created Okay")
    })
})

app.listen (8800 , () => {
    console.log("Server Running")
})


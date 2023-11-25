//Create web server
const express = require('express');
const app = express();
const port = 3000;
//Create database connection
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'comments'
});
//Connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
//Create database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE comments';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Database created');
    });
});
//Create table
app.get('/createcommentstable', (req, res) => {
    let sql = 'CREATE TABLE comments(id int AUTO_INCREMENT, comment VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Comments table created');
    });
});
//Insert comment
app.get('/addcomment1', (req, res) => {
    let comment = { comment: 'This is comment number 1' };
    let sql = 'INSERT INTO comments SET ?';
    let query = db.query(sql, comment, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Comment 1 added');
    });
});
//Insert comment
app.get('/addcomment2', (req, res) => {
    let comment = { comment: 'This is comment number 2' };
    let sql = 'INSERT INTO comments SET ?';
    let query = db.query(sql, comment, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Comment 2 added');
    });
});
//Select comments
app.get('/getcomments', (req, res) => {
    let sql = 'SELECT * FROM comments';
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send('Comments fetched');
    });
});
//Select single comment
app
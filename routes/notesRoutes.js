const fs = require("fs");
const notes = require('express').Router();
const {readFromFile, writeToFile, readAndAppend} = require('../helpers/fsUtils.js');
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data))); 
})

notes.get('/:id', (req, res) => {
    console.log(req.params.id);
    // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

notes.post('/', (req, res) => {
    console.log(req.body);

    const{title, text} = req.body;

    if(req.body){
        const newNote = {
            title,
            text,
            id: uuidv4()
        }
        readAndAppend(newNote, './db/db.json');
        res.json("note added successfuly");
    }
    else{
        res.error("error in adding note");
    }
});

notes.delete('/:id', (req, res) => {
    console.log(req.params);
    const params = req.params.id;
    readFromFile("./db/db.json")
    .then((data) => {
        let notes = JSON.parse(data)
    
    console.log(typeof notes);
    console.log(notes);
    notes = notes.filter((note) => note.id !== params)

    writeToFile("./db/db.json", notes);

    res.status(200).send();
})
})
module.exports = notes;

const notes = require('express').Router();
const {readFromFile, readAndAppend} = require('../helpers/fsUtils.js');
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data))); 
})

notes.get('/:id', (req, res) => {
    console.log(req.params);
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
    readFromFile('./db/db.json').then((data) => res.send(req.body.data));
})

module.exports = notes;
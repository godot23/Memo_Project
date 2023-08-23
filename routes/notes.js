const notes = require('express').Router();
const {readFromFile, readAndAppend} = require('../helpers/fsUtils');
const {v4: uuidv4} = require (uuid);

notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)))
})

notes.post('/', (req, res) => {
    console.log(req.body);

    const{title, text} = req.body;

    if(req.body){
        const newNote = {
            title,
            tip
        }
        readAndAppend(newNote, './db/notes.json');
        res.json("note added successfuly");
    }
    else{
        res.error("error in adding note");
    }
});

modules.exports = notes;
const api = require('express').Router();
const {v4: uuidv4} = require('uuid');
const{readAndAppend, readFromFile} = require('../helpers/fsUtils');

const apiArray = require('../db/db.json');
const fs = require('fs/promises');
const uniqid = require('uniqid')

// load adn parse data file
// provide ability to: 
// - read all enties
// - read single entry by ID
// - add new entry
// * get matching entires by search critreria

let data = {};

/* Model structure */
/*
{ 

        "name":"string",
        "description":"string",
        "imageURL": "string",
        "difficulty": "number"

}


*/

async function init() {
    try {
        data = JSON.parse(await fs.readFile('./models/data.json')); 
    } catch (err) {
        console.error("Error reading database");
    }

    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create
        };
        next();
    };
}

async function getAll(query) {
    let cube = Object
    .entries(data)
    .map(([id, v]) => Object.assign({}, { id }, v));

    //filter cubes by query params

    if (query.search) {
        cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()))
    }

    if (query.from) {
        cubes = cubes.filter(c => c.difficulty >= Number(query.from))
    }

    if (query.to) {
        cubes = cubes.filter(c => c.difficulty <= Number(query.to))
    }

    return cube;
}

async function getById(id) {
    return data[id];
}

async function create(cube) {
    const id = uniqid();
    data[id] = cube;

    try {
        await fs.writeFile('./models/data.json', JSON.stringify(data, null, 2));
    } catch (err){
        console.error('Error writing out database');
    }
    
}

module.exports = {
    init,
    getAll,
    getById,
    create
}
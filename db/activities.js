<<<<<<< HEAD
const { client } = require('./client');

async function createActivity({
    name, 
    description
}) {
    try {
            const { rows: [activity]} = await client.query(`
            INSERT INTO activities(name,description)
            VALUES($1, $2)
            ON CONFLICT (name) DO NOTHING
            RETURNING *;
            `, [name, description];
            return activity;
        } catch (error) {
            throw error;
        }
};


async function getAllActivities() {
    try {
        const { rows } = await client.query(`
            SELECT * FROM activities;
        `);
        return rows;
    } catch (error) {
        throw error;
    }   
    
};

//async function updateActivity()

module.exports = {
    createActivity,
    getAllActivities
}
=======
const { createInitialActivities } = require("./seedData.js");
const { client } = require("./client");

module.exports = { activities };
>>>>>>> eb3351d63f8a3956ba3d63a8d13bca6e1788d037

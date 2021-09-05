const { client } = require("./client");

async function getActivityById(id) {
  try {
    const {
      rows: [activity],
    } = await client.query(
      `
        SELECT * FROM activities 
        where id = $1;        
        `,
      [id]
    );

    return activity;
  } catch (error) {}
}

async function getAllActivities() {
  try {
    const { rows: activites } = await client.query(`
    SELECT * FROM activities;
    `);
    return activites;
  } catch (error) {
    throw error;
  }
}

async function createActivity({ name, description }) {
  try {
    const {
      rows: [activity],
    } = await client.query(
      `INSERT INTO activities (name,description)
        VALUES ($1, $2)
        RETURNING *;`,
      [name, description]
    );
    return activity;
  } catch (error) {
    throw error;
  }
}

async function updateActivity({ id, name, description }) {
  try {
    const {
      rows: [activity],
    } = await client.query(
      `
    UPDATE activities
    SET name = $2, description = $3
    WHERE id = $1;
    `,
      [id, name, description]
    );

    return activity;
  } catch (error) {}
}

module.exports = {
  getActivityById,
  getAllActivities,
  createActivity,
  updateActivity,
};

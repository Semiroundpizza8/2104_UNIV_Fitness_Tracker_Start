const { createInitialUsers } = require("./seedData.js");
const { client } = require("./client");

// createUser({ username, password })
async function createUser({ username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO users(username, password) 
        VALUES($1, $2) 
        ON CONFLICT (username) DO NOTHING 
        RETURNING *;
      `,
      [username, password]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

// make sure to hash the password before storing it to the database
// getUser

// getUser({ username, password })
async function getUser({ username, password }) {
  try {
    const { rows } = await client.query(
      `
        SELECT id, username, password, active 
        FROM users;
      `,
      [username, password]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

// this should be able to verify the password against the hashed password
// getUserById

// getUserById(id)
async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(`
          SELECT id, username, active
          FROM users
          WHERE id=${userId}
        `);

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    throw error;
  }
}

// select a user using the user's ID. Return the user object.
// do NOT return the password
// getUserByUsername
async function getUserByUsername(username) {
  try {
    const { rows: username } = await client.query(`
          SELECT id 
          FROM users
        `);

    if (!username) {
      return null;
    }

    return { user };
  } catch (error) {
    throw error;
  }
}

// getUserByUsername(username)
// select a user using the user's username. Return the user object.

module.exports = {
  client,
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
};

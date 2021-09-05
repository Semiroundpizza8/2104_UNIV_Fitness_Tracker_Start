const { client } = require("./client");

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
    console.error(error);
    throw error;
  }
}

async function getUser({ username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * FROM users
      WHERE usernanme = $1;      
      `,
      [username]
    );

    return user;
  } catch (error) {}
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * from users
      WHERE id = $1;
      `,
      [id]
    );

    delete user.password;

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * FROM users
      where username = $1
      `,
      [username]
    );

    return user;
  } catch (error) {}
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
};

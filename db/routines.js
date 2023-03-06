const { client } = require("./client");

const { getUserByUsername } = require("./users");

async function createRoutine({ creatorId, isPublic, name, goal }) {
  try {
    const {
      rows: [routine],
    } = await client.query(
      `
      INSERT INTO routines("creatorId", "isPublic", name, goal)
      VALUES($1, $2, $3, $4)
      ON CONFLICT (name) DO NOTHING
      RETURNING *;    
      `,
      [creatorId, isPublic, name, goal]
    );

    return routine;
  } catch (error) {
    throw error;
  }
}

async function getRoutineById(id) {
  try {
    const {
      rows: [routine],
    } = await client.query(
      `
        SELECT * from routines
        WHERE id = $1;
        `,
      [id]
    );

    return routine;
  } catch (error) { }
}

async function getRoutinesWithoutActivities() {
  try {
    const { rows: routines } = await client.query(`
    SELECT * FROM routines;  
    `);
    return routines;
  } catch (error) {
    throw error;
  }
}

async function getAllRoutines() {
  try {
    const {
      rows: [routine],
    } = await client.query(
      `
        SELECT * FROM routines;
        `,
      [routine]
    );

    return routine;
  } catch (error) { }
}

async function getAllPublicRoutines() {
  try {
    const { rows: routines } = await client.query(`
    SELECT * FROM routines
    WHERE "isPublic" = true;   
    `);
    return routines;
  } catch (error) { }
}

async function getAllRoutinesByUser({ username }) {
  try {
    const user = await getUserbyUsername(username);
    const user_id = user.id;

    const { rows: routines } = await client.query(
      `
        SELECT * FROM routines
        WHERE "creatorId" = $1
        `,
      [user_id]
    );

    return routines;
  } catch (error) { }
}

async function getPublicRoutinesByUser({ username }) {
  try {
    const username = await getUserbyUsername(username);
    const user_id = user.id;

    const { rows: routines } = await client.query(
      `
        SELECT * FROM routines
        WHERE "creatorId" = $1
        AND "isPublic" = true;
        `[user_id]
    );

    return routines;
  } catch (error) { }
}

async function getPublicRoutinesByActivity({ id }) {
  try {
    const { rows: routines } = await client.query(
      `
    SELECT r.* FROM routine_activities ra
    JOIN routines r on r.id = ra."routineId"
    where ra."activityId" = $1   
    `,
      [user_id]
    );

    return routines;
  } catch (error) { }
}

async function updateRoutine({ id, isPublic, name, goal }) {
  try {
    const {
      rows: [routine],
    } = await client.query(
      `UPDATE routines 
       SET "isPublic" = $2, name = $3, goal = $4,
       WHERE id = $1;`,
      [id, isPublic, name, goal]
    );

    return routine;
  } catch (error) {
    throw error;
  }
}

async function destroyRoutine(id) {
  try {
    await client.query(
      `
        DELETE from routine_activities
        where "routineId" = $1        
        `,
      [id]
    );

    await client.query(
      `
        DELETE FROM routines
        WHERE id = $1;
        `,
      [id]
    );
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getRoutineById,
  getRoutinesWithoutActivities,
  getAllRoutines,
  getAllPublicRoutines,
  getAllRoutinesByUser,
  getPublicRoutinesByUser,
  getPublicRoutinesByActivity,
  createRoutine,
  updateRoutine,
  destroyRoutine,
};

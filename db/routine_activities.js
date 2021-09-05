const { client } = require("./client");

async function getRoutineActivityById(id) {
  try {
    const {
      rows: [routineActivity],
    } = await client.query(
      `
        SELECT * FROM routine_activity
        WHERE id = $1;        
        `,
      [id]
    );

    return routineActivity;
  } catch (error) {
    throw error;
  }
}

async function addActivityToRoutine({
  routineId,
  activityId,
  count,
  duration,
}) {
  try {
    const {
      rows: [routineActivity],
    } = await client.query(
      `
        INSERT INTO routine_activity("routineId", "activityId", count, duration)
        VALUES($1, $2, $3, $4)
        RETURNING *; 
        `[(routineId, activityId, count, duration)]
    );

    return routineActivity;
  } catch (error) {
    throw error;
  }
}

async function updateRoutineActivity({ id, count, duration }) {
  try {
    const { rows: routineActivity } = await client.query(
      `
        UPDATE routine_activity
        WHERE id = $1        
        SET count = $2, duration = $3
        `,
      [id, count, duration]
    );

    return routineActivity;
  } catch (error) {
    throw error;
  }
}

async function destroyRoutineActivity(id) {
  try {
    const {
      rows: [routineActivities],
    } = await client.query(
      `
        DELETE FROM routine_activities
        where id = $1
        `,
      [id]
    );

    return routineActivities;
  } catch (error) {
    throw error;
  }
}

async function getRoutineActivitiesByRoutine({ id }) {
  try {
    const {
      rows: [routineActivities],
    } = await client.query(
      `
        SELECT * FROM routine_activity
        WHERE "routineId" = $1;
        `,
      [id]
    );

    return routineActivities;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getRoutineActivityById,
  addActivityToRoutine,
  updateRoutineActivity,
  destroyRoutineActivity,
  getRoutineActivitiesByRoutine,
};

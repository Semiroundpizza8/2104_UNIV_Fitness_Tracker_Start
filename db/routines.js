const { client } = require('./client');
const { addActivityToRoutine } = require('./routine_activities');
//const { getRoutineActivitiesByRoutine } = require('./routine_activities');
//need to get the user here too


async function createRoutine({
    creatorId, 
    isPublic,
    name,
    goal
})  {
    try {
        cons { rows: [routine] } = await client.query(`
            INSERT INTO routines("creatorId", "isPublic", name, goal)
            VALUES($1, $2, $3, $4)
            RETURNING *;
        `, [creatorId, isPublic, name, goal]);
        return routine;
    } catch (error) {
        throw error;
    }
};


async function getRoutinesWithoutActivities() {
    try {
        const { rows } = await client.query(`
            SELECT * FROM routines;
        `);
        return rows;
    } catch (error) {
        throw error;
    }
    
};

async function getAllRoutines() {
    try {
        const {rows: routines } = await client.query(`
        SELECT * FROM routines;
        `);
        const routinesMadeByUser = await addActivityToRoutine(routines)
        return routinesMadeByUser;
    } catch (error) {
        throw error;
    }
;}
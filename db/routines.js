const { client } = require('./client');
const { getRoutineActivitiesByRoutine } = require('./routine_activities');
//need to get the user here too

async function getActivityById(activityId) {
    try {
        const { rows: [ activity ] } = await client.query(`
            SELECT * FROM activities
            WHERE id=${activityId};
        `);
        return activity;
    } catch (error) {
        throw error;
    }
};

const routinesRouter = require('express').Router();

const {
    getRoutineById,
    getRoutinesWithoutActivities,
    getAllRoutines,
    getAllPublicRoutines,
    getAllRoutinesByUser,
    getPublicRoutinesByUser,
    getPublicRoutinesByActivity,
    createRoutine,
    updateRoutine,
    destroyRoutine
} = require('../db');

routinesRouter.get('/', async (req, res, next) => {
    //console.log("I AM ALIVE")
    try {
        const routines = await getAllRoutines();
        res.send(routines);
    } catch (error) {
        next(error)
    }
});

module.exports = routinesRouter;
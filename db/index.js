// require and re-export all files in this db directory (users, activities...)

const {
  createUser,
  getUser,
  getUserbyId,
  getUserbyUsername,
} = require("./users");

const {
  createActivity,
  getAllActivities,
  getActivityById,
  updateActivity,
} = require("./activities");

const {
  createRoutine,
  getRoutinesWithoutActivities,
  getRoutineById,
  getAllRoutines,
  getAllPublicRoutines,
  getAllRoutinesByUser,
  getAllPublicRoutinesByUser,
  getAllPublicRoutinesByActivity,
  updateRoutine,
  destroyRoutine,
} = require("./routines");

const {
  getRoutineActivityById,
  addActivityToRoutine,
  updateRoutineActivity,
  destroyRoutineActivity,
  getRoutineActivityByRoutine,
} = require("./routine_activities");

module.exports = {
  createUser,
  getUser,
  getUserbyId,
  getUserbyUsername,
  createActivity,
  getAllActivities,
  getActivityById,
  updateActivity,
  createRoutine,
  getRoutinesWithoutActivities,
  getRoutineById,
  getAllRoutines,
  getAllPublicRoutines,
  getAllRoutinesByUser,
  getAllPublicRoutinesByUser,
  getAllPublicRoutinesByActivity,
  updateRoutine,
  destroyRoutine,
  getRoutineActivityById,
  addActivityToRoutine,
  updateRoutineActivity,
  destroyRoutineActivity,
  getRoutineActivityByRoutine,
};

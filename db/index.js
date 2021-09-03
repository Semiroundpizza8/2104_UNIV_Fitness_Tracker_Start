// require and re-export all files in this db directory (users, activities...)

const {
    client,
    users, 
    activities, 
    routines, 
    routine_activities
} = require('./db');

module.exports = {
    client,
    users, 
    activities, 
    routines, 
    routine_activities
}
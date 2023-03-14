const userRouter = require('express').Router();

const {
    createUser,
    getUser,
    getUserById,
    getUserByUsername,
} = require('../db');

// POST /users/register
// userRouter.post('/users/register', async (req, res, next) => {
//     const { username, password } = req.body;
//     try {
//         const newUser = await getUserByUsername(username);

//         if (newUser) {
//             next({
//                 name: "User Already Exist",
//                 message: "That username already exist",
//             });
//         }
//         const user = await createUser({
//             username,
//             password,
//         });
//         res.send({
//             message: "Thank you for signing up", token,
//         });
//     } catch ({ name, message }) {
//         next({ name, message })
//     }
// });

// userRouter.get('/users/me', async (req, res) => {
//     res.send("Send back the logged-in user's data if a valid token is supplied in the header")
// });

module.exports = userRouter;
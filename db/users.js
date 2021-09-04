async function createUser({ username, password }) {
  try {
    const { rows } = await client.query(`
          
      `);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// async function getUser(){
//     try {

//     } catch (error) {

//     }
//   };

// async function getUserById(){
//     try {

//     } catch (error) {

//     }

//   };

// async function getUserByUsername(){

//     try {

//     } catch (error) {

//     }

// };

// module.export = {
//     createUser,
//     getUser,
//     getUserById,
//     getUserByUsername,
// };

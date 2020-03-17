// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

require('dotenv').config({
  path: require('path').resolve(__dirname, '../.env')
});

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const bin = require ("bin");

const bcryptSalt = 10;

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

    await mongoose.connection.db.dropDatabase();

    //
    // User
    //

    let Recipe = await Recipe.create([
      {
        username: "alice",
        password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
      },
      {
        username: "bob",
        password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
      }
    ]);
    console.log(`${recipes.length} recipes created`);
    
    await mongoose.disconnect();
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
})();
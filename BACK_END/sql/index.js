// const { faker } = require('@faker-js/faker');
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'xyz',
//     password: '${het-patel7788}#B094'
// });

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//   ["125", "new_user125", "abl@gmail.com", "abl"],
//   ["124", "new_user124", "abd@gmail.com", "abd"],
// ];

// try{
//     connection.query(q, [users], (err, result) => {
//     if (err) throw err;
//     console.log(result);
// })
// } catch (err){
//     console.log(err);
// }

// connection.end();

// let createRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// };

// a = createRandomUser();

// console.log(a);







// // insert data in bulk.


// const { faker } = require('@faker-js/faker');
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'xyz',
//     password: '${het-patel7788}#B094'
// });

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];
// for(i=1; i<=304; i++){
//   data.push(getRandomUser());
// }

// try{
//     connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
// })
// } catch (err){
//     console.log(err);
// }

// connection.end();







// //using rout and epress with db...

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'xyz',
  password: '${het-patel7788}#B094'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//home route
app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      const count = result[0]["count(*)"];
      console.log(`Total user: ${count}`);
      res.render("home.ejs", { count });
    })
  } catch (err) {
    console.log(err);
    res.send("some error in data base");
  }
})

//show route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers.ejs", { users });
    })
  } catch (err) {
    console.log(err);
    res.send("some error in data base");
  }
})

//edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    })
  } catch (err) {
    console.log(err);
    res.send("some error in data base");
  }
})

//update (db) route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formpass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formpass != user.password) {
        res.send("Wrong password");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if(err) throw err;
          res.redirect("/user");
        })
      }
      
    })
  } catch (err) {
    console.log(err);
    res.send("some error in data base");
  }
})

app.listen("3000", () => {
  console.log("server is listining on port 3000");
});

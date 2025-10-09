//go to mongoose oficial web site for more..
const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// User.insertMany([
//     {name:"Tony", email:"tony@gmail.com", age:48},
//     {name:"Peter", email:"peter@gmail.com", age:16},
//     {name:"Bruce", email:"Bruce@gmail.com", age:50},
// ]).then((res) => {
//     console.log(res);
// });


// const user2 = new User({
//     name: "eve",
//     email: "eve@yahoo.in",
//     age: 48,
// });


// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.find({}).then((res) => {
//     console.log(res);
// });


// User.find({age: {$gt:48}}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console,log(err);
// });


// User.updateOne({name:"Bruce"}, {age:49}).then((res) => {
//     console.log(res);
// });


// User.findOneAndUpdate({name:"Bruce"}, {age:50}, {new:true}).then((res) => {
//     console.log(res);
// });


// User.deleteOne({ name:"Tony"}).then((res) => {
//     console.log(res);
// });


User.findByIdAndDelete("68e63a5a80f110ca4bf7297d").then((res) => {
    console.log(res);
});
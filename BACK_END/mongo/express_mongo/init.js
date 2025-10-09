const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from: "Bob",
        to: "Alice",
        msg: "Hi Alice!",
        created_at: new Date()
    },
    {
        from: "Charlie",
        to: "Dave",
        msg: "Hey Dave, how are you?",
        created_at: new Date()
    },
    {
        from: "Eve",
        to: "Frank",
        msg: "Good morning Frank!",
        created_at: new Date()
    },
    {
        from: "Grace",
        to: "Heidi",
        msg: "Are you coming to the party?",
        created_at: new Date()
    }
];

Chat.insertMany(allchats);
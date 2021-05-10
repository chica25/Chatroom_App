// add new chat docs
// setup a real-time listener to get the new chats
// update the username
// update the room

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chat');
    }
}

const chatroom = new Chatroom('general', 'pat');
console.log(chatroom)
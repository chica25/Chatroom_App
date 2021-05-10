// add new chat docs
// setup a real-time listener to get the new chats
// update the username
// update the room

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username;
        this.chats = db.collection('chat');
    }
}
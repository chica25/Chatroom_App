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
    async newChat(message){
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save chat to database
        const response = await this.chats.add(chat)
        return response;
    }
    getChats(callback){
        this.chats
        .where('room', '==', this.room)
        .orderBy('created-at')
        .onSnapshot(snapshots => {
            snapshots.docChanges().forEach(change => {
            if(change.type === 'added'){
                // update the ui
                    callback(change.doc.data())
                }
            })
        });
    }
}


const chatroom = new Chatroom('general', 'pat');
// console.log(chatroom)

// chatroom.newChat('Hey')
// .then(() => console.log('chat added'))
// .catch(err => console.log(err));

chatroom.getChats((data) => {
    console.log(data);
})
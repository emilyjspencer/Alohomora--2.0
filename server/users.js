const users = [];


const addUser = ( { id, name, username, chatroom } ) => {

    name = name.trim().toLowerCase();
    username = username.trim().toLowerCase();
    chatroom = chatroom.trim().toLowerCase();

    const checkForUser = users.find((user) => user.chatroom === chatroom && user.name === name && user.username === username);

    if(checkForUser) {
        return { error: 'Username or name is already taken. Please try again'}
    }
   
        
    const user = { id, name, chatroom, username };
    
    users.push(user);

    return { user };
  }



const deleteUser = (id) => {

   
    const removed = users.findIndex((user) => user.id === id);

    if(removed !== -1) {
        return users.splice(index, 1)[0]
    }

}

const findUser = (id) => {
    users.find((user) => user.id === id);

}

const findAllUsers = (chatroom) => {
    users.filter((user) => user.chatroom === room);

}

module.exports = { addUser, deleteUser, findUser, findAllUsers };






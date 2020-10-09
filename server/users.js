const users = [];


const addUser = ( { id, name, chatroom } ) => {

    name = name.trim().toLowerCase();
    chatroom = chatroom.trim().toLowerCase();

    const checkForUser = users.find((user) => user.name === name && user.chatroom === chatroom);

    if(checkForUser) {
        return { error: 'Name is already taken. Please try again'}
    } else {
      const user = { id, name, chatroom};
    
      users.push(user);

      return { user };
  }
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
    users.filter((user) => user.chatroom === chatroom);

}

module.exports = { addUser, deleteUser, findUser, findAllUsers };






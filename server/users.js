const users = [];


const addUser = ( { id, name, username, chatroom } ) => {

    name = name.trim().lowercase();
    username = username.trim().lowercase();
    chatroom = chatroom.trim().lowercase();

    const checkForUser = users.find((user) => user.chatroom === room && user.name === name && user.username === user.username);

    if(checkForUser) {
        return { error: 'Username or name is already taken. Please try another again'}
   
        
    const user = { id, name, chatroom, username };
    
    users.push(user);

    return user;

}

const deleteUser = (id) => {

   
    const removed = users.findIndex((user) => user.id === id);

    if(removed !== -1) {
        return users.splice(index, 1)[0]
    }

}






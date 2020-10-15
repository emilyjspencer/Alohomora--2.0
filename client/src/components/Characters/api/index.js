import axios from 'axios';

const key='$2a$10$0TXo.XhZgsclRMsBTLHsx.5fYykcXOwOWF.12o20jBumw.10YEat2'
let url = `https://www.potterapi.com/v1/characters?key=${key}`;

export const fetchCharacters = async () => {
    try {
        const { data: { characters }} = await axios.get(`${url}/characters`);

        return characters.map((character) => character.name);
    } catch (error) {
        console.log(error);
    }
 
}



     
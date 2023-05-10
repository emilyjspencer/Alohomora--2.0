import axios from 'axios';

let url = 'https://hp-api.onrender.com/api/characters';

export const fetchCharacters = async () => {
    try {
        const { data: { characters }} = await axios.get(`${url}/`);

        return characters.map((character) => character.name);
    } catch (error) {
        console.log(error);
    }
 
}



     
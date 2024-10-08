import axios from 'axios';
import md5 from 'crypto-js/md5';

const publicKey = '3d212268eb399a3404abee957ca6ae3e';
const privateKey = 'd6e5c97bd409375c708f93c4e3399ce1b17fc8de';

const getMarvelCharacters = async (name) => {
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey).toString();

  const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await axios.get(url);
    return response.data.data.results;
  } catch (error) {
    console.error('Erro ao efetuar a buscar personagens da Marvel:', error);
    return [];
  }
};

export { getMarvelCharacters };

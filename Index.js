import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUser = new User('Skylar', 23, '2001/01/23');
console.log(novoUser.exibirInfos());

novoUser.nome = 'Jasmine';
console.log(novoUser.nome);
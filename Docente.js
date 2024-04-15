import User from './User.js';

export default class Docente extends User {
    constructor(nome, idade, nascimento, role = 'docente', ativo = true){
        super(nome, idade, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} passou no curso ${curso}.`
    }
}

const novoDocente = new Docente ('Nickolas', 26);
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Hanni','JS'));



import User from "./User.js";

export default class Admin extends User {
    constructor(nome, idade, nascimento, role = 'admin', ativo = true){
        super(nome, idade, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}

const novoAdmin = new Admin ("Danielle", 18, '2005/04/11');
console.log(novoAdmin.criarCurso('JS', 20));

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());

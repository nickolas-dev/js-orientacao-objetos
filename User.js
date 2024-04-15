export default class User {
    #nome
    constructor(nome, idade, nascimento, role, ativo = true) {
        this.#nome = nome
        this.idade = idade
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos() {
        return `Her name is ${this.#nome}, she's a ${this.role} and she has ${this.idade} years old.`
    }
}

const novoUser = new User("Hanni", 19, "2004/10/06", "singer");


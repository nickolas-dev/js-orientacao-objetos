const user = {
    nome: "Hanni",
    idade: 19,
    nascimento: "2004/10/06",
    role: "singer",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome,this.idade)
    }
}

 // user.exibirInfos() // exibindo diretamente no terminal

// const exibir = user.exibirInfos;
// const exibirTudo = exibir.bind(user);

// exibirTudo(); // exibe através da variável exibir

const admin = {
    nome: 'Danielle',
    idade: 18,
    nascimento: '2005/04/11',
    role: 'admin',
    ativo: true,
    mandaChuva(){
        console.log(`A Dani manda em tudo!!`)
    }
}

Object.setPrototypeOf(admin, user);
admin.mandaChuva();
admin.exibirInfos();

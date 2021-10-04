const cachorros = require('./database/cachorros.json');
const fs = require('fs')
module.exports = {
    listar: function () {
        console.table(cachorros);
    },
    descrever: function (pos) {
        if (pos >= cachorros.length || pos < 0) {
            console.erro("Cachorro inexistente!");
            return;

        }

        let c = cachorros[pos];
        console.log(`Nome: ${c.nome}`);
        console.log(`Castrado: ${c.castrado}`);
        console.log(`Peso: ${c.peso}`)
        console.log(`dataDeNascimento: ${c.dataDeNascimento}`)

        console.log(`Castrado: ${c.castrado}`);

        if (c.castrado) {
            console.log("Castrado:Sim")
        } else {
            console.log("Catrado:Não")
        }
        console.log(`Data de Nascimento: ${c.dataDeNascimento}`)
        console.log(`Peso: ${c.peso}`)


        console.log("Vacinas:")
        console.log(c.vacinas)

        console.log("Serviços:")
        console.log(c.serviços)
    },
    //adicionar
    adicionar: function ($nome, $sexo, $castrado, $dataDeNascimento, $peso) {


        let dog = {
            nome: $nome,
            sexo: $sexo,
            castrado: $castrado,
            dataDeNascimento: $dataDeNascimento,
            peso: $peso,
            vacinas: [],
            servicos: []

        }
        cachorros.push(dog)
        fs.writeFileSync('./database/cachorros.json',JSON.stringify(cachorros))







    }



}




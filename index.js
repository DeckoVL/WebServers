console.log("Iniciando meu servidor ");

const express = require('express');
const req = require('express/lib/request');
const application = express();
const port = 3000;



application.use(express.json());
application.use(express.urlencoded({ extended: true }));

var cadastros = {
    "clientes":[ 
         {
            "id": 1,
            "nome": "André",
            "endereco": "Rua Ali",
            "email": "andre@gmail.com"
        },
        {
            "id": 2,
            "nome": "Laura",
            "endereco": "Rua noé",
            "email": "laura@gmail.com"
        },

    ]
};

//retornar um cliente
application.get('/clientes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(listacadastros.clientes[index]);
})

//retornar todos os clientes
application.get('/clientes', (req, res) => {

    return res.json(listacadastros);
})

//Cadastrar novo cadastro:
application.post('/clientes', (req, res) => {
    var id = req.body.id;
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var email = req.body.email;
    var { cadastrados } = listacadastros.clientes;

    clientes = cadastros.clientes;
    clientes.push({"id: ":id,"nome ":nome, "endereco: ":endereco,"email: ":email,});

    return  res.json(clientes);
    
})

//Cliente update:
application.put('/clientes/:index', (req, res) => {
    const {index} = req.params;
    var id = index;
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var email = req.body.email;
    const clientes = listacadastros.clientes;
    
     if(clientes.indexOf(index)){
    clientes.splice((index-1), 4,{"id: ":id,"nome ":nome, "endereco: ":endereco,"email: ":email})
    }
    return res.json(listacadastros.clientes[index]);
})
//Exluir cliente:
application.delete('/clientes/:index', (req, res) => {
    const clientes = listacadastros.clientes;
    const {index} = req.params;
    var id = index;
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var email = req.body.email;
    

    if(clientes.indexOf(index)){
        clientes.splice((index-1), 4)
        }
    return res.json({ message: "O curso foi deeletado!!" });

})



application.listen(port, () => {
    console.log(`😀😀 Servidor iniciado...escutando na porta ${port}`)});
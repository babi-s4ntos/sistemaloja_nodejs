const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"))

  app.get("/", (req, res) => {
    res.render("index");
  });
  
  app.get("/perfil/:nome?", (req, res) => {
    const nome = req.params.nome;
    res.render("perfil",{
      nome : nome
    });
  });
  
  app.get("/clientes",(req, res) =>{
    const clientes = [
      {dados: "Nome:", valor: "Diego"},
      {dados: "Endereco:", valor: "Registro SP"},
      {dados: "Telefone:", valor: "(13) 99782-2344"},
      {dados: "Total:", valor: "R$ 42,00"}
    ]
    res.render("clientes",{
      clientes : clientes
    })
  })
  

  //ROTA DE PEDIDOS
app.get("/pedidos",(req, res) =>{
  const pedidos = [
    {IdPedido: 1},
    {nome: "Diego"},
    {produto: "Donuts de Limão", valor: 4.00},
    {produto: "Donuts de Morango", valor: 5.00},
    {produto: "Donuts de Kit Kat", valor: 6.00},
    {produto: "Donuts de Sensação", valor: 6.00},
    {produto: "Donuts de Amendoim", valor: 5.00},
    {produto: "Donuts de Maracujá", valor: 5.00},
    {produto: "Donuts de Chocolate", valor: 5.00},
    {produto: "Donuts de Ouro Branco", valor: 6.00},
  ]
  res.render("pedidos",{
    pedidos : pedidos
  })
})

app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ['Donuts de Morango', 'Donuts de Chocolate', 'Donuts de Amendoim', 'Donuts de Ouro Branco']
  const produto = req.params.produto
  res.render("produtos",{
    produto : produto, 
    listaProdutos : listaProdutos
    });
  
});


const port = 3030
app.listen(port, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
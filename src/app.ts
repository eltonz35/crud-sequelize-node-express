
import express from "express";
import { atualizarUsuario, cadastrarUsuario, deletarUsuario, listarUsuarios } from "./controllers/user";
import { atualizarProduto, cadastrarProduto, deletarProduto, listarProdutos } from "./controllers/product";

const app = express();

app.use(express.json());


//Rotas Users
app.post('/users', cadastrarUsuario);
app.get('/users', listarUsuarios);
app.patch('/users/:user_id', atualizarUsuario);
app.delete('/users/:user_id', deletarUsuario);

//Rotas Product
app.post('/products', cadastrarProduto);
app.get('/products', listarProdutos);
app.patch('/products', atualizarProduto);
app.delete('/products', deletarProduto);


export default app;
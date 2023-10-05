import "reflect-metadata";
import { startDatabase } from "./database/data-source";
import app from "./app";


const main = async () => {
    try {
        //conectando banco de dados
        await startDatabase();
        console.log("Banco de dados conectado com sucesso!");

        //inicializando exress
        app.listen(3000, () => {
            console.log("Aplicação ouvindo requisições http na porta 3000");
        });
    } catch (error) {
        console.log(error);
    }
};

main();

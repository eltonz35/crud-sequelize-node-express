import "reflect-metadata";
import { startDatabase } from "./database/data-source";



const main = async () => {
    try {
        await startDatabase();
        console.log("Banco de dados conectado com sucesso!");
    } catch (error) {
        console.log(error);
        
    }
};

main();

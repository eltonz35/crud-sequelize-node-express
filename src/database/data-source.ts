import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "elthon",
    password: "elthon123",
    database: "api_softex",
});

export const startDatabase =async () => {
    try {
        await AppDataSource.initialize();
    } catch (error) {
        console.log(error, "Erro ao conectar com o banco de dados");
        throw error;
    }
};
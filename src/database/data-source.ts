import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "elthon",
    password: "elthon123",
    database: "api_softex",
    entities: ["src/entities/*.ts"],
    synchronize: true,
});

export const startDatabase =async () => {
    try {
        await AppDataSource.initialize();
    } catch (error) {
        console.log(error, "Erro ao conectar com o banco de dados");
        throw error;
    }
};

export default AppDataSource;
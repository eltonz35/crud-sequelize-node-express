import { DataSource } from "typeorm"
import { User } from "../entities/user";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "elthon",
    password: "elthon123",
    database: "api_softex",
    entities: [User],
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
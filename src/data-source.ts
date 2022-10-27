import "reflect-metadata"
import "dotenv/config"
import path from "path"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: process.env.PGPORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: [path.join(__dirname, "./entities/*.{js,ts}")],
    migrations: [path.join(__dirname, "./migrations/*.{js,ts}")],
})

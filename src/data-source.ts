import "reflect-metadata"
import { DataSource } from "typeorm"
import { Inventory } from "./entity/Inventory"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "coverpos",
    synchronize: true,
    logging: false,
    entities: [Inventory],
    migrations: [],
    subscribers: [],
})
if (AppDataSource) {
    console.log('database is conncted')
}


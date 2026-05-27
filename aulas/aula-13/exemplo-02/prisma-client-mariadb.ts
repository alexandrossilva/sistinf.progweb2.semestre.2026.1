import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./prisma/client/client.js";

const adaptador = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456",
    database: "ifba"
});

const prisma = new PrismaClient({
    adapter: adaptador
});

export default prisma;
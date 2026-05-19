import prisma from "./prisma-client-mariadb.js";

const cursos = await prisma.curso.findMany()

console.log(cursos);

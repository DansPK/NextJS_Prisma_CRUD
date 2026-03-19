import {PrismaClient} from "../src/app/generated/prisma/client";
import {PrismaPg} from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({adapter});
const userData = [
    {
        name: 'Boom',
        email: 'Boom@gmail.com',
    },
    {
        name: 'IDK',
        email: 'IDK@gmail.com',
    },
    {
        name: 'testing',
        email: 'testing@gmail.com',
    },
    {
        name: 'Joe',
        email: 'Joe@gmail.com',
    },
    {
        name: 'Chem',
        email: 'Chem@gmail.com',
    },
];

async function addUser(){
    for (const u of userData){
        await prisma.user.create({data: u});
    }
}

addUser();
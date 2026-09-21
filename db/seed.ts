// import { PrismaClient } from "../src/generated/prisma";
import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main(){
    const prisma = new PrismaClient();
    await prisma.product.deleteMany();

    await prisma.product.createMany({data: sampleData.products});

    console.log('Database seeded successfully!')
}

main().catch(async (e) => {
    console.error(e);
    process.exit(1);
});
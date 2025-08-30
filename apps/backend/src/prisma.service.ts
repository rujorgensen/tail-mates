import { PrismaClient } from '@prisma-types/tailmates';

export const prismaClient = new PrismaClient(); // Creating Prisma client object

async function main() {
  // We will write code here for CRUD
}

main()
.then(async () => {
    await prismaClient.$disconnect(); // disconnect after task is done
}).catch(async (e)=>{
    console.error(e); // log exception
    await prismaClient.$disconnect(); // disconnect if exception occur
    process.exit(1); // end process with some failure
})
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const users = await prisma.user.findMany();
    // 服务器输出-终端打印
    console.log(event, users);
    return users;
});

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    switch (event.method) {
        case "GET":
            // 获取所有用户信息
            const users = await prisma.user.findMany();
            return users;
        case "POST": // 创建新用户
            try {
                const body = await readBody(event);
                const user = await prisma.user.create({
                    data: {
                        name: body.name,
                        email: body.email,
                        password: body.password,
                    },
                });
                return user;
            } catch (error) {
                return error.meta;
            }
    }
});

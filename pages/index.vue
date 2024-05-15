<template>
    <ClientOnly>
        <h1>Index</h1>
        <NuxtLink to="/about">关于</NuxtLink>
        <br />
        <NuxtLink to="/posts/1">文章1</NuxtLink>
        <br />
        <NuxtLink to="/posts/2">文章2</NuxtLink>
        <br />
        <NuxtLink to="/babylon">babylonjs</NuxtLink>
        <br />
        <el-button @click="getAllUserInfo()">获取数据库中所有user信息</el-button>
        <el-button @click="addUser()">add new user</el-button>
    </ClientOnly>
</template>

<script lang="ts" setup>
const getAllUserInfo = async () => {
    const users = await useFetch("/api/users", {
        // query: { name: "admin" },
    });
    // 客户端，浏览器打印
    console.log(users);
};

const addUser = () => {
    const newUser = useFetch("/api/users", {
        method: "POST",
        body: { name: "admin", email: "newadmin@admin.com", password: "123456" },
        headers: { "Content-Type": "application/json" },
    });
    console.log(newUser);
};
</script>

<style></style>

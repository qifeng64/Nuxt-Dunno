<template>
    <div>postID: {{ postID }}</div>
</template>

<script setup>
const postID = useRoute().params.id;
</script>

<style></style>

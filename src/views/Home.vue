<script setup>
import Header from "../components/Header.vue"
import Content from "../components/homeContent.vue";
import aoaHeader from "@/components/aoaHeader.vue";
import Footer from "../components/Footer.vue"
</script>
<template>
    <aoaHeader></aoaHeader>
    <Header>
    </Header>
    <Content></Content>
    <Footer></Footer>
</template>

<style>
* {
    /* max-width: 1280px;*/
    padding: 0;
    margin: 0;
}
</style>
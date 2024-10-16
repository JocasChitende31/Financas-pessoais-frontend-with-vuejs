<template>
    <Header />
    <div class="main">
        <div class="nav-menager">
            <RouterLink to="/user/name" class="return-button"> <i class="large material-icons">reply_all</i> voltar
            </RouterLink>
            <li>
                <ul>
                    <RouterLink to="/user/_menagerSources/home"> <i class="large material-icons">home</i> </RouterLink>
                </ul>
                <ul>
                    <RouterLink to="/menagerSource/_all"> <i class="large material-icons">playlist_add_check</i> registos
                    </RouterLink>
                </ul>
                <ul>
                    <RouterLink to="/menagerSource/_add"> <i class="large material-icons">add</i> registo</RouterLink>
                </ul>
                <ul>
                    <RouterLink to="/menagerSource/_settings"> <i class="large material-icons">more_horiz</i></RouterLink>
                </ul>
                <div class="menager_title"><h3>GERIR MEUS GANHOS</h3></div>
            </li>
            <RouterView>
            </RouterView>
        </div>
    </div>    <Footer />
</template>
<script setup>
import Header from '@/components/Header.vue';
import Main from '@/components/navMenager.vue'
import Footer from '@/components/Footer.vue';
</script>
<style >
.menager_title{
    font-weight: bold;
}
</style>


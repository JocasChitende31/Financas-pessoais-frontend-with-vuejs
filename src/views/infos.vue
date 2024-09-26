<template>
    <Header></Header>
    <div class="about-title">
        <h3>Sobre</h3>
        <img src="https://cdn-icons-png.flaticon.com/128/7423/7423115.png" alt="">
    </div>
    <div class="about-content">
        <div class="pargraph">
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&ast;No intuito de auxiliar a gestão financeira pessoal da sociedade em
                geral, urgiu a necessidade de criar um pequeno sistema web capaz de controlar e gerir os ganhos,
                despesas e poupanças de qualquer cidadão que queira ver sua vida facilitadada com o
                <b>GESTACIONAR.SE</b>.
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&ast;Este sistema é seguro e acessível apenas por usários credenciados, ademais,
                os dados são trabalhados e criptogrados de formas que cada um apenas consiga ver suas informações. Nele
                é possível
                declarar suas fontes de rendas, para que o sistema se encarregue de fazer um cálculo automatizado e
                forncecer detalhes de suas rendas brutas e liquidas. </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&ast;Ainda, permite também declara suas poupanças e despesas periódicas, de
                maneira simples e rápida.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&ast;Construiu-se uma solução capaz, não só pata declaração de activos e passivos
                do funcionário e outros, mais que vai também de forma muito intuitiva levar aos nossos clientes
                mensagens de alerta ea advices para melhor usar e distruibuir seus ganhos.</p>
                <br>
                <a href="" style="padding: 5px 10px; font-size: 1.5rem; letter-spacing: .05rem; border: 1px solid hsla(33, 98%, 38%, 1); background-color:hsla(33, 98%, 38%, 1); color:white;">Alguma questão? Clique aqui!</a>
            </div>
    </div>
    <Footer></Footer>
</template>
<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>
<style>
.about-title {
    display: flex;
    margin: 0 auto;
    width: 90%;

    h3 {
        position: absolute;
        bottom: 550px;
        right: 700px;
        color: hsla(33, 98%, 38%, 1);
        font-size: 3rem;
        font-weight: 800;
        z-index: 2;
    }

    img {
        position: absolute;
        bottom: 398px;
        right: 1070px;
        width: 50px;
        transform: rotate(0deg);
        height: fit-content;

        z-index: 1;
    }
}

.about-content {
    width: 90%;
    margin: 0 auto;

    .pargraph {
        padding: 50px 250px;
        text-align: justify;

        p {
            line-height: 1.5rem;
            margin: 20px 0;
            font-size: 1rem;
            color: rgb(95, 94, 94);
        }
    }
}
</style>
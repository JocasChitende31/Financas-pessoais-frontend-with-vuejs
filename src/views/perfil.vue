<template>
    <Header></Header>
    <div class="perfil">
        <div class="perfil-card">
            <div class="card">
                <img src="https://cdn-icons-png.flaticon.com/128/5987/5987424.png" alt="">
                <div class="user-data">
                    <h3>Jeorgel Chitende</h3>
                    <h3>joshtende03@gmail.com</h3>
                    <h3>Rua 50, Urbanização Nova Vida, Kilamba-Kiaxi, Angola </h3>
                </div>
                <a href="">Editar</a>

            </div>
            <div class="devisor">

            </div>
            <div class="settings">
                <h2>Configurações</h2>
                <div class="options">
                    <div class="option-card">
                        <h3>Meus Ganhos</h3>
                        <a href="">Entrar na Gestão</a>
                    </div>
                    <div class="option-card">
                        <h3>Minhas Despesas</h3>
                         <a href="">Entrar na Gestão</a>
                    </div>
                    <div class="option-card">
                        <h3>Minhas Poupanças</h3>
                         <a href="">Entrar na Gestão</a>

                    </div>
                </div>
            </div>
        </div>


    </div>
    <Footer></Footer>
</template>
<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>
<style>
.perfil {

    height: auto;
    padding-bottom: 34rem;

    .perfil-card {
        width: 80%;
        margin: 0 auto;
        padding: 50px;

        border: .5px solid hsla(33, 98%, 38%, 0.4);
        border-radius: 5px;
        background-color: white;

        position: absolute;

        top: 20%;
        left: 6.5%;

        .card {

            text-align: center;
            margin: auto;

            img {
                margin: 0 auto;
                border: 15px solid hsla(33, 98%, 38%, 0.4);
                border-style: outset;
                border-radius: 50%;
            }

            .user-data {

                padding: 10px;

                h3 {
                    line-height: 2rem;
                    color: grey;
                    padding: 0 10px;

                }
            }

        }

        .devisor {
            border: .5px solid hsla(33, 98%, 38%, 0.4);
            margin: 40px 0 40px 0;
        }

        .settings {
            h2 {
                margin: 0 0 30px 0;
                font-weight: bold;
                letter-spacing: .005rem;
                color: hsl(33, 98%, 38%, 1);;
            }

            .options {
                width: 95%;
                margin: 0 auto;
                display: grid;

                grid-template-columns: 1fr 1fr 1fr;
                column-gap: 50px;

                .option-card {
                    text-align: center;
                    padding: 0;
                    background-color: #f5eee2;
                    border-radius: 5px;

                    h3 {
                        background-color: hsl(33, 98%, 38%, 1);
                        color: white;
                        padding: 20px 0;
                        border-top-left-radius: 5px;
                        border-top-right-radius: 5px;
                    }
                    a{
                        display: flex;
                        justify-content: center;
                        padding: 5px 0;
                    }
                }

                .option-card:nth-child(2) {


                    h3 {
                        background-color: #162249;
                        border: 1px solid hsla(0, 0%, 100%, 0.283);
                        color: white;
                        padding: 20px 0;
                    }

                }
            }
        }
    }
}
</style>
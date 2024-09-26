<template>
    <Header></Header>
    <div class="source-content">
        <div class="card-left">
            <div class="card-top">

                <img class="img-icon" src="https://cdn-icons-png.flaticon.com/128/7909/7909323.png" alt="" width="70px">

                <h3 style="display: flex;">300.000,00</h3>
            </div>
            <div class="line-devisor" style=" border: 1px solid #ffffff44;
            margin: 20px 0 5px 0;"></div>
            <div class="card-bottom">
                <h3>Meus Ganhos</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reiciendis rem corporis atque
                    dolore expedita deleniti eveniet quas, dicta, odit aliquam hic maxime illum accusantium repellendus
                    incidunt perferendis vel recusandae.</p>
            </div>
            <a href="#">Saber mais . . .</a>

        </div>
        <div class="card-right">
            <div class="title">
                <h3 class="">Todos</h3>
                <span>Ganhos Disponivéis</span>
            </div>
            <div class="card">

                <div class="card-content">
                    <div class="card-img">
                        <img src="https://cdn-icons-png.flaticon.com/128/806/806741.png" width="150px" alt="">
                    </div>
                    <div class="card-subcontent">
                        <h3>weTenGrow STARTUP</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deserunt delectus
                            dolorem corrupti ut ad earum ipsam? Natus, excepturi magnam! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Non voluptate reiciendis nulla porro sint odit modi,
                            temporibus
                        </p>

                        <div class="card-footer_detalis">
                            <span class="ganhos"> Salário: <a>200.000,00</a></span>
                            <div>
                                <span>Criado: <a>20/10/24</a></span>
                                <span> Actualizado: <a>20/10/24</a><a></a></span>
                            </div>
                        </div>
                        <button>Detalhes</button>
                    </div>
                </div>


            </div>
            <div class="mt"></div>
            <div class="card">

                <div class="card-content">
                    <div class="card-img">
                        <img src="https://cdn-icons-png.flaticon.com/128/806/806741.png" width="150px" alt="">
                    </div>
                    <div class="card-subcontent">
                        <h3>Suimagem.com</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deserunt delectus
                            dolorem corrupti ut ad earum ipsam? Natus, excepturi magnam! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Non voluptate reiciendis nulla porro sint odit modi,
                            temporibus.
                        </p>
                        <div class="card-footer_detalis">
                            <span class="ganhos"> Sálario: <a>48.500,00</a></span>
                            <div>
                                <span>Criado: <a>20/10/24</a></span>
                                <span> Actualizado: <a>20/10/24</a><a></a></span>
                            </div>

                        </div>
                        <button>Detalhes</button>
                    </div>
                </div>
            </div>
            <div class="mt"></div>
            <div class="card">

                <div class="card-content">
                    <div class="card-img">
                        <img src="https://cdn-icons-png.flaticon.com/128/806/806741.png" width="150px" alt="">
                    </div>
                    <div class="card-subcontent">
                        <h3>Orbita</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deserunt delectus
                            dolorem corrupti ut ad earum ipsam? Natus, excepturi magnam! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Non voluptate reiciendis nulla porro sint odit modi,
                            temporibus.
                        </p>
                        <div class="card-footer_detalis">
                            <span class="ganhos"> Sálario: <a>51.500,00</a></span>
                            <div>
                                <span>Criado: <a>20/10/24</a></span>
                                <span> Actualizado: <a>20/10/24</a><a></a></span>
                            </div>

                        </div>
                        <button>Detalhes</button>
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
.source-content {
    display: flex;
    flex-direction: row;
    margin: 0 auto 0 auto;
    width: 90%;
    position: relative;


    .card-left {
        width: 30%;
        height: fit-content;

        margin-right: 40px;

        position: relative;
        bottom: 200px;


        background-color: hsl(33, 98%, 38%, 1);
        border: 1px solid hsla(0, 0%, 100%, 0.283);
        border-radius: 5px;

        padding: 30px 30px;

        color: white;

        .line-devisor {
            border: 1px solid #ffffff44;
            margin: 20px 0;
           
        }

        .card-top {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3 {

                font-size: 2rem;
                font-weight: 500;
            }
        }

        .card-bottom {
            h3 {
                font-size: 2rem;
                font-weight: 200;
            }

            p {
                margin-bottom: 15px;
            }
        }

        a {
            margin: 5px;
            padding: 2px 15px;
            border: 1px solid gray;
            background-color: white;
            transition: .3s all ease-in-out;
        }

        a:hover {
            background-color: hsl(33, 98%, 38%, 0.2);
            transition: .3s all ease-in-out;
            color: white;
        }

        .line-devisor {
            border: .001px solid #ffffff44;
            margin: 20px 0;
        }
    }

    .card-right {
        width: 70%;
        height: fit-content;

        padding: 30px 30px;
        margin-left: 40px;
        position: relative;
        bottom: 100px;


        background-color: white;
        border: 1px solid hsla(33, 98%, 38%, 0.283);
        border-radius: 5px;

        .title {
            margin-bottom: 50px;

            h3 {
                font-weight: bold;

            }

            span {
                color: grey;
                padding: 0 0 0 5px;
            }
        }

        .card {

            border: 1px solid hsla(0, 0%, 50%, 0.283);
            padding: 10px;
            border-radius: 5px;

            background-color: hsla(0, 0%, 50%, 0.033);
            transition: .5s all ease-in-out;

            .card-subcontent {
                h3 {
                    font-size: 1.5rem;
                    color: hsla(33, 98%, 38%, 1);
                    font-weight: bold;
                }

                p {
                    color: rgb(80, 80, 80);
                }

                button {
                    padding: 5px 15px;
                    margin: 5px 0;
                    background-color: hsla(33, 98%, 38%, 1);
                    color: white;
                    border: .5px solid hsla(33, 98%, 38%, 1);
                    border-radius: 5px;


                    cursor: pointer;
                }
            }


        }

        .card:hover {
            border: .5px solid hsla(33, 98%, 38%, 0.4);
            transition: .5s all ease-in-out;
        }

        .mt {
            margin-top: 30px;
        }

        .card-content {
            display: flex;
            justify-content: space-between;


            img {
                margin: 0 30px 0 0;
                padding: 25px 0;
            }

        }

        .card-footer_detalis {
            display: flex;
            justify-content: space-between;

            padding: 10px 0 10px 5px;
            color: rgba(128, 128, 128, 0.655);


            .ganhos {
                text-align: left;

                a {
                    /* font-size: 1rem; */
                    font-weight: bold;
                }
            }
        }
    }
}
</style>

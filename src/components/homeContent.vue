<template>
    <div class="home">
        <div class="card ganhos">
            <div class="card-top">

                <img class="img-icon" src="https://cdn-icons-png.flaticon.com/256/8305/8305563.png" alt="" width="70px">

                <h3 style="display: flex;">300.000,00</h3>
            </div>
            <div class="line-devisor"></div>
            <div class="card-bottom">
                <h3>Meus Ganhos</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reiciendis rem corporis atque
                    dolore expedita deleniti eveniet quas, dicta, odit aliquam hic maxime illum accusantium repellendus
                    incidunt perferendis vel recusandae.</p>
            </div>
            <a href="#">Saber mais ...</a>

        </div>
        <div class="card despesas">
            <div class="card-top">
                <img class="img-icon" src="https://cdn-icons-png.flaticon.com/256/7544/7544934.png" alt="" width="70px">
                <h3>200.000,00</h3>
            </div>
            <div class="line-devisor"></div>
            <div class="card-bottom">
                <h3>Minhas Despesas</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reiciendis rem corporis atque
                    dolore expedita deleniti eveniet quas, dicta, odit aliquam hic maxime illum accusantium repellendus
                    incidunt perferendis vel recusandae.</p>
            </div>
            <a href="#">Saber mais ...</a>

        </div>
        <div class="card poupancas">
            <div class="card-top">
                <img class="img-icon" src="https://cdn-icons-png.flaticon.com/256/11257/11257198.png" alt="" width="70">
                <h3>100.000,00</h3>
            </div>
            <div class="line-devisor"></div>
            <div class="card-bottom">
                <h3>Minhas Poupanças</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reiciendis rem corporis atque
                    dolore expedita deleniti eveniet quas, dicta, odit aliquam hic maxime illum accusantium repellendus
                    incidunt perferendis vel recusandae.</p>
            </div>
            <a href="#">Saber mais ...</a>
        </div>
    </div>
</template>

<style>
.home {
    padding-top: 50px;
    margin: 50px auto 100px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    border-top: 1px solid hsl(33, 98%, 38%, 1);
    /* text-align: center; */
    width: 90%;

    column-gap: 5rem;
    row-gap: 10px;

    .card {
        border: 1px solid white;
        border-radius: 5px;
        margin: 0 auto;
        padding: 30px;
        color: white;

        .card-header {
            display: block !important;
            flex-direction: column !important;
        }

        .card-top {
            display: flex !important;
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
            padding: 2px 5px;
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

    .ganhos {
        background-color: hsl(33, 98%, 38%, 1);
    }

    .despesas {

        background-color: #162249;

    }

    .poupancas {
        background-color: hsl(33, 98%, 38%, 1);

    }
}
</style>
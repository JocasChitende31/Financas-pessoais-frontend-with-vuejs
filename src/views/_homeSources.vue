<template>
    <main class="main">
        <h1 class="title-update">
            Actualizaçoes <i class="material-icons">update</i>
        </h1>
        <div class="updates">
            <div class="update">

                <h2>Ganhos Anteriores</h2>
                <hr>
                <span>OBS: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, ea?</span>
            </div>
            <div class="update">
                <h2>Ganhos Expirados</h2>
                <hr>
                <li>
                    <ul>
                        <h3> Atende.Startup, <span> kz 45.000,00</span></h3>
                    </ul>
                    <ul>
                        <h3>
                            Suimagen.com, <span> kz 48.500,00</span>
                        </h3>
                    </ul>
                    <ul>
                        <h3>
                            weTenGrow.Startup, <span> kz 48.500,00</span>
                        </h3>
                    </ul>
                </li>

            </div>
            <div class="update">
                <h2>Insight Periódicos</h2>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, earum?</p>
                <br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, earum?</p>
            </div>
        </div>
    </main>
</template>
<script setup></script>
<style>
.title-update {
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 10px 0;

    i {
        margin-left: 2px;
        font-size: 1.5rem;
    }
}

.updates {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    row-gap: 20px;
    grid-auto-flow: row;

    .update {
        width: auto;

        /* border: 1px solid black */

        h2 {
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
            padding: 5px 10px;
            margin-bottom: 10px;

            font-size:large;
            letter-spacing: .5px;
            font-weight: lighter;

        }

        li {
            border: none;
            padding: 0;
            margin: 0 10px;
            
        }

        h3 {
            text-align: center;
            font-weight: lighter;
        }

    }
}
</style>
<template>
    <div class="main">
        <div class="nav-menager">
            <RouterLink to="/user/name" class="return-button"> <i class="large material-icons">reply_all</i> voltar</RouterLink>
            <li>
                <ul>
                    <RouterLink to="/user/_menagerSources"> <i class="large material-icons">home</i> </RouterLink>
                </ul>
                <ul>
                    <RouterLink to="/all"> <i class="large material-icons">playlist_add_check</i>  registos</RouterLink>
                </ul>
                <ul>
                    <RouterLink to="/add"> <i class="large material-icons">add</i> registo</RouterLink>
                </ul>
                <ul>
                    <RouterLink to="/other"> <i class="large material-icons">more_horiz</i></RouterLink>
                </ul>
            </li>
            <RouterView>
            </RouterView>
        </div>
    </div>
</template>
<script setup>

</script>
<style>
.nav-menager{
    width: 80%;
    margin: 0 auto;
    padding-bottom: 50px;
    .return-button{
        display: flex;
        width: 70px;
        margin-top: 40px;
        color: red;

        
    }
    .return-button:hover{
        background-color: transparent;
        color: rgba(208, 65, 65, 0.877);
    }
    li{
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding: 5px 20px 5px 10px;
        margin: 20px 0 20px 0;
        /* justify-content: center; */
        border-top: 1px solid hsl(33, 98%, 38%, 1);
        border-bottom: 1px solid hsl(33, 98%, 38%, 1);

        ul{
            padding: 0 30px 0 0;
           
            a{
                font-size: 1rem;
                 display: flex;
                align-items: center;
            }
            a:hover{
                color: #162249;
                background-color: transparent;
            }
        }
        .menager_title{
            H3{

                font-weight: bold;
            }
        }
    }
}
</style>
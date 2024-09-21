<template>
  <div class="header">
    <nav class="navigation">
      <li class="nav-list">
        <ul class="nav-list-item">
          <a href="#">GESTACIONAR.SE</a>
        </ul>
      </li>
      <li class="nav-list">
        <ul class="nav-list-item">
          <a href="#">Meus Ganhos</a>
        </ul>
      </li>
      <li class="nav-list">
        <ul class="nav-list-item">
          <a href="#">Minhas Despesas</a>
        </ul>
      </li>
      <li class="nav-list">
        <ul class="nav-list-item">
          <a href="#">Minhas Poupanças</a>
        </ul>
      </li>
      <li class="nav-list">
        <ul class="nav-list-item">
          <a href="#">Informações</a>
        </ul>
      </li>
      <li class="nav-list">
        <ul class="nav-list-item">
          <a href="#">Mais . . .</a>
        </ul>
      </li>
    </nav>
    <div class="corrency-amount">
      <div class="corrency">
        <div class="title">
          <h3>AOA-KWZ</h3>
        </div>
      </div>
      <div class="line-devisor">
        <h3></h3>
      </div>
      <div>
        <div class="amount">
          <div class="title">
            <h3>300.000,00</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="title-AOA">
      <h3>AOA-KWZ</h3>
    </div>
  </div>
</template>

<style>
.header {
  background-color: #f5eee2;
  width: 100%;
  height: 45vh;

  .title-AOA {
    display: flex;
    position: relative;

    bottom: 147px;
    margin-left: 5px;
    z-index: 1;

    h3 {
      color: white;
      font-weight: bold;
      letter-spacing: .05px;
      font-size: 1.7rem;

    }
  }
}

.navigation {
  display: flex;
  justify-content: center;
  padding: .5rem 0;
  list-style: none;
  border-bottom: 1px solid #BF6A0242;
  width: 95%;
  margin: 0 auto;

  .nav-list {
    padding: 1rem 1rem;
      .nav-list-item {
        a{
          font-size: 1rem;
        }
      }
  }

}

.corrency-amount {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: .5rem 2rem;
  height: 30vh;
  width: 75%;

  .corrency {
    padding: 100px 75px;
    border-radius: 25px;
    background-color: hsl(33, 98%, 38%, 1);
    transform: rotate(45deg);
    margin: 0 0 0 -150px;

    .title {
      position: relative;
      transform: rotate(-45deg);
      bottom: 100px;
      top: 10px;
      /* margin: 0 0px 0 20px;   */
      color: hsl(33, 98%, 38%, 1);
    }
  }

  .line-devisor {
    width: 830px;
    margin-right: -25px;
    border: .05px solid hsla(33, 98%, 38%, 0.33);
    border-style: dotted;
  }

  .amount {

    padding: 40px 10px;
    border-radius: 30px;
    background-color: hsl(33, 98%, 38%, 1);
    transform: rotate(45deg);

    .title {
      display: flex;
      position: relative;
      transform: rotate(-45deg);
      color: white;

      h3 {

        font-weight: 500;

      }
    }
  }

}
</style>

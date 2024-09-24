<script>

</script>
<template>
  <div class="footer">
    <div class="footer-content">
      <div class="product">
        <div class="title">
          <h3>Productos</h3>
        </div>
        <li>
          <ul>
            <h4>&copysr;weTenGrow.Startup</h4>
          </ul>
          <ul>
            <h4>&copysr;atende.Satrtup</h4>
          </ul>
          <ul>
            <h4><a href="#">SIFINPess</a></h4>
          </ul>
        </li>
      </div>
      <div class="resource">
        <div class="title">
          <h3>Recursos</h3>
        </div>
        <li>
          <ul>
            <h4><a href="#">GESTACIONAR.SE</a></h4>
          </ul>

          <ul>
            <h4><a href="#">GitHub-weTenGrow</a></h4>
          </ul>
          <ul>
            <h4><a href="#">Adonisjs</a></h4>
          </ul>
          <ul>
            <h4><a href="#">Vuejs</a></h4>
          </ul>
          <ul>
            <h4><a href="#">Figma</a></h4>
          </ul>
          <ul>
            <h4><a href="#">Blog</a></h4>
          </ul>
          <ul>
            <h4><a href="#">Mais . . .</a></h4>
          </ul>
        </li>
      </div>
      <div class="contact">
        <div class="title">
          <h3>Contactos</h3>
        </div>
        <li>
          <ul>
            <h4><a href="#">wetendegrow.help.hotmail.com</a></h4>
          </ul>
          <ul>
            <h4><a href="#">joshtende03@gmail.com</a></h4>
          </ul>
          <ul>
            <h4><a href="#">+244</a>933 728 098</h4>
            <h4><a href="#">+244</a>923 067 544</h4>
          </ul>
        </li>
      </div>
      <div class="address">
        <div class="title">
          <h3>Endereços</h3>
        </div>
        <li>
          <ul>
            <h4><a href="#">Kilamba-Kiaxi, Luanda, Angola</a></h4>
          </ul>
          <ul>
            <h4><a href="#">Rua da IMETRO - Morro Bento</a></h4>
          </ul>
          <ul>
            <h4>Nosso Escritório: <a href="">Brevemente</a></h4>
          </ul>
        </li>
      </div>
    </div>
  </div>
  <div class="social-network">
    <div class="linkedin">
      <a href="#">linkedIn</a>
    </div>
    <div class="twitter">
      <a href="#">Twitter</a>
    </div>
    <div class="instagram">
      <a href="#">Instagram</a>
    </div>
    <div class="youtube">
      <a href="#">Youtube</a>
    </div>
  </div>
  <div class="copyright">
    <div class="devisor-line"></div>
    <div class="content">
      <h5>
        &copysr; Todos os direitos reservados:
        <b style="color: grey">weTenGrow,</b>
        {{ new Date().getFullYear() }}
      </h5>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #162249;

  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding: 50px 0;

    .product,
    .resource,
    .address,
    .contact {
      h3 {
        color: #f5eee2;
        font-size: 1.5rem;
        letter-spacing: 0.1px;
        font-weight: 500;
      }

      li {
        list-style: none;
        padding: 10px 10px 20px 5px;

        ul {
          text-align: justify;
          line-height: 2rem;
          color: white;
        }
      }
    }
  }
}

.social-network {
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 20px;

  .linkedin,
  .instagram,
  .twitter,
  .youtube {
    padding: 2px 8px;
    margin: 0 10px;

    border-radius: 50px;
  }

  .linkedin {
    border: 1px solid #2477b5;

    a {
      color: #2477b5;
    }
  }

  .twitter {
    border: 1px solid #031725;

    a {
      color: #031725;
    }
  }

  .instagram {
    border: 1px solid #e757c6;

    a {
      color: #e757c6;
    }
  }

  .youtube {
    border: 1px solid red;

    a {
      color: red;
    }
  }
}

.copyright {
  background-color: #f5eee2;
  padding: 30px 0;

  .devisor-line {
    margin: auto;
    width: 35%;
    border: 0.1px solid hsla(33, 98%, 38%, 0.327);
  }

  .content {

    width: 27%;
    position: relative;

    /* bottom: -627px;
    right: 36.5%; */

    h5 {
      padding: 5px;
      background-color: #f5eee2;
      border-radius: 50px;
      position: absolute;
      bottom: -15px;
      right: -524px;
      width: 100%;
      font-size: 1rem;
      text-align: center;
      color: hsl(33, 98%, 38%, 1);
    }
  }
}
</style>

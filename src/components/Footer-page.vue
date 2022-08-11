<template>
  <div class="footer">  

   <div class="footer-contents">
     <div class="my-pro">
        <h5>Kingsley Etukudo</h5>
        <p>Creative Frontend Developer</p>
    </div>

    <div class="social-handles">
        <a href="https://github.com/Kingsleyetukudo" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a href="https://web.facebook.com/kingsleyetukudo1998" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
        <a href="https://wa.me/+2348105729585?text=Hi, Am Kingsley Etukudo, from Nigeria may i know you."> <font-awesome-icon icon="fa-brands fa-whatsapp" /></a>
        <a href="https://www.instagram.com/kingsley_etukudo/" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        <a href="https://twitter.com/Kamzzyking" target="_blank"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
        <a href="https://www.linkedin.com/in/kingsley-etukudo-475578225" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
    </div>


   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

    .footer {
        background-color: #000;
        display: flex;
    }

    .my-pro {
        text-align: center;
    }

    .footer-contents {
        width: 95%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem 0;
    }

    .social-handles {
        display: flex;
        gap: 2rem;
    }


    a {
        color: #fff;
        font-size: 1.5em;
    }

    a:hover{
        color: #ffb742;
    }

    .my-pro h5 {
        color: #ffb742;
        font-weight: 700;
    }

    @media (max-width: 600px) {
        .footer-contents {
            flex-wrap:wrap;
            align-items: center;
            gap: 2rem;
        }

        .my-pro {
            text-align: center;
        }
    }

</style>
<template>
  <div class="hero" id="home">
    <div class="text">
        <h4>I'm <span>Kingsley Etukudo</span> </h4>
        <h3>Creative Frontend Developer</h3>
        <p>I design and code beautifully responsive web pages.</p>
    </div>
    <div class="passport">
        <div class="img-holder">
            <img src="../assets/my-pic2.png" alt="">
        </div>
    </div>

    <div class="social-handles">
        <!-- <p>Contact me via:</p> -->
        <a href="https://github.com/Kingsleyetukudo" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a href="https://web.facebook.com/kingsleyetukudo1998" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
        <a href="https://www.instagram.com/kingsley_etukudo/" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        <a href="https://twitter.com/Kamzzyking" target="_blank"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
        <a href="https://www.linkedin.com/in/kingsley-etukudo-475578225" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


.img-holder {
 width: 100%;
 height: 100%;
 padding: 0;
 border-bottom: 3px solid #ffb742;
 position: relative;
}

.img-holder img {
    width: 100%; 
    height: 100%;
}


.passport {
    /* border: 1px solid red; */
    height: 700px;
    /* width: 50%; */
 /* position: relative; */

}


.hero {
    display: grid;
    grid-template-columns: repeat(2, 1fr );
    height: 100vh;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10rem;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
}

.social-handles {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 1.5rem;
    position: absolute;
    right: .2rem;
}

/* .social-handles p {
    transform: rotate(90deg);
    margin-bottom: 3rem;
    color: #fff;
    border: 1px solid red;
    text-align: right;
    padding: 0;
    margin: 0;
} */

a {
    color: #fff;
    font-size: 1.5em;
    text-decoration: none;
}

a:hover{
    color: #ffb742;
}

h4 > span {
    color: #ffb742;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 1.5em;

}

h3 {
    letter-spacing: 2px;
    margin-top: 1rem;
    font-weight: 600;
}

p {
    font-size: 1.2em;
    font-weight: 100;
    color: #ffb742;
}


@media (max-width: 600px) {

    .hero {
        align-items: flex-start;
        grid-template-columns: 1fr;
        height: 100%;
        margin-bottom: 5rem;
    }

    .social-handles {
        top: 5rem;
    }
    h3 {
        font-size: 1.5em;
    }

    h4{
        font-size: 2em;
        line-height: 40px;
    }

    .passport {
        height: 100%;
    }
}

</style>
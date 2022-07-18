<template>
  <div class="hero">
    <h4>Hi, I Am <span>Kingsley</span></h4>
    <h3 class="center">Creative Designer & <br>Frontend Developer</h3>
    <p>I design and code beautifully responsive web pages.</p>
    <div class="passport">
        <img src="../assets/new-logo.png" alt="">
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

.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 1.5rem;
}

h4 > span {
    color: #ffb742;
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: 600;

}

h3 {
    letter-spacing: 2px;
    margin-top: 1rem;
    font-weight: 600;
}

p {
    font-size: 1.2em;
    font-weight: 100;
    text-align: center;
}

.passport {
    width: 230px;
    height: 230px;
    margin-top: 5rem;
}

.passport img {
    width: 100%;
    height: 100%;
}

</style>
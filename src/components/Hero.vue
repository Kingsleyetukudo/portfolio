<template>
  <div class="hero">
    <h4>Hi, I Am <span>Kingsley</span></h4>
    <h3>Creative Designer & Frontend Developer</h3>
    <p>I design and code beautifully simple users interative web pages, and a love what I do.</p>
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

.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h4 > span {
    color: #ffb742;
    text-decoration: underline;
}

.passport {
    width: 230px;
    height: 230px;
}

.passport img {
    width: 100%;
    height: 100%;
}

</style>
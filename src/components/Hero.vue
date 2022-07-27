<template>
  <div class="hero">
    <h4>Hi, I Am <span>Kingsley</span></h4>
    <h3 class="center">Creative Designer <br> <span class="and"> & </span> <br>Frontend Developer</h3>
    <p>I design and code beautifully responsive web pages.</p>
    <div class="passport">
        <img src="../assets/profilepic.png" alt="">
        <div class="profile-image-holder">
            <!-- <img src="../assets/drawing.svg" alt=""> -->
        </div>
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

.profile-image-holder {
    height: 155px;
    width: 225px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    /* border-radius: 50%; */
    background:#ffb742;
}

.profile-image-holder img {
    width: 100%;
    height: 100%;
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
    text-align: center;
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
    position: relative;
}

.passport img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -5rem;
    left: 0;
}

.and {
    color: #ffb742;
}

@media (max-width: 600px) {
    h3 {
        font-size: 2.1em;
    }
}

</style>
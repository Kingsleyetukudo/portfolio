<template>
  <div class="skill" id="skills">
      <div class="skill-content">
          <h5 class="chip">MY SKILLS</h5>
        <h3>What My Programming Skills Included:</h3>
        <p>I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
        <span class="chip hire center">Hire Me</span>
    </div>
    <div class="skill-bar">
        <div class="skill-logo">
            <img src="../assets/html5-log.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/css-3-logo.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/js-logo.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/bootstrap-logo.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/materialize-logo.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/tailwind-css-logo.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/vuejs-logo.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/typescript-logo.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/vuetify-logo.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/Wordpress_Blue_logo.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/Elementor-Logo-Symbol-Red.webp" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/github-logo.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/adobe-xd-logo.png" alt="">
        </div>
        <div class="skill-logo">
            <img src="../assets/figma-logo.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

h5, h3, p{
    margin: 0;
}

h5 {
    font-size: 1em;
    font-weight: 600;
    background-color: #292b2e;
    color: #ffb742;
}

p{
    word-spacing: 2px;
}

h3 {
    font-weight: 700;
}

.hire {
    background-color: #ffb742;
    font-size: 1em;
    font-weight: 600;
    width: 100px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.skill-content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: .3rem;
}

.skill {
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap: 3rem;
 width: 90%;
 margin: 10rem auto;

}

.skill-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

}

.skill-logo {
    width: 70px;
    height: 70px;
    padding: 1rem;
    background-color: #292b2e;
    border-radius: 5px;
}

.skill-logo img {
    width: 100%;
    height: 100%;
}

.skill-logo:hover{
    background-color: #ffb742;
}

@media (max-width: 1000px) {
    .skill {
        flex-direction: column;
    }

    h3 {
        font-size: 2em;
    }
}

@media (max-width: 600px) {
    .skill {
        margin: 5rem auto;
    }
}

</style>
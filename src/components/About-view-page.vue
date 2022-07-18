<template>
  <div class="about">
    <div class="about-image">
        <img src="../assets/Kingsley.jpeg" alt="">
    </div>
    <div class="about-content">
        <h5 class="chip">WHO I AM</h5>
        <h1>About Me</h1>
        <p>Hi! I’m Kingsley, and I’m a designer & developer who has passion for building clean web applications with intuitive functionality. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.</p>
        <span class="chip hire center">Hire Me</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

h5, h1, p{
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

h1 {
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

.about-content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: .3rem;
}

.about {
 display: grid;
 grid-template-columns: 1fr 1fr;
 align-items: center;
 gap: 8rem;
 width: 80%;
 margin: 0 auto;
}

.about-image {
    height: 400px;
    border-radius: 5px;
}

.about-image img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

</style>
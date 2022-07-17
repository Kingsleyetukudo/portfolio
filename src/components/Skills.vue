<template>
  <div class="skill">
      <div class="skill-content">
          <h5 class="chip">MY SKILLS</h5>
        <h3>What My Programming Skills Included:</h3>
        <p>I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
        <span class="chip hire center">Hire Me</span>
    </div>
    <div class="skill-bar">
        
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
    border: 1px solid red;
}

.skill {
 display: grid;
 grid-template-columns: 1fr 1fr;
 align-items: center;
 gap: 3rem;
 width: 80%;
 margin: 5rem auto;

}



</style>
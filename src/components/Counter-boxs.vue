<template>
  <div class="counter-col">
    <div class="counter z-depth-2">
        <div class="icon"> <i class="material-icons">today</i></div>
        <div class="count-year center">
            <h5>5+</h5>
            <p>Years of Experiences</p>
        </div>
        <span> <i class="material-icons">chevron_right</i></span>
    </div>

    <div class="counter z-depth-2">
        <div class="icon"> <i class="material-icons">done</i></div>
        <div class="count-year center">
            <h5>100+</h5>
            <p>Completed Projects</p>
        </div>
        <span> <i class="material-icons">chevron_right</i></span>
    </div>

    <div class="counter z-depth-2">
        <div class="icon"> <i class="material-icons">group</i></div>
        <div class="count-year center">
            <h5>50+</h5>
            <p>Happy Clients</p>
        </div>
        <span> <i class="material-icons">chevron_right</i></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .counter-col {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        margin: 10rem 0;
    }
    .counter {
        background-color: #292b2e;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        width: 350px;
        border-radius: 10px;
    }

    h5 {
        font-size: 2em;
        color: #ffb742;
        font-weight: 600;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        padding: .5rem;
        border-radius: 50%;
    }

    .icon i {
        font-size: 2em;
        color: black;
    }

    p, h5{
        padding: 0;
        margin: 0;
    }
</style>
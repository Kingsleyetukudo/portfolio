<template>
  <div class="project-col">
   <div class="project-text-col">
     <h4 class="chip">MY WORKS</h4>
    <h3>Featured Works</h3>
    <!-- <ul>
        <li><a href="#">All</a></li>
        <li><a href="#">Website Design</a></li>
        <li><a href="#">Website Development</a></li>
    </ul> -->
   </div>

   <div class="project-display">
    <div class="pix1 box"></div>
    <div class="pix2 box"></div>
    <div class="pix3 box"></div>
    <div class="pix4 box"></div>
    <div class="pix5 box"></div>
    <div class="pix6 box"></div>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

h4 {
    padding: 1rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    background-color: #292b2e;
    color: #ffb742;
}

h3 {
    font-weight: 700;
}
    .project-col {
        width: 80%;
        margin: 0 auto;
        display: flex ;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }

    .project-text-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .project-text-col ul {
        display: flex;
        gap: 3rem;
        width: 100%;
        align-items: center;
    }

    .project-text-col li a {
        color: #fff;
        font-size: 1em;
        font-weight: 600;
        padding: .5rem;
        text-align: center;
    }

    .project-text-col li a:hover, .project-text-col li a:focus {
        background-color: #ffb742;
        color: #000;
        border-radius: 5px;
    }

    .project-display {
        display: grid;
        grid-template-columns: 300px 300px 300px;
        grid-template-rows: 250px 250px 250px;
        gap: 1rem;
        width: 100%;
        justify-content: center;
        grid-template-areas: 
        "box1 box2 box3"
        "box1 box4 box3"
        "box5 box4 box6";
    }

    .box {
        border-radius: 5px;
    }

    .pix1 {
        grid-area: box1;
        background-color: #ffb742;
        background-image: url('../assets/Bookmark-landing-page.png');
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
    }

    .pix2 {
        grid-area: box2 ;
        background-image: url('../assets/jobboard-page.png');
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .pix3 {
        grid-area: box3;
        background-image: url('../assets/user-profile-page.png');
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
    }
   

    .pix4 {
        grid-area: box4;
        background-image: url('../assets/adobe-landing-page.png');
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;


    }
    .pix5{
        grid-area: box5;
        background-image: url('../assets/apple-landing-page.png');
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .pix6 {
        grid-area: box6;
        background-image: url('../assets/IP-address-tracker.png');
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
    }


@media (max-width: 950px) {
    .project-display {
        grid-template-columns: 300px 300px;
        grid-template-rows: 250px 250px 250px;
        grid-template-areas: 
        "box1 box2"
        "box3 box4"
        "box5 box6";
    }
}

@media (max-width: 600px) {
      .project-display {
        grid-template-columns: 100%;
        grid-template-rows: 250px 250px 250px 250px 250px 250px ;
        grid-template-areas: 
        "box1"
        "box3"
        "box5"
        "box6"
        "box4"
        "box2";
    }

    h3 {
        font-size: 2em;
    }
}
</style>
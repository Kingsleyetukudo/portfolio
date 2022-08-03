<template>
  <div class="project-display">
    <a href="#" class="pix1 box"><div> <span>View Project</span></div></a>
    <a href="#" class="pix2 box"><div> <span>View Project</span></div></a>
    <a href="#" class="pix3 box"><div> <span>View Project</span></div></a>
    <a href="#" class="pix4 box"><div> <span>View Project</span></div></a>
    <a href="#" class="pix5 box"><div> <span>View Project</span></div></a>
    <a href="#" class="pix6 box"><div> <span>View Project</span></div></a>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.project-display {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    width: 100%;
    padding: 2rem;
}
.box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box span, .more-btn a {
    text-decoration: none;
    padding: 1rem;
    background: #0000ff;
    color: #fff;
    box-shadow: 0 2px 10px #292b2e;
    border-radius: 10px;
    font-weight: 700;
}

.box span {
    display: none;
}

.box:hover span {
    display: block;
}

.box {
    border-radius: 5px;
    height: 200px;
    width: 100%;
}

.pix1 {
    background-color: #ffb742;
    background-image: url('../assets/Bookmark-landing-page.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}
.pix2 {
    background-image: url('../assets/jobboard-page.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}

.pix3 {
    background-image: url('../assets/user-profile-page.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}


.pix4 {
    background-image: url('../assets/adobe-landing-page.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;


}
.pix5{
    background-image: url('../assets/apple-landing-page.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}

.pix6 {
    background-image: url('../assets/IP-address-tracker.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
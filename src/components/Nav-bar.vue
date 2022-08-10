<template>
<header>
    <div class="nav-col">
     <div class="logo">
        <img src="../assets/new-logo.png" alt="">
     </div>

     <div class="nav-list">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
     </div>

     <div class="hire"> 
        <a href="../assets/ETUKUDO_KINGSLEY_CV.pdf" download="CV.pdf"> Download CV</a> 
    </div>
    </div>

    <div class="mobile-nav-col">
     <div class="logo">
        <img src="../assets/new-logo.png" alt="">
     </div>

     <div class="bar"> 
         
        <span @click="showNav"><font-awesome-icon icon="fa-solid fa-bars" /></span>
     </div>
    </div>
</header>

<div :class="{'mobile-nav-list' : mobileNav, 'off-moblie-nav-list' : !mobileNav}">
    <div class="span"><i class="material-icons" @click="closeNav">close</i></div>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
    <div class="hire"> 
        <a href="../assets/ETUKUDO_KINGSLEY_CV.pdf" download="CV.pdf"> Download CV</a> 
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            mobileNav: false
        }
    },

    methods: {
        showNav() {
            this.mobileNav = !this.mobileNav
        },

        closeNav() {
            this.mobileNav = !this.mobileNav
        }
    }

}
</script>

<style scoped>

* {
    box-sizing: border-box;
}

header {
    padding: 1rem 0;
    position: relative;
}

.bar{
    display: flex;
    align-items: center;
    font-size: 3em;
}

.bar i {
    font-size: 6em;
    cursor: pointer;
}

.bar .btn {
    background-color: #ffb742;
    border-radius: 25px;
    font-weight: 600;
}

.span {
    width: 100%;
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
}

.span i {
    font-size: 3em;
}

.mobile-nav-list {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #383e45;
    width: 100%;
    height: 1000px;
    overflow: hidden;
    transition: all .5s ease-in-out;
    z-index: 10000;
    position: absolute;
    top: 0;
}

.mobile-nav-list .hire {
    margin-top: 1rem;
    text-align: center;
    width: fit-content;
}

.off-moblie-nav-list {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 0;
    height: 0;
    z-index: 1000;
    overflow: hidden;
    transition: all .5s ease-in-out;
}

.mobile-nav-list a, .off-moblie-nav-list a {
    font-size: 1.5em;
    color: #fff;
    /* border-top: 2px solid #ddd; */
    padding: 1rem 0;
}

.mobile-nav-list .hire a {
    border-bottom: none;
}

.nav-col {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
}

.mobile-nav-col {
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
}

.nav-list {
    display: flex;
    gap: 2rem;
}

.nav-col a{
    font-size: 1.2em;
    color: #fff;
    padding: 1rem;
}

.nav-col a:hover {
    background-color: #ffb742;
    color: #000;
    border-radius: 10px;
}

.hire:hover {
    background-color: #ffb742;
    border: 3px solid #fff;
}

.logo {
    width: 80px;
    height: 80px;
}

.logo img {
    width: 100%;
    height: 100%;
}

.hire {
    background-color: #383e45;
    font-weight: 600;
    cursor: pointer;
    padding: 1rem;
    border-radius: 20px;
    border: 3px solid #ffb742;
    color: #ffb742;
}


@media (max-width: 850px) {
    .nav-col {
        display: none;
    }

    .mobile-nav-col {
        display: flex;
    }
}


</style>
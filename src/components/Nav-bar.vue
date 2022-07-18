<template>
<header>
    <div class="nav-col">
     <div class="logo">
        <img src="../assets/new-logo.png" alt="">
     </div>

     <div class="nav-list">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
     </div>

     <div class="hire chip"> Hire Me</div>
    </div>

    <div class="mobile-nav-col">
     <div class="logo">
        <img src="../assets/new-logo.png" alt="">
     </div>

     <div class="bar"> 
        <button class="btn-small btn btn-flat">Hire Me</button>
        <span @click="showNav"><i class="material-icons">menu</i></span>
     </div>
    </div>
</header>

<div :class="{'mobile-nav-list' : mobileNav, 'off-moblie-nav-list' : !mobileNav}">
    <div class="span"><i class="material-icons" @click="closeNav">close</i></div>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Skills</a>
    <a href="#">Portfolio</a>
    <a href="#">Contact</a>
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
    padding: 2rem 0;
    position: relative;
}

.bar{
    display: flex;
    align-items: center;
    gap: 2rem;
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

    position: absolute;
    top: 0;
}

.off-moblie-nav-list {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 0;
    height: 0;
    overflow: hidden;
    transition: all .5s ease-in-out;
}

.mobile-nav-list a, .off-moblie-nav-list a {
    font-size: 2em;
    color: #fff;
    border-top: 2px solid #ddd;
    padding: 2rem 0;
}

.mobile-nav-list a:last-child {
    border-bottom: 2px solid #ddd;
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
    border-radius: 5px;
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
    background-color: #ffb742;
    font-weight: 600;
    cursor: pointer;
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
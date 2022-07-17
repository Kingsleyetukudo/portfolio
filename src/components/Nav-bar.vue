<template>
<header>
    <div class="nav-col">
     <div class="logo">
        <img src="../assets/new-logo.png" alt="">
     </div>

     <div class="nav-list">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
     </div>

     <div class="hire chip"> Hire Me</div>
    </div>
</header>
</template>

<script>
export default {

}
</script>

<style scoped>

header {
    padding: 1rem 0;
}

.nav-col {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
}

.nav-col ul {
    display: flex;
    gap: 3rem;
}

.nav-col li a{
    font-size: 1.2em;
    color: #fff;
}

.logo {
    width: 50px;
    height: 50px;
}

.logo img {
    width: 100%;
    height: 100%;
}

.hire {
    background-color: #ffb742;
}


</style>
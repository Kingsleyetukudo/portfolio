<template>
  <div class="footer">
    <div class="let-do-project">
        <h5>Start a project</h5>
        <p>Interested in working together? We should queue up a chat. I'll buy the coffee.</p>
         <button class="btn-large btn btn-flat"> Let's do this </button>
    </div>

   <div class="footer-contents">
     <div class="my-pro">
        <h5>Kingsley Etukudo</h5>
        <p>Creative Designer & Frontend Developer</p>
    </div>
    <div class="useful-links">
        <h6>Useful Links</h6>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
    <div class="social-handles">
        <h6>Social Media</h6>
        <ul>
            <li><a href="#">Linkedin</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Github</a></li>
            <li><a href="#">Facebook</a></li>
        </ul>
    </div>


   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .footer {
        background-color: #000;
        position: relative;
        display: flex;
    }

    .footer-contents {
        width: 95%;
        margin: 10rem auto;
        display: flex;
        gap: 10rem;
    }

    .let-do-project {
        background-color: #ffb742;
        padding: 2rem;
        width: 80%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        left: calc(11.25% - 50px);
        top: -60px;
    }

    .let-do-project h5 {
        color: #000;
        font-weight: 600;
        font-size: 2.5em;
    }

    h6 {
        font-weight: 600;
        font-size: 1.2em;
        color: #ffb742;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    a {
        color: #fff;
        font-size: 1.1em;
    }

    a:hover{
        border-bottom: 1px #fff solid;
        color: #ffb742;
    }

    .my-pro h5 {
        color: #ffb742;
        font-weight: 700;

    }

    .let-do-project p {
        color: #000;
        text-align: center;
        font-size: 1.2em;
        font-weight:600;
    }

    .let-do-project .btn {
        color: #000;
        background-color: transparent;
        border: 2px solid #000;
        border-radius: 50px;
    } 

</style>
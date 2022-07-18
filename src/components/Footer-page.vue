<template>
  <div class="footer">
    <div class="let-do-project">
       <div class="text">
         <h5>Start a project</h5>
        <p>Interested in working together? We should queue up a chat. I'll buy the coffee.</p>
       </div>
         <button> Let's do this </button>
    </div>

   <div class="footer-contents">
     <div class="my-pro">
        <h5>Kingsley Etukudo</h5>
        <p>Creative Designer & Frontend Developer</p>
    </div>
    <div class="useful-links">
            <a href="#">Home</a>
            <a href="#">About</a>   
            <a href="#">Skills</a>  
            <a href="#">Portfolio</a>   
            <a href="#">Contact</a> 
    </div>
    <div class="social-handles">
        
    </div>


   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

    .footer {
        background-color: #000;
        position: relative;
        display: flex;
    }

    .footer-contents {
        width: 95%;
        margin: 0 auto;
        margin-top: 11rem;
        display: flex;
        flex-direction: column;
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

    button{
        padding: 1rem;
        background: transparent;
        border: 2px solid #000;
        border-radius: 25px;
        margin-top: 2rem;
    }

    .useful-links {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
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
        font-size: 1.2em;
        font-weight:600;
    }

    .let-do-project .btn {
        color: #000;
        background-color: transparent;
        border: 2px solid #000;
        border-radius: 50px;
    } 

    @media (max-width: 600px) {
        .footer-contents {
            flex-wrap:wrap;
            gap: 5rem;
            margin-top: 15rem ;
        }

        .let-do-project {
            width: 100%;
            flex-direction: column;
            border-radius: 0;
        }

        .text {
            text-align: center;
        }
    }

</style>
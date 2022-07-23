<template>
  <div class="footer">  

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
        display: flex;
    }

    .footer-contents {
        width: 95%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 0;
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

    @media (max-width: 600px) {
        .footer-contents {
            flex-wrap:wrap;
            align-items: center;
            gap: 2rem;
        }

        .my-pro {
            text-align: center;
        }
    }

</style>
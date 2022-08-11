<template>
     <div class="let-do-project">
       <div class="text">
         <h5>Let's start a project</h5>
        <p>Hello there, feel free to contact me at any time, I will get back to you and if it's urgent, my social handle would be better in situations like this.</p> <br>
        <h6>kingsleyj90@gmail.com</h6>
       </div>
         <!-- <button> Let's do this </button> -->
        <div class="btn-link">
             <a href="https://wa.me/+2348105729585?text=Hi, Am Kingsley Etukudo, from Nigeria may i know you.">WhatsApp <font-awesome-icon icon="fa-brands fa-whatsapp" /></a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.let-do-project {
    background-color: #ffb742;
    padding: 1rem;
    width: 80%;
    margin: 0 auto;
    box-shadow: 0 2px 5px #ffb742;
    margin-bottom: 10rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
}

.let-do-project h5 {
    color: #000;
    font-weight: 700;
    font-size: 2.5em;
}

a {
    text-decoration: none;
    padding: 1rem;
    background: #0000ff;
    color: #fff;
    box-shadow: 0 2px 10px #292b2e;
    border-radius: 10px;
    font-weight: 700;
}

h6 {
    font-size: 1.3em;
    font-weight: 600;
    color: #000;
}

button{
    padding: 1rem;
    background: #000;
    border: 2px solid #000;
    border-radius: 25px;
    margin-top: 2rem;
    color: #fff;
    font-weight: 600;
}

/* .text {
    width: 70%;
} */

.btn-link{
    width: 50%;
    text-align: right;
}

   .let-do-project p {
        color: #000;
        font-size: 1.2em;
        font-weight:300;
    }

@media (max-width: 700px) {
    .let-do-project {
        flex-direction: column;
        margin-bottom: 5rem;
    }

    .btn-link {
        align-self: center;
        width: 100%;
    }
}
</style>
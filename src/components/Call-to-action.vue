<template>
     <div class="let-do-project">
       <div class="text">
         <h5>Let start a project</h5>
        <p>Interested in working together? We should queue up a chat. I'll buy the coffee 🤝.</p>
       </div>
         <button> Let's do this </button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.let-do-project {
    background-color: #ffb742;
    padding: 2rem;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.let-do-project h5 {
    color: #000;
    font-weight: 600;
    font-size: 2.5em;
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

   .let-do-project p {
        color: #000;
        font-size: 1.2em;
        font-weight:600;
    }

@media (max-width: 700px) {
    .let-do-project {
        flex-direction: column;
    }

    button {
        align-self: flex-end;
    }
}
</style>
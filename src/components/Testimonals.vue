<template>
  <div class="testimonal-col">
   <div class="testimonal-text-col">
        <h4 class="chip">TESTIMONALS</h4>
        <h3>What Clients Says</h3>
   </div>

   <div class="testimonal-display">

        <div class="card-body z-depth-3">
            <span class="star">
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi harum nam rerum suscipit veniam enim beatae voluptate vitae eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure labore aliquid sapiente ad nam atque, culpa optio inventore libero. Quia architecto nesciunt cupiditate enim nam dolor illo suscipit velit id, ratione aliquid debitis rerum necessitatibus unde quo quasi quibusdam sint. Magni rem ex ducimus cum doloremque odio eaque omnis!</p>

            <div class="client-details">
                <div class="photo">
                    <img src="../assets/new-logo.png" alt="">
                </div>
                <div class="detail">
                    <h5>Bashir Ibrahim</h5>
                    <p>Designer</p>
                </div>
            </div>
        </div>
        <div class="card-body z-depth-3">
            <span class="star">
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi harum nam rerum suscipit veniam enim beatae voluptate vitae eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minima earum fugiat dolorum ex, temporibus eaque debitis. Facilis perferendis quae, aspernatur harum minima accusamus aperiam odio. Fuga quia sunt id sapiente laborum odit amet quas. Placeat libero, consectetur laboriosam, vitae dolorum quis id numquam commodi perspiciatis omnis esse ipsa odit.</p>

            <div class="client-details">
                <div class="photo">
                    <img src="../assets/new-logo.png" alt="">
                </div>
                <div class="detail">
                    <h5>Bashir Ibrahim</h5>
                    <p>Designer</p>
                </div>
            </div>
        </div>
        <div class="card-body z-depth-3">
            <span class="star">
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi harum nam rerum suscipit veniam enim beatae voluptate vitae eius. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae maxime deleniti eligendi aperiam amet. Vero corrupti dolor dolorem facere maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatum facere, quasi cum et a nobis distinctio earum mollitia non?</p>

            <div class="client-details">
                <div class="photo">
                    <img src="../assets/new-logo.png" alt="">
                </div>
                <div class="detail">
                    <h5>Bashir Ibrahim</h5>
                    <p>Designer</p>
                </div>
            </div>
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

h5 {
    color: #000;
    font-weight: 600;
    font-size: 1.2em;
}

.star i {
    color: #ffb742;
}

p {
    color: #000;
    font-size: 1em;
    word-spacing: 2px;
    letter-spacing: 1px;
}

h3 {
    font-weight: 700;
}
    .testimonal-col {
        width: 80%;
        margin: 10rem auto;
        display: flex ;
        gap: 2rem;
        flex-direction: column;
        align-items: center;
    }

    .testimonal-text-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .testimonal-display {
        display: flex;
        gap: 2rem;
    }

    .card-body {
        width: 350px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        background-color: #fff;
        border-radius: 10px;
    }

    .client-details {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: auto;
    }

    .photo {
        width: 50px;
        height: 50px;
    }

    .photo img {
        width: 100%;
        height: 100%;
    }

</style>
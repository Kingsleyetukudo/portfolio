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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi harum nam rerum suscipit veniam enim beatae voluptate vitae eius.  </p>

            <div class="client-details">
                <div class="photo">
                    <img src="../assets/avatar.png" alt="">
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
            <p>klskklLorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi harum nam rerum suscipit veniam enim beatae voluptate vitae eius. Lorem ipsum </p>

            <div class="client-details">
                <div class="photo">
                    <img src="../assets/avatar.png" alt="">
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi harum nam rerum suscipit veniam enim beatae voluptate vitae eius. </p>

            <div class="client-details">
                <div class="photo">
                    <img src="../assets/avatar.png" alt="">
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi harum nam rerum suscipit veniam enim beatae voluptate vitae eius. </p>

            <div class="client-details">
                <div class="photo">
                    <img src="../assets/avatar.png" alt="">
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi harum nam rerum suscipit veniam enim beatae voluptate vitae eius. </p>

            <div class="client-details">
                <div class="photo">
                    <img src="../assets/avatar.png" alt="">
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
    font-weight: 700;
    font-size: 1.2em;
}


.star {
    text-align: right;
    font-size: 1em;
}
.star i {
    color: #ffb742;
}

p {
    color: #000;
    font-size: .9em;
    word-spacing: 2px;
    letter-spacing: 1px;
}

h3 {
    font-weight: 700;
}
.testimonal-col {
    width: 100%;
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
    width: 100%;
    padding: 2rem;
    align-items: center;
    overflow-x: scroll;
    gap: 1.5rem;
}

.testimonal-display::-webkit-scrollbar{
    display: none;
}

.card-body {
    max-width: 300px;
    min-width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #ddd;
    color: #fff;
    border-radius: 10px;
}

.client-details {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: auto;
    align-self: flex-end;
}

.photo {
    width: 50px;
    height: 50px;
    border-radius: 50px;
}

.photo img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
}

@media (max-width: 700px) {
    h3 {
        font-size: 1.5em;
    }

    .testimonal-col  {
        margin: 5rem auto;
    }
}

</style>
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi harum nam rerum suscipit veniam enim beatae voluptate vitae eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure </p>

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
            <p>klskklLorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi harum nam rerum suscipit veniam enim beatae voluptate vitae eius. Lorem ipsum </p>

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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi harum nam rerum suscipit veniam enim beatae voluptate vitae eius. </p>

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
    font-size: .9em;
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
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow: scroll;
    /* flex-wrap: wrap; */
    gap: 1rem;
}

.card-body {
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #fff;
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
}

.photo img {
    width: 100%;
    height: 100%;
}

</style>
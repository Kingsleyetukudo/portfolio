<template>
      <div class="form-holder" id="contact">

        <h3 >Contact</h3>
        <form>
          <div class="contact-list">
             <label>Name: 
            <input type="text" placeholder="Full name"> 
            </label> <br>

           <label>Email
           <input type="email" class="check" placeholder="Email">
           </label>
          </div>
           <label>Message
            <textarea placeholder="Message"></textarea>
            </label> <br>
             <button class="btn btn-flat btn-large">Submit
    <i class="material-icons right">send</i>
  </button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.form-holder {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 10rem;
}

.form-holder .btn {
    background-color: #ffb742;
    color: #000;
    border-radius: 10px;
}

.contact-list {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

label {
    font-size: 1.2em;
    color: #fff;
    width: 100%;
}

input{
    color: #fff;
    margin-bottom: 2rem;
    width: 100%;
    outline:#000
}


textarea {
    resize: none;
    width: 100%;
    height: 100px;
    color: #fff;
    font-size: 1.2em;
    padding: .5rem;
    border-radius: 5px;
    margin-top: 1.5rem;
}

textarea:focus{
    border: none;
}

@media (max-width: 500px) {
    .form-holder {
        padding: 0 2rem;
        width: 100%;
    }

    .contact-list {
        flex-wrap: wrap;
        gap: .2rem;
    }
}

@media (max-width: 700px) {
    .form-holder {
        width: 80%;
    }
}

</style>
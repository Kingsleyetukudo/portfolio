<template>
      <div class="form-holder">

        <h3>Contact</h3>
        <form>
           <label>Name: 
            <input type="text" placeholder="Full name"> 
            </label> <br>

           <label>Email
           <input type="email" class="check" placeholder="Email">
           </label> <br>
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
    width: 50%;
    margin: 0 auto;
    margin-bottom: 10rem;
}

.form-holder .btn {
    background-color: #ffb742;
    color: #000;
    border-radius: 10px;
}

label {
    font-size: 1.2em;
    color: #fff;
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
    height: 200px;
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
}

</style>
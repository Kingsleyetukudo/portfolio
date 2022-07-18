<template>
      <div class="form-holder">

        <h3>Contact</h3>
        <form>
           <label>Name: 
            <input type="text"> 
            </label>

           <label>Email
           <input type="email" class="check">
           </label>
           <label>Message
            <textarea></textarea>
            </label>
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
    outline:#000
}


textarea {
    resize: none;
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
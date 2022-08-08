<template>

    
    <span>{{ touppercase  }}</span>
    <!-- <div class="post"> -->

    <span v-for="post in snippet" :key="post">{{ post }}</span>
    <!-- </div> -->

  <div>
    <button @click="show = !show">Show</button>
      <transition>
        <p v-if="show">Lorem, ipsum dolor.</p>
    </transition>
  </div>

  <div>
    <button @click="store.increment()">from B: {{ store.count }}</button>
  </div>
  <div class="project-display">
    <a href="#" class="pix1 box"><div> <span>View Project</span></div></a>
    <a href="#" class="pix2 box"><div> <span>View Project</span></div></a>
    <a href="#" class="pix3 box"><div> <span>View Project</span></div></a>
    <a href="#" class="pix4 box"><div> <span>View Project</span></div></a>
    <a href="#" class="pix5 box"><div> <span>View Project</span></div></a>
    <a href="#" class="pix6 box"><div> <span>View Project</span></div></a>
   </div>
</template>

<script>
import {store} from '../components/store'
export default {
    components: {
        
    },
    data() {
        return {
            store,
            show: false,
            message: 'Testing for filters in vue',
            posts: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
            states: [],
            searchText: ''
        }
    },

    computed: {
        touppercase() {
            return this.message.toUpperCase()
        },

        snippet() {
            return this.posts.slice(0, 50) + '...'
        },
        search () {
            const filtered = this.states.filter(i => {
                return i.toLowerCase().includes(this.searchText)
            })
            return filtered
        }

    },

    // filters: {
    //     touppercase(value) {
    //         return value.toUpperCase()
    //     }
    // }

}
</script>

<style scoped>
p {
    border: 1px solid red;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.project-display {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    width: 100%;
    padding: 2rem;
}
.box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box span, .more-btn a {
    text-decoration: none;
    padding: 1rem;
    background: #0000ff;
    color: #fff;
    box-shadow: 0 2px 10px #292b2e;
    border-radius: 10px;
    font-weight: 700;
}

.box span {
    display: none;
}

.box:hover span {
    display: block;
}

.box {
    border-radius: 5px;
    height: 200px;
    width: 100%;
}

.pix1 {
    background-color: #ffb742;
    background-image: url('../assets/Bookmark-landing-page.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}
.pix2 {
    background-image: url('../assets/jobboard-page.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}

.pix3 {
    background-image: url('../assets/user-profile-page.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}


.pix4 {
    background-image: url('../assets/adobe-landing-page.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;


}
.pix5{
    background-image: url('../assets/apple-landing-page.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}

.pix6 {
    background-image: url('../assets/IP-address-tracker.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}

.post {
    /* width: 100%; */
    display: flex;
    gap: 2rem;
    color: blue;
}
</style>
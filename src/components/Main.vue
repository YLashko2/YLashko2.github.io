<template>
    <Header />
      <div class="container mt-5 title-container">
        <p class="title">POPULAR EVENTS</p>
      </div>
     <div class="container-fluid media-scroller snaps-inline">
      <div v-for="event_ in events.popular" class="media-element">
        <a v-bind:href="'event/' + event_.id"><img class="scroller-element" v-bind:src="event_.preview_image"></a>
        <p class="scroller-title">{{ event_.name }} - {{ event_.price }} zł</p>
      </div>
    </div>
    <div class="container mb-3 title-container">
      <p class="title">TOP EVENTS</p>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm mb-3" v-for="event_ in events.top">
          <div class="card">
            <a v-bind:href="'event/' + event_.id"><img class="card-img" v-bind:src="event_.preview_image" alt="event-preview"></a>
            <p class="card-title">{{ event_.name }} - {{ event_.price }} zł</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5 footer">
      <div class="row">
          <p class="authors">
            Ryhor Hapkala 218524
          </p>
          <p class="authors">
            Yahor&nbsp;Lashko&nbsp;&nbsp;219145
          </p>
      </div>
    </div>
</template>

<script>
import { collection, getDocs, query } from 'firebase/firestore';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import db from "../firebaseInit";
import Header from './Header.vue';
export default {
  components: { Header },

  data() {
    return {
      store: useStore(),
      router: useRouter(),
      events: {
        popular: [],
        top: []
      },
    }
  },

  methods: {
    async getEvents() {
      this.events = {
        popular: [],
        top: []
      }
      let events = await getDocs(query(collection(db, "events")));

      events.forEach(doc => {
        let data = doc.data();
        switch (data.category) {
          case "Popular": this.events.popular.push(data);
          break;
          case "Top": this.events.top.push(data);
          break;
        }
      });
      console.log(this.events);
    }
  },

  async mounted() {
    await this.getEvents();
  }
}
</script>

<style scoped>
    
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200&display=swap');
    @import url("https://unpkg.com/open-props");
    * {
      letter-spacing: 2px;
      font-weight: 100;
    }

    body{
      background: linear-gradient(90deg, rgba(5,5,80,1) 6%, rgba(149,110,156,1) 100%);
    } 

    .header-links{
      text-decoration: none;
      color: white;
    }
    .logo {
      cursor: pointer;
      width: 90%;
      margin-left: 2vw;
    }
    .account-logo{
      width: auto;
      height: auto;
    }
    .header-items{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p{
      color: white;
    }

    .scroller-element {
      aspect-ratio: 16 / 9;
      object-fit: cover;
      border-radius: 3vh;
      height: 20vh;
    }

    .media-scroller {
      padding-top: 3vh;
      margin-bottom: 6vh;
      display: grid;
      gap: 0.5vw;
      grid-auto-flow: column;
      padding: var(--size-3) var(--size-3); 
      overflow-x: auto;
      overscroll-behavior-inline: contain;
    }

    .media-element {                    
      display: grid;
      width: auto;
      border-radius: 2vh;
      gap: var(--size-1) ;   
      padding: var(--size-1);
      box-shadow: var(--shadow-2);
      transition: all 0.2s ease-in-out;
    }
    .scroller-title{
      font-size: 1.5vh;
    }

    .media-element:hover {
      transform: scale(1.05);
    }

    .snaps-inline {
      scroll-snap-type: inline mandatory;
      scroll-padding-inline: var(--size-2);
      scroll-snap-align: start;
    }

    .title-container{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .title {
      text-align: center;
      font-size: 2.5vh;
    } 

    ::-webkit-scrollbar {   
      height: 4px;
      width: 6px;
      background: #073678;
    }

    ::-webkit-scrollbar-thumb:vertical { 
      background: #7104de;
    }

    ::-webkit-scrollbar:horizontal {   
      height: 4px;
      width: 4px;
      background: #073678;
      display: none;
    }

    ::-webkit-scrollbar-thumb:horizontal {
      background: #7104de;
      border-radius: 10px;
      display: none;
    }
    .card{
      background: none;
      border-radius: 2vh;
      padding: 2vh 2vh 0.5vh 2vh;
      height: auto;
      box-shadow: var(--shadow-2);
      transition: all 0.2s ease-in-out;
    }
    .card-img{
      object-fit: cover;
      border-radius: 2vh;
      height: 35vh;
    }
    .card:hover{
      transform: scale(1.05);
      transform: rotateZ(1deg);
    }
    .card-title{
      text-align: center;
      font-size: 2vh;
    }

    .footer{
      background: gray;
      height: 10vh;
      background: black;
    }

    .by{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .authors{
        padding: 4px;
        margin: 0;
        letter-spacing: 4px;
        width: 100%;
    }

    .authors:hover {
      transform: rotateY(1000000deg);
      transition: transform 1000s;
    }
</style>

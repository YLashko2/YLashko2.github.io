<script>
import { onAuthStateChanged } from "firebase/auth";
import { VueElement } from "vue";
import { auth } from '../firebaseInit';
import { useStore } from 'vuex';
import db from "../firebaseInit";
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';

export default {
  data() {
    return {
      store: useStore(),
      userEmail: "",
    }
  },

  methods: {
    getHeaderStr() {
      if (this.store.getters.user.loggedIn) {
        this.userEmail = this.store.getters.user.data.email;
        return this.store.getters.user.data.email;
      } else {
        return "Login";
      }
    },

    getHeaderLink() {
      if (this.store.getters.user.loggedIn) {
        return "/profile";
      } else {
        return "/login";
      }
    },
  }
}
</script>

<template>
  <div class="container-fluid pt-5">
      <div class="row header">
        <div class="col-lg-6 text-start">
          <a href="/"><img class="logo" src="/src/assets/images/BiletX.svg" alt="logo"></a>
        </div>
        <div class="col-lg-6 header-items">
          <a class="header-links" id="account-link" v-bind:href="this.getHeaderLink()">{{ getHeaderStr() }}</a><img class="account-logo" src="/src/assets/vector.svg" alt="acc-logo">
        </div>
      </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200&display=swap');
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
      font-size: min(3vh, 6vw);
    }
    .logo {
      cursor: pointer;
      width: 90%;
      max-width: 30vh;
      margin-left: 2vw;
    }
    .search-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .account-logo{
      width: auto;
      height: auto;
    }
    .header-items{
      display: flex;
      justify-content: end;
      align-items: end;
      padding-right: 20px;
    }
    p{
      color: white;
    }

    .scroller-element {
      inline-size: 100%;
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
      border-radius: 2vh;
      gap: var(--size-1);
      padding: var(--size-1);
      box-shadow: var(--shadow-2);
      transition: all 0.2s ease-in-out;
    }
    .scroller-title{
      font-size: 1.5vh;
    }

    .scroller-element:hover {
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
      height: 40vh;
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
      letter-spacing: 4px;
    }
</style>

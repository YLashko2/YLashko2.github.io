<script>
import { collection, deleteDoc, getDocs, query, where, doc } from 'firebase/firestore';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import db from "../firebaseInit";
import { onMounted } from 'vue';

export default {
    data() {
        return {
            store: useStore(),
            router: useRouter(),
            events: [],
            user: null,
            futureEvents: [],
            pastEvents: [],
        }
    },

    watch: {
        user: async function() {
            await this.getReservations();
        }
    },

    methods: {
        async signout() {
            await this.store.dispatch('logout', {});
            this.router.push("/");
        },

        async getReservations() {
            if (!this.store.getters.user.loggedIn) {
                return ;
            }
            this.futureEvents = [];
            this.pastEvents = [];
            this.events = [];
            let reservationsDocs = await getDocs(
                query(collection(db, "tickets"), 
                where("user_email", "==", this.store.getters.user.data.email),
                ));
            let reservations = [];
            reservationsDocs.forEach(doc => {
                reservations.push(parseInt(doc.data().event_id));
            });

            await this.getEventsForReservations(reservations);
        },

        async getEventsForReservations(reservations) {
            let reservationsDocs = await getDocs(
                query(collection(db, "events"), 
                where("id", "in", reservations),
                ));
            reservationsDocs.forEach(doc => {
                this.events.push(doc.data());
            });
            
            for (let a = 0; a < this.events.length; a++) {
                let eventDate = this.events[a].date.seconds;
                var now = new Date().getTime() / 1000;
                if (eventDate > now) {
                    this.futureEvents.push(this.events[a]);
                } else {
                    this.pastEvents.push(this.events[a]);
                }
            }
        },

        getUser() {
            if ( this.store.getters.user.loggedIn ) {
                this.user = this.store.getters.user.data;
                return this.store.getters.user.data;
            }
            return null;
        },

        async cancel(eventId) {
            const reservationRef = doc(collection(db, "tickets"), "tickets-" + this.store.getters.user.data.email + "-" + eventId);
            await deleteDoc(reservationRef);
            await this.getReservations();
        }
    },
}
</script>

<template>
    <h2 class="page-title">Hello, {{ getUser().email }}</h2>
    <div class="d-flex buttons-container">
      <button v-on:click="signout">Sign out</button>
      <button v-on:click="router.push('/newevent')">New event</button>
    </div>

   <div class="title-container">
    <p class="page-title">Active tickets</p>
  </div>
   <div class="container-fluid mt-5" v-for="event_ in futureEvents">
    <div class="ticket active">
      <div class="row">
        <div class="col-sm event-info" >
          <a v-bind:href="'/event/' + event_.id"><img class="preview" v-bind:src="event_.preview_image"></a>
        </div>
        <div class="col event-info" >
          <p class="event-name">{{ event_.name }}</p>
        </div>
        <div class="col event-info">
          <p class="event-price">{{ event_.price }} zł</p>
        </div>
        <div class="col event-info">
          <p class="event-date">{{ new Date(event_.date.seconds * 1000).toLocaleString() }}</p>
          <i class="bx bx-active bx-time bx-md"></i>
        </div>
        <div class="col event-info">
          <button class="btn-lg" v-on:click="cancel(event_.id)">Cancel</button>
        </div>
      </div>
    </div>
    </div>
  <div class="title-container">
    <p class="page-title">History</p>
  </div>
    <div class="container-fluid mt-5" v-for="event_ in pastEvents">
    <div class="ticket unactive">
      <div class="row">
        <div class="col-sm event-info" >
          <a v-bind:href="'/event/' + event_.id"><img class="preview" v-bind:src="event_.preview_image"></a>
        </div>
        <div class="col event-info" >
          <p class="event-name">{{ event_.name }}</p>
        </div>
        <div class="col event-info">
          <p class="event-price">{{ event_.price }} zł</p>
        </div>
        <div class="col event-info">
          <p class="event-date">{{ new Date(event_.date.seconds * 1000).toLocaleString() }}</p>
          <i class="bx bx-unactive bx-time bx-md"></i>
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200&display=swap');
    @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');

    * {
      font-family: 'Outfit', sans-serif;
      font-weight: 100;  
    }
    body{
      background: linear-gradient(90deg, rgba(5,5,80,1) 6%, rgba(149,110,156,1) 100%);
    } 

    .header-links{
      text-decoration: none;
      color: white;
      font-size: 4vh;
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
    .preview {
      width: auto;
      max-width: 100%;
      min-width: 20vw;
      aspect-ratio: 16/9;
      object-fit: cover;
      border-radius: 3vh;
      border: 0.1vh solid #eeaef8;
    }

    .buttons-container {
      align-items: center;
      justify-content: center;
    }

    .buttons-container > * {
      margin: 3px;
    }

    .event-name, .event-price, .event-date {
      font-size: min(3vh, 6vw);
    }

    .event-info{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bx {
      margin-bottom: 2vh;
    }
    .bx-active{
      color: #eeaef8;
    }
    .bx-unactive{
      color: red;
    }

    .title-container{
      text-align: center;
      width: 100%;
      margin: 2vh 0 2vh 0;
    }
    .page-title{
      color: white;
      font-size: min(4vh, 7vw);
      text-shadow: 0px 3px 11px black;
      width: fit-content;
      margin: 0 auto 0 auto;
    }
    .active {
      background: rgba(18, 18, 201, 0.3);
      border-radius: 3vh;
    }
    .unactive {
      background: rgba(99, 99, 99, 0.5);
      border-radius: 3vh;
    }
</style>

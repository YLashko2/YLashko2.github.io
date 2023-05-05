<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <Header/>
    <div class="row main">
        <div class="col-lg-6 left">
            <div class="left-div">
                <img class="event-img" v-bind:src="event_.preview_image">
            </div>
        </div>
        <div class="col-lg-6 right">
            <div class="right-div">
                <h2 class="event-name">{{ event_.name }} - {{ event_.price }} zł</h2>
                <p class="description">
                    {{ event_.description }}
                </p>
                <h3 class="event-data">When? {{ new Date(this.event_.date.seconds * 1000).toLocaleString() }}</h3>
                <h3 class="event-data">Where? {{ event_.address }}</h3>
            </div>
        </div>
        <div class="map" id="mapContainer">

        </div>
    </div>
    <button class="add-reservaion-button" v-on:click="submitReservation" v-if="this.store.getters.user.loggedIn">Submit a reservaion</button>
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
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import db from "../firebaseInit";
import Header from "./Header.vue";
    export default {
        data() {
            return {
                store: useStore(),
                router: useRouter(),
                event_: {
                    date: "",
                },
            }
        },
        async mounted() {
            await this.getEvent();
            var map = L.map('mapContainer').setView([this.event_.place._lat, this.event_.place._long], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            L.marker([this.event_.place._lat, this.event_.place._long]).addTo(map);
        },
        methods: {
            async getEvent() {
                let events = await getDocs(query(collection(db, "events"), where("id", "==", parseInt(this.$route.params.event_id, 10))));
                this.event_ = events.docs[0].data();
            },

            async submitReservation() {
                const reservationRef = doc(collection(db, "tickets"), "tickets-" + this.store.getters.user.data.email + "-" + this.event_.id);
                await setDoc(reservationRef, {
                    user_email: this.store.getters.user.data.email,
                    event_id: this.event_.id,
                });
                this.router.push("/");
            },
        },
        components: {
            Header,
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200&display=swap');
    body {
        background-color: #050550;
    }
    * {
        font-family: "Outfit", sans-serif;
        letter-spacing: 2px;
        color: white;
    }
    .main {
        margin-top: 2vh;
        padding: 0 5vw 0 5vw;
    }
    .right {
        padding: 2vh;
    }
    .left {
        padding: 2vh;
    }
    .right-div {
        height: 100%;
        background-color: #28285f;
        border-radius: 4vh;
        padding: 1vh;
        overflow: hidden;
    }
    .map {
        max-height: 55%;
        min-height: 250px;
        width: 100%;
        margin: 0 12px 0 12px;
        border-radius: 4vh;
        margin-top: 2vh;
        background-color: #28285f;
    }
    .left-div {
        width: 100%;
        height: fit-content;
        margin-bottom: auto;
        background-color: #28285f;
        border-radius: 4vh;
        padding: 1vh;
    }
    .event-name {
        padding-left: 0vw;
    }
    .event-data {
        font-size: 22px;
    }
    p {
        padding-left: 1vw;
        padding-right: 1vw;
        font-size: 18px;
    }
    .event-img {
        object-fit: cover;
        border-radius: 4vh;
        height: auto;
        width: 100%;
        aspect-ratio: 4/3;
    }
    .add-reservaion-button {
        width: 100%;
        max-width: 400px;
        border-radius: 7px;
        margin-top: 10px
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
    .footer{
      background: gray;
      height: 10vh;
      background: black;
    }
</style>

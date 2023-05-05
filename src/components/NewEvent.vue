<script>
import { collection, doc, getDoc, getDocs, orderBy, query, setDoc, limit } from 'firebase/firestore';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import db from "../firebaseInit";
export default {
    data() {
        return {
            store: useStore(),
            router: useRouter(),
            name: "",
            category: "Top",
            imageLink: "",
            description: "",
            date: "",
            lat: "",
            lng: "",
            price: "",
            address: "",
            maxUsers: "",
        }
    },

    methods: {
        getCoordinates() {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lat = pos.coords.latitude;
                this.lng = pos.coords.longitude;
            });
        },

        async createEvent() {
            const lastEvent = await getDocs(
                query(collection(db, "events"),
                orderBy("id", "desc"),
                limit(1)
            ));
            let nextId = 0;
            lastEvent.forEach(event_ => {
                nextId = parseInt(event_.data().id) + 1;
            });
            await setDoc(
                doc(collection(db, "events"), "event-" + nextId),
                {
                    name: this.name,
                    place: {
                        _lat: this.lat,
                        _long: this.lng,
                    },
                    id: nextId,
                    users: 0,
                    category: this.category,
                    date: new Date(this.date),
                    price: parseInt(this.price),
                    description: this.description,
                    address: this.address,
                    max_users: parseInt(this.maxUsers),
                    preview_image: this.imageLink,
                    description: this.description,
                }
            );
            this.router.push("/");
        }
    }
}
</script>

<template>
    <div class="main">
        <button v-on:click="getCoordinates">Get coordinates from your current position</button>
        <form action="/" @submit.prevent="createEvent">
            <input class="col-sm input-area" required v-model="name" placeholder="Event name">
            <select class="col-sm select-area" required v-model="category">
                <option selected>Top</option>
                <option>Popular</option>
            </select>
            <input type="datetime-local" class="col-sm input-area" required v-model="date" placeholder="Date">
            <input type="text" class="col-sm input-area" required v-model="imageLink" placeholder="Image url">
            <input type="number" class="col-sm input-area" required v-model="lat" placeholder="Coordinates (lat)">
            <input type="number" class="col-sm input-area" required v-model="lng" placeholder="Coordinates (lng)">
            <input type="text" class="col-sm input-area" required v-model="address" placeholder="Address">
            <input type="numner" class="col-sm input-area" required v-model="maxUsers" placeholder="Max users">
            <input type="number" class="col-sm input-area" required v-model="price" placeholder="Price">
            <textarea placeholder="Description" class="col-sm input-area" required v-model="description"></textarea>
            <button v-on:click="createEvent">Create event</button>
        </form>
    </div>
</template>

<style scoped>
    form, main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    form > *, .main > * {
        margin: 1vh 0 1vh 0;
    }
    .input-area {
      width: 100%;
      height: auto;
      padding: 8px;
      border-radius: 1.5vh;
      text-align: center;
      font-size: 2vh;
      max-width: 50vh;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: white;
    }

    button {
        width: 100%;
        max-width: 50vh;
    }

    .select-area{
      display: block;
      height: auto;
      padding: 8px;
      font-size: 2vh;
      text-align: center;
      border-radius: 1.5vh;
      width: 100%;
      max-width: 50vh;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }

    .select-area > option {
        color: black;
        background-color: rgb(120, 120, 120);
    }
</style>

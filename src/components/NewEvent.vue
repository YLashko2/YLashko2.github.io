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
        }
    }
}
</script>

<template>
    <div class="main">
        <button v-on:click="getCoordinates">Get coordinates from your current position</button>
        <form action="/" @submit.prevent="createEvent">
            <input required v-model="name" placeholder="Name">
            <select required v-model="category">
                <option selected>Top</option>
                <option>Popular</option>
            </select>
            <input required v-model="date" placeholder="date">
            <input required v-model="imageLink" placeholder="image_link">
            <input required v-model="lat" placeholder="Coordinates (lat)">
            <input required v-model="lng" placeholder="Coordinates (lng)">
            <input required v-model="address" placeholder="Address">
            <input required v-model="maxUsers" placeholder="Max users">
            <input required v-model="price" placeholder="Price">
            <textarea required v-model="description"></textarea>
            <button v-on:click="createEvent">Create event</button>
        </form>
    </div>
</template>

<style scoped>
    form > *, .main > * {
        display: block;
    }
</style>

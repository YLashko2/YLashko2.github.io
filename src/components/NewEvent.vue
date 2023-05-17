<script>
import { collection, doc, getDoc, getDocs, orderBy, query, setDoc, limit } from 'firebase/firestore';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import db from "../firebaseInit";
import { getStorage, ref, uploadBytes, uploadString, getDownloadURL } from "firebase/storage";
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
            map: null,
            recording: false,
            height: 1280,
            width: 720,
            storage: getStorage(),
            uploadFromCamera: false,
        }
    },

    watch: {
        lat() {
            if (this.map != null) {
                return;
            }
            document.getElementById("mapContainer").removeAttribute("hidden");
            this.map = L.map('mapContainer').setView([this.lat, this.lng], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(this.map);
            
            this.markersGroup = L.layerGroup();
            this.map.addLayer(this.markersGroup);

            this.map.on('click', (e) => {
                this.addMarker(e, this.markersGroup, this.map);
            });
        }
    },

    methods: {
        async getCoordinates() {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lat = pos.coords.latitude;
                this.lng = pos.coords.longitude;
            });
        },

        addMarker(e, markersGroup) {
            markersGroup.clearLayers();
            this.newMarker = new L.marker(e.latlng).addTo(markersGroup);
            this.lat = e.latlng.lat;
            this.lng = e.latlng.lng;
        },

        async compressImage() {
            var canvas = document.getElementById("photo-canvas");
            var dataUrl = canvas.toDataURL('image/jpeg', 0.75);
            document.getElementById("photo-img").src = dataUrl;
            this.uploadFromCamera = true;
        },

        removeImage() {
            document.getElementById("photo-img").setAttribute("src", "");
            this.uploadFromCamera = false;
        },

        async createFirestoreEvent(nextId) {
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
                });
        },

        async createEvent() {
            const img = document.getElementById("photo-img").src;
            const lastEvent = await getDocs(
                query(collection(db, "events"),
                orderBy("id", "desc"),
                limit(1)
            ));
            let nextId = 0;
            lastEvent.forEach(event_ => {
                nextId = parseInt(event_.data().id) + 1;
            });
            if (this.uploadFromCamera) {
                const sRef = ref(this.storage, nextId+".jpg");
                uploadString(sRef, img, "data_url").then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        this.imageLink = downloadURL;
                    }).then(async () => {
                        await this.createFirestoreEvent(nextId);
                        this.router.push("/");
                    });
                });
            } else {
                await this.createFirestoreEvent(nextId);
                this.router.push("/");
            }
        },

        recordVideo() {
            navigator.mediaDevices
                .getUserMedia({ video: {facingMode: {exact: 'environment'}}, audio: false })
                .then((stream) => {
                    video.srcObject = stream;
                    video.play();
                })
                .catch((err) => {
                    console.error(`An error occurred: ${err}`);
                });
        }

    },

    mounted() {
        var img = this.image;
        let video = document.getElementById("video");
        let canvas = document.getElementById("photo-canvas");
        video.addEventListener(
        "canplay",
            (ev) => {
                if (!this.recording) {
                this.height = (video.videoHeight / video.videoWidth) * this.width;

                video.setAttribute("width", this.width);
                video.setAttribute("height", this.height);
                canvas.setAttribute("width", this.width);
                canvas.setAttribute("height", this.height);
                document.getElementById("photo-img").setAttribute("hidden", "");
                document.getElementById("video").removeAttribute("hidden");
                this.recording = true;
                } else {
                    this.recording = false;
                    document.getElementById("video").setAttribute("hidden", "");
                    document.getElementById("photo-img").removeAttribute("hidden");
                    const context = canvas.getContext("2d");
                    canvas.width = this.width;
                    canvas.height = this.height;
                    context.drawImage(video, 0, 0, this.width, this.height);
                    this.compressImage();
                }
            }
        );
    }
}
</script>

<template>
    <div class="main">
        <div class="buttons">
            <button v-on:click="recordVideo">Make a picture</button>
            <button v-on:click="removeImage">Remove image</button>
            <video id="video" hidden></video>
            <canvas id="photo-canvas" hidden></canvas>
            <img id="photo-img" src="" hidden alt="">
            <button v-on:click="getCoordinates">Get coordinates</button>
        </div>
        
        <form action="/" @submit.prevent="createEvent">
            <div id="mapContainer" class="mapContainer" hidden>

            </div>
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
            <input type="number" class="col-sm input-area" required v-model="maxUsers" placeholder="Max users">
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

    #video, #photo-img {
        max-height: 50vh;
        max-width: 90vw;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .buttons > * {
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

    #mapContainer {
        width: 100%;
        height: 300px;
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

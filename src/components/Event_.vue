<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" rel="stylesheet"/>
    <Header/>
    <div class="row main">
        <div class="col-lg-6 left">
            <div class="left-div">
                <img class="event-img" src="https://images.unsplash.com/photo-1666563824801-b4e532192a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80">
            </div>
        </div>
        <div class="col-lg-6 right">
            <div class="right-div">
                <h2 class="event-name">Title</h2>
                <p class="description">
                    This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.
                </p>
            </div>
            <div class="map" id="mapContainer">

            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header.vue";
    export default {
        data: () => ({

        }),
        mounted() {
            [
                "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
                "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js",
                "map.js"
            ].forEach(imp => {
                let scr = document.createElement('script');
                scr.setAttribute("src", imp);
                scr.setAttribute("type", "module");
                document.head.appendChild(scr);
            })
        },
        methods: {

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
        padding-left: 100px;
        padding-right: 100px;
    }
    .right {
        padding: 2vh;
    }
    .left {
        padding: 2vh;
    }
    .main {
        height: fit-content;
    }
    .right-div {
        width: 100%;
        height: 40%;
        background-color: #28285f;
        border-radius: 4vh;
        padding: 1vh;
        overflow: hidden;
    }
    .map {
        height: 60%;
        width: 100%;
        border-radius: 4vh;
        margin-top: 2vw;
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
    p {
        padding-left: 1vw;
        padding-right: 1vw;
        font-size: 18px;
    }
    .event-img {
        transition: all 0.6s ease-in-out;
        transform: rotate(0deg);
        object-fit: cover;
        border-radius: 4vh;
        height: auto;
        width: 100%;
    }
</style>

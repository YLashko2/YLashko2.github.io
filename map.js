import L from "leaflet";

const mapDiv = document.getElementById("mapContainer");
const map = L.map(mapDiv);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);
var target = L.latLng('47.50737', '19.04611');
map.setView(target, 14);
L.marker(target).addTo(map);

var map = L.map('map').setView ([-17.3,-66],5.6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.tileLayer.wms("http://localhost:8080/geoserver/GEOPOR_MINDEF/wms?",{
transparent: true ,    
Layers:'exp263inverproyectos',
    format: 'image/png',
    

}).addTo(map)


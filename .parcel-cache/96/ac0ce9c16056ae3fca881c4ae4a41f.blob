navigator.geolocation.getCurrentPosition(function(pos) {
    const {longitude} = pos.coords;
    const {latitude} = pos.coords;
    
    const coords = [latitude,longitude];

    const map = L.map('map').setView(coords, 5);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        minZoom: 12,
        maxZoom: 15,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coords).addTo(map)
    .bindPopup('Find us. Its EA Limited<br> Easily customizable.')
    .openPopup();
    },
     function() {
    alert('Hello we could not find your current location')
})

//
const btnOrder = document.querySelectorAll('.btn-white');
const mapty = document.querySelector('.customer-make-order');
const closeMap = document.querySelector('.closeMap');

btnOrder.forEach(btn => btn.addEventListener('click', function() {
    mapty.classList.remove('hidden');
}))

closeMap.addEventListener('click', function(e) {
    mapty.classList.add('hidden');
})
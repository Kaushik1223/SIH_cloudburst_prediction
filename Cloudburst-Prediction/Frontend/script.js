const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
       selectElement('header').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    // Set the center coordinates for India
    const indiaCenter = [20.5937, 78.9629]; // You can adjust these coordinates for a more specific location in India if needed.

    // Initialize the map
    const map = L.map('map').setView(indiaCenter, 4); // Adjust the zoom level (5 in this case) as needed.

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://maps.openweathermap.org/maps/2.0/radar/{z}/{x}/{y}?appid={API key}&tm={date}">OpenStreetMap</a> contributors'
    }).addTo(map);

    const indiaMarkerCoordinates = [21.5937, 78.9629]; 
    L.marker(indiaMarkerCoordinates).addTo(map)
        .bindPopup('India')
        .openPopup();

   document.getElementById('location-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const selectedStation = document.getElementById('station').value;

    });
});

  
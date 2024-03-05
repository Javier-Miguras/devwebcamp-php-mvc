if(document.querySelector('#mapa')){
    const lat = -33.43893453879587;
    const lng = -70.63983407604424;
    const zoom = 16;

    const map = L.map('mapa').setView([lat, lng], zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup(`
            <h2 class="mapa__heading">DevWebCamp</h2>
            <p class="mapa__texto">Centro Cultural Gabriela Mistral</p>
            <p class="mapa__texto">Santiago, Chile</p>
        `)
        .openPopup();
}
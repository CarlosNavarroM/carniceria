let map, marker;

function initMap() {
    const initialPosition = [-33.4489, -70.6693]; // Santiago, Chile

    map = L.map('map').setView(initialPosition, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    marker = L.marker(initialPosition, { draggable: true }).addTo(map);

    marker.on('dragend', function (event) {
        const position = marker.getLatLng();
        document.getElementById('location').value = `Lat: ${position.lat}, Lng: ${position.lng}`;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Cargar las regiones y comunas usando fetch
    function loadComunas() {
        fetch('https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/b8575eb82dce974fd2647f46819a7568278396bd/comunas-regiones.json')
            .then(response => response.json())
            .then(data => {
                const regionSelect = document.getElementById('region');
                const comunaSelect = document.getElementById('comuna');
                regionSelect.innerHTML = '';
                comunaSelect.innerHTML = '';

                data.regiones.forEach(region => {
                    let option = document.createElement('option');
                    option.value = option.textContent = region.region;
                    regionSelect.appendChild(option);
                });

                regionSelect.onchange = function() {
                    const selectedRegion = this.value;
                    const comunas = data.regiones.find(r => r.region === selectedRegion).comunas;
                    comunaSelect.innerHTML = '';
                    comunas.forEach(comuna => {
                        let option = document.createElement('option');
                        option.value = option.textContent = comuna;
                        comunaSelect.appendChild(option);
                    });
                };

                // Trigger change to load initial comunas
                regionSelect.dispatchEvent(new Event('change'));
            })
            .catch(error => {
                console.error('Error al cargar las comunas:', error);
            });
    }

    // Obtener la ubicación del usuario
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                document.getElementById('location').value = `Lat: ${userLocation.lat}, Lng: ${userLocation.lng}`;
                map.setView(userLocation, 12);
                marker.setLatLng(userLocation);

                // Seleccionar automáticamente la región y comuna basada en la ubicación
                fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${userLocation.lat}&lon=${userLocation.lng}`)
                    .then(response => response.json())
                    .then(data => {
                        const address = data.address;
                        const region = address.state;
                        const comuna = address.city || address.town || address.village;

                        const regionSelect = document.getElementById('region');
                        const comunaSelect = document.getElementById('comuna');

                        regionSelect.value = region;
                        regionSelect.dispatchEvent(new Event('change'));

                        setTimeout(() => {
                            comunaSelect.value = comuna;
                        }, 500); // Esperar un momento para que se carguen las comunas
                    })
                    .catch(error => {
                        console.error('Error al obtener la ubicación aproximada:', error);
                    });
            }, function(error) {
                console.error('Error al obtener la ubicación:', error);
            });
        } else {
            console.error('Geolocalización no es soportada por este navegador.');
        }
    }

    document.getElementById('getLocationBtn').addEventListener('click', getLocation);

    loadComunas();
    initMap();

    // Validaciones del formulario
    document.getElementById('paymentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const name = document.getElementById('name').value.trim();
        const address = document.getElementById('address').value.trim();
        const region = document.getElementById('region').value;
        const comuna = document.getElementById('comuna').value;
        const location = document.getElementById('location').value.trim();

        if (!name) {
            alert('Por favor, ingresa tu nombre completo.');
            return;
        }

        if (!address) {
            alert('Por favor, ingresa tu dirección.');
            return;
        }

        if (!region) {
            alert('Por favor, selecciona tu región.');
            return;
        }

        if (!comuna) {
            alert('Por favor, selecciona tu comuna.');
            return;
        }

        if (!location) {
            alert('Por favor, detecta tu ubicación.');
            return;
        }

        // Si todas las validaciones pasan, se puede enviar el formulario
        this.submit();
    });
});

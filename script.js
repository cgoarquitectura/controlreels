// Efecto de hover mejorado
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.02)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

// Abrir modal del mapa
document.getElementById('open-map').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('map-modal').style.display = 'flex';
});

// Cerrar modal al hacer clic en la X
document.getElementById('close-map').addEventListener('click', function() {
    document.getElementById('map-modal').style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
document.getElementById('map-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
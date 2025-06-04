document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const locationModal = document.getElementById('locationModal');
    const scheduleModal = document.getElementById('scheduleModal');
    const locationBtn = document.getElementById('locationBtn');
    const scheduleBtn = document.getElementById('scheduleBtn');
    const closeButtons = document.getElementsByClassName('close');
    const mapContainer = document.querySelector('.map-container');

    // Open location modal with lazy-loaded map
    locationBtn.onclick = function() {
        // Cargar el mapa solo si no está ya cargado
        if (!mapContainer.querySelector('iframe')) {
            const loadingText = document.createElement('p');
            loadingText.textContent = 'Cargando mapa...';
            loadingText.style.textAlign = 'center';
            loadingText.style.padding = '20px';
            mapContainer.appendChild(loadingText);

            const iframe = document.createElement('iframe');
            iframe.onload = function() {
                mapContainer.removeChild(loadingText);
            };
            
            iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d343.4535589347825!2d-66.82773604965772!3d10.475281952047878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59058081bb59%3A0xcb10c89c4297575a!2sControl%20Reels!5e0!3m2!1ses-419!2sus!4v1748830114288!5m2!1ses-419!2sus');
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '450');
            iframe.setAttribute('style', 'border:0;');
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('loading', 'lazy');
            iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
            
            mapContainer.appendChild(iframe);
        }
        
        locationModal.style.display = 'block';
    }

    // Open schedule modal
    scheduleBtn.onclick = function() {
        scheduleModal.style.display = 'block';
    }

    // Close modals when clicking on X
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            locationModal.style.display = 'none';
            scheduleModal.style.display = 'none';
        }
    }

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target == locationModal) {
            locationModal.style.display = 'none';
        }
        if (event.target == scheduleModal) {
            scheduleModal.style.display = 'none';
        }
    }

    // Add hover effects to all buttons
    const buttons = document.querySelectorAll('.link-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // =============================================
    // SECCIÓN DE CÓDIGO SECRETO MEJORADA
    // =============================================
    
    let keySequence = [];
    const secretElement = document.getElementById('oculto');
    const resetDelay = 2000; // 2 segundos para reiniciar después de acertar

    document.addEventListener('keydown', function(e) {
        const key = e.key.toLowerCase();
        
        // Solo nos interesan las teclas c y s
        if (key === 'c' || key === 's') {
            keySequence.push(key);
            
            // Mantener solo los últimos 3 elementos
            if (keySequence.length > 3) {
                keySequence.shift();
            }
            
            // Verificar la secuencia c, c, s
            if (keySequence.length === 3 && 
                keySequence[0] === 'c' && 
                keySequence[1] === 'c' && 
                keySequence[2] === 's') {
                if (secretElement) {
                    secretElement.classList.toggle('hidden-element');
                    
                    // Reiniciar la secuencia después de un tiempo
                    setTimeout(() => {
                        keySequence = [];
                        console.log('Secuencia reiniciada automáticamente');
                    }, resetDelay);
                }
            }
        } else {
            // Si se presiona otra tecla, reiniciar la secuencia inmediatamente
            keySequence = [];
        }
    });

    // Reiniciar la secuencia si pasa mucho tiempo entre teclas
    let sequenceTimeout;
    document.addEventListener('keyup', function() {
        clearTimeout(sequenceTimeout);
        sequenceTimeout = setTimeout(() => {
            keySequence = [];
            console.log('Secuencia reiniciada por inactividad');
        }, 1000); // 1 segundo de inactividad reinicia
    });
});

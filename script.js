document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const locationModal = document.getElementById('locationModal');
    const scheduleModal = document.getElementById('scheduleModal');
    const locationBtn = document.getElementById('locationBtn');
    const scheduleBtn = document.getElementById('scheduleBtn');
    const closeButtons = document.getElementsByClassName('close');

    // Open location modal
    locationBtn.onclick = function() {
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
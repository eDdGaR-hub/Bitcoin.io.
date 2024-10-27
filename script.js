document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por contactarnos! Responderemos pronto.');
    this.reset(); // Resetea el formulario
});

// Inicialización de gráficos
const ctxPrice = document.getElementById('priceChart').getContext('2d');
const ctxVolume = document.getElementById('volumeChart').getContext('2d');

const priceChart = new Chart(ctxPrice, {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [{
            label: 'Precio de Bitcoin',
            data: [30000, 32000, 28000, 35000, 37000, 40000, 38000, 39000, 45000, 46000, 47000, 50000],
            borderColor: 'rgba(255, 193, 7, 1)',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

const volumeChart = new Chart(ctxVolume, {
    type: 'bar',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [{
            label: 'Volumen de Transacciones',
            data: [1000, 1200, 900, 1500, 1700, 1800, 1600, 2000, 2100, 2500, 3000, 3500],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

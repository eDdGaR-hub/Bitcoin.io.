document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por contactarnos! Responderemos pronto.');
    this.reset(); // Resetea el formulario
});

const ctxRealTime = document.getElementById('realTimeChart').getContext('2d');

let realTimeChart = new Chart(ctxRealTime, {
    type: 'line',
    data: {
        labels: [], // Etiquetas de tiempo
        datasets: [{
            label: 'Precio de Bitcoin',
            data: [], // Datos de precios
            borderColor: 'rgba(128, 0, 128, 1)', // Color morado
            backgroundColor: 'rgba(128, 0, 128, 0.2)', // Color de fondo
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Precio en USD'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tiempo'
                }
            }
        }
    }
});

// Función para obtener datos en tiempo real
async function fetchBitcoinData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const price = data.bitcoin.usd;

        // Agregar datos al gráfico
        const now = new Date().toLocaleTimeString();
        realTimeChart.data.labels.push(now);
        realTimeChart.data.datasets[0].data.push(price);

        // Limitar la cantidad de datos en el gráfico
        if (realTimeChart.data.labels.length > 20) {
            realTimeChart.data.labels.shift();
            realTimeChart.data.datasets[0].data.shift();
        }

        realTimeChart.update();
    } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
    }
}

// Actualizar datos cada 60 segundos
setInterval(fetchBitcoinData, 60000);
fetchBitcoinData(); // Llamar la función inmediatamente para iniciar

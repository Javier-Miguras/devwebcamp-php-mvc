(function() {
    
  const ctx = document.getElementById('regalos-grafica');

  if(ctx){

    async function obtenerDatos(){
        const url = '/api/regalos';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: resultado.map(regalo => regalo.nombre),
                datasets: [
                  {
                    label: 'Dataset 1',
                    data: resultado.map(regalo => regalo.total),
                    backgroundColor: [
                        '#ea580c',
                        '#84cc16',
                        '#22d3ee',
                        '#a855f7',
                        '#ef4444',
                        '#14b8a6',
                        '#db2777',
                        '#e11d48',
                        '#7e22ce'
                    ]
                  },
                ]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              },
              plugins: {
                legend:{
                    display: false
                }
              }
            }
          });
    }
    obtenerDatos();

    
  }

  

})();
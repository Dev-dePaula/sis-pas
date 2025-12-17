// Preenche a data atual automaticamente
document.getElementById('dataAtual').innerText = new Date().toLocaleDateString('pt-BR');

// Configuração do contexto do gráfico
const ctx = document.getElementById('rodaVidaChart').getContext('2d');

// Dados iniciais
let dataValues = [5, 5, 5, 5, 5, 5];
const labels = ['Espiritualidade', 'Saúde Física', 'Família', 'Trabalho/Estudo', 'Emoções', 'Lazer'];

// Criação do Gráfico (Chart.js)
const myChart = new Chart(ctx, {
    type: 'polarArea', 
    data: {
        labels: labels,
        datasets: [{
            label: 'Nível de Satisfação',
            data: dataValues,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)', // Espiritualidade
                'rgba(54, 162, 235, 0.6)', // Saúde
                'rgba(255, 206, 86, 0.6)', // Família
                'rgba(75, 192, 192, 0.6)', // Trabalho
                'rgba(153, 102, 255, 0.6)', // Emoções
                'rgba(255, 159, 64, 0.6)'  // Lazer
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 2,
                    backdropColor: 'transparent'
                },
                grid: {
                    color: '#ccc'
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});

// Função chamada quando o usuário move a barra deslizante
function updateChart(index, value) {
    // Atualiza o texto do número ao lado da barra
    document.getElementById('val' + index).innerText = value;
    
    // Atualiza o dado no gráfico
    myChart.data.datasets[0].data[index] = value;
    
    // Redesenha o gráfico
    myChart.update();
}
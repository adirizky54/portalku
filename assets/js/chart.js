var chart5 = new Chart(document.getElementById('statistics-chart-5').getContext("2d"), {
  type: 'doughnut',
  data: {
    labels: [ '1', '2'],
    datasets: [{            
      data: [95,5],
      backgroundColor: ['#CD7F32', '#D7DADF'],
      hoverBackgroundColor: ['#CD7F32', '#D7DADF'],
      borderWidth: 0,
    }]
  },
  options: {
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    },
    cutoutPercentage: 94,
    responsive: true,
    maintainAspectRatio: false
  }
});

function resizeCharts() {
  chart5.resize();
}
// Initial resize
resizeCharts();
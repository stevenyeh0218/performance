/* for 月份業績 */
const labels = [
    '忠孝新生',
    '民生',
    '天母',
    '內湖',
  ];

  const data = {
    labels: labels,
    datasets: [
        {
            label: '實收金額',
            backgroundColor: 'rgb(225, 99, 99)',
            borderColor: 'rgb(225, 99, 99)',
            data: [2000000, 1000000, 1000000, 500000],
        },
        {
          label: '訂單金額',
          backgroundColor: 'rgb(114, 112, 109)',
          borderColor: 'rgb(114, 112, 109)',
          data: [4000000, 2000000, 5000000, 900000],
        },
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      plugins:{
        datalabels:{
          color: '#000000',
          anchor: 'end',
          align: 'end',
          offset: -5
        },
        tooltip: {
          enabled: false
        },
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          grid:{
            display: false,
            drawBorder: false,
          }, 
          beginAtzeor:true,
          grace: '10'
        }
      }
    },
    plugins: [ChartDataLabels]
  };

  const monthChart = new Chart(
    document.getElementById('month-chart'),config
  );
  /* for 月份業績 end */

// const head3 = document.getElementById("h3");
// const div1 = document.getElementById("p2").style.color = "red";

const port = document.getElementById("Port");
port.innerText = "";
const test = document.getElementById("pp2");
test.innerText = "";


const user = JSON.parse(localStorage.getItem("user"));

if (user) {
    port.textContent = user.fName;

    test.textContent += user.lName;
}

// const user = JSON.parse(localStorage.getItem("user"));

// if (user) {
//   document.getElementById("port").textContent = `"Name:" + user.fName`;
  
//   document.getElementById("p2").textContent = `"Yad:" + user.lName`;
// }


let sidebarOpen = false;
const aside = document.getElementById("aside");
function opensidebar() {
    if (!sidebarOpen) {
        aside.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}
function closesidebar(){
    if (sidebarOpen) {
        aside.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    };
};

var options = {
  series: [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00.000Z',
      '2018-09-19T01:30:00.000Z',
      '2018-09-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-09-19T04:30:00.000Z',
      '2018-09-19T05:30:00.000Z',
      '2018-09-19T06:30:00.000Z',
    ],
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
}

var chart = new ApexCharts(document.querySelector('#Rchart'), options);
chart.render();


var options = {
  series: [
    {
      name: 'Actual',
      data: [
        {
          x: '2019',
          y: 1292,
          goals: [
            {
              name: 'Expected',
              value: 1400,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: '2020',
          y: 4432,
          goals: [
            {
              name: 'Expected',
              value: 5400,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: '2021',
          y: 5423,
          goals: [
            {
              name: 'Expected',
              value: 5200,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: '2022',
          y: 6653,
          goals: [
            {
              name: 'Expected',
              value: 6500,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: '2023',
          y: 8133,
          goals: [
            {
              name: 'Expected',
              value: 6600,
              strokeHeight: 13,
              strokeWidth: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: '2024',
          y: 7132,
          goals: [
            {
              name: 'Expected',
              value: 7500,
              strokeHeight: 5,
              strokeColor: '#fbe309',
            },
          ],
        },
        {
          x: '2025',
          y: 7332,
          goals: [
            {
              name: 'Expected',
              value: 8700,
              strokeHeight: 5,
              strokeColor: '#775DD0',
            },
          ],
        },
        {
          x: '2026',
          y: 6553,
          goals: [
            {
              name: 'Expected',
              value: 7300,
              strokeHeight: 2,
              strokeDashArray: 2,
              strokeColor: '#d05d69',
            },
          ],
        },
      ],
    },
  ],
  chart: {
    height: 300,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      columnWidth: '100%',
    },
  },
  colors: ['#00e31e'],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['#e30022', '#775DD0'],
    },
  },
}

var chart = new ApexCharts(document.querySelector('#Tchart'), options)
chart.render()

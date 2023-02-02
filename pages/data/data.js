const deputadosGastos = window.gastos;
console.log(deputadosGastos);

let xValues = deputadosGastos.map(function(value) {
  return value.data;
});
let yValues = deputadosGastos.map(function(value) {
  return value.valor;
});

const data = [{
    x: xValues,
    y: yValues,
    mode:"lines"
}];

  
  // Define Layout
const layout = {
    margin: {
      l: 50,
      r: 25,
      b: 75,
      t: 50,
    },
};
  
const config = {responsive: true}

  // Display using Plotly
Plotly.newPlot("myChart", data, layout, config);




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

function alerta() {
  swal({
      title: "Aviso importante!",
      text: "A minha base de dados está passando por um processo de auditoria de todos os valores gastos pelos deputados aqui apresentados, ou seja, a base de dados pode vir a mudar no curto prazo.",
      icon: "warning",
      dangerMode: true,
    })
}

alerta();


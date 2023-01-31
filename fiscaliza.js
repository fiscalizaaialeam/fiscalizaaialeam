const deputadosData = window.deputados;
const deputadosGastos = window.gastos;
console.log(deputadosData);
console.log(deputadosGastos);

function main(){
let content_div = document.querySelector("#box-cards");
for (let a = 0; a < deputadosData.length; a++ ) {
    console.log(deputadosData[a].nome);
    let name = document.createElement("h6");
    name.innerHTML = deputadosData[a].nome;
    img = document.createElement("img");
    img.src = deputadosData[a].urlfoto;
    let card = document.createElement("div");
    card.className = "card"
    card.setAttribute("id",deputadosData[a].id);
    card.appendChild(img);
    card.appendChild(name);
    content_div.insertAdjacentElement("afterbegin",card);
}

let cards = document.querySelectorAll(".card");
for (let b =0; b < cards.length; b++){
    let element = cards[b];
    element.addEventListener("click", () => {
        let elementId = element.id;
        console.log(elementId);
        infoDep(elementId);
        })
    }
}



function infoDep(id_dep){
    console.log(deputadosData);
    console.log(id_dep);
    /* Pegando informações específicas de um único deputado */
    let info = deputadosData.find(item => item.id == id_dep);
    console.log(info.nome);
    let nameDep = info.nome;
    let foto = info.urlfoto;
    let partido = info.partido;
    let email = info.Email;
    let contato = info.telefone;
    let total_gasto = info.despesaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    /* Pegando informações específicas de um único deputado */


    /* pegando informações de gastos de um deputado, filtrando uma planilha completa */
    let infoGastos = deputadosGastos.filter(deputado => deputado.codigo == id_dep);
    console.log(infoGastos);

    let chart = document.createElement("div");
    chart.className = "myChart"


    let xValues = infoGastos.map(function(value) {
        return value.data;
      });

    console.log(xValues);

    let lista = []

    for (let l = 0; l < xValues.length; l++){

        let valor_string = `"${xValues[l]}"`

        lista.push(valor_string);
    }

    console.log(lista)

    let yValues = infoGastos.map(function(value) {
        return value.valor;
      });


      
      
      

    /* Código da tabela

    let datas = infoGastos.map(function (type) {
        return type.data;
    });
    console.log(datas); // ['John', 'Wayne', 'David']
    let uniques = [...new Set(datas)];
    console.log(uniques);

    let total = 0;

    total = infoGastos.reduce((accumulator, object) => {
        return accumulator + object.valor;
      }, 0);

    let table = `<table><thead><tr><th>DESPESA</th><th>VALOR</th><th>REPRESENTAÇÃO PERCENTUAL (%)</th></tr></thead><tbody>`;
    for (let c = 0; c < uniques.length; c++){
        let porcentagem = 0;
        console.log(uniques[c]);
        let gastosByType = infoGastos.filter(gasto => gasto.despesa == uniques[c]);
        console.log(gastosByType);
        let sum = gastosByType.reduce((accumulator, object) => {
            return accumulator + object.valor;
          }, 0);
        
        porcentagem = ((sum/total) * 100)

        table += `<tr><td>${uniques[c]}</td><td>${sum.toFixed(2)}</td><td>${porcentagem.toFixed(2)}%</td></tr>`
    }

    table += `</tbody></table>`;

    */

    let newPage = window.open("");
    newPage.document.write(
    `<html>
    <head>
    <link rel="stylesheet" href="page_gastos.css">
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <title>${nameDep}</title>
    </head>
    <body>
    <div id="perfil_dep">
    <img id="perfil_image" src=${foto}>
        <div id="perfil_info">
            <h1>${nameDep}</h1>
            <h3>${partido}</h3>
            <h3>${email}</h3>
            <h3>${contato}</h3>
        </div>
    </div>
    <div>
    <h2>Total Gasto: ${total_gasto}</h2>
    <h2>Detalhamento dos valores gastos</h2>
    <div id="myChart" style="width:100%;max-width:875px"></div>
    </div>
    <script>
    const data = [{
        x: [${lista}],
        y: [${yValues}],
        type:"line"
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
    </script>
    </body>
    </html>`
    );

        

}

main();
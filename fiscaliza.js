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
        //infoDep(elementId);
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

}

main();
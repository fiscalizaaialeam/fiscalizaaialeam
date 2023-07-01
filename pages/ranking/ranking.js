const rankingData = window.deputados;

const rankingDataOrdered = rankingData.sort((a, b) => {
	if(a.despesaTotal > b.despesaTotal){
	   return -1;
	} else if(a.despesaTotal < b.despesaTotal){
		return 1;
	}
	return 0;
})


let box = document.querySelector("#box-cards");

let num_ranking = 25;

for (let a = 23; a >= 0; a--) {
    // imagem 
    num_ranking -= 1;
    img = document.createElement("img");
    img.src = `../../images/deputados/${rankingDataOrdered[a].foto}.png`;
    // nome do deputado
    let name = document.createElement("h2");
    name.innerHTML = `${num_ranking}° - ${rankingDataOrdered[a].nome}`;
    // partido 
    let partido = document.createElement("h3");
    partido.innerHTML = rankingDataOrdered[a].partido;
    // valor gasto
    let valor = document.createElement("h1");
    let moeda = rankingDataOrdered[a].despesaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    valor.innerHTML = moeda;
    // div texto 
    let divTexto = document.createElement("div");
    divTexto.setAttribute("id","divTexto");
    divTexto.appendChild(name);
    divTexto.appendChild(partido);
    divTexto.appendChild(valor);
    // div card
    let divCard = document.createElement("div");
    divCard.setAttribute("Class","divCard");
    divCard.setAttribute("id",rankingDataOrdered[a].id);
    divCard.appendChild(img);
    divCard.appendChild(divTexto);
    box.insertAdjacentElement("afterbegin",divCard);

}

//criação de lista das divs dos deputados
const cards = document.querySelectorAll(".divCard");

console.log(cards);

//adição de event listenner nos cards dos deputados

for (let c = 0; c < cards.length; c++) {
    let element = cards[c];
    element.addEventListener("click", () => {
        let elementId = element.id;
        console.log(elementId);
        getInfo(elementId);
    });
}

//pegando as informações de apenas um deputado clicado
function getInfo(idValue) {
    let infoIdDep = rankingData.find( elemento => elemento.id == idValue);
    console.log(infoIdDep);

    let ficha_nome = document.querySelector("#nome_ficha");
    ficha_nome.innerHTML = `Ficha de Gastos do Deputado ${infoIdDep.nome}`;

    let total_disponivel = document.querySelector("#valor_num_dis");
    total_disponivel.innerHTML = `${infoIdDep.valorDisponivel.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;

    let total_gasto = document.querySelector("#valor_num_tot");
    total_gasto.innerHTML = `${infoIdDep.despesaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;

    let total_poupado = document.querySelector("#valor_num_poup");
    total_poupado.innerHTML = `${infoIdDep.valorPoupado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;

    show();
}

function show(){
    const botao = document.querySelector("#box_gastos");
    botao.classList.toggle('active');
    let el = document.getElementById('box_gastos');
    // utiliza método
    let elCoordenadas = el.getBoundingClientRect();
    // verificar as propriedades com as coord
    console.log(elCoordenadas);
    console.log(elCoordenadas.width);

}




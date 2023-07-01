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
    divCard.setAttribute("id","divCard");
    divCard.appendChild(img);
    divCard.appendChild(divTexto);
    box.insertAdjacentElement("afterbegin",divCard);
}

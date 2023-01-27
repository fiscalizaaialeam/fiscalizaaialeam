const rankingData = window.deputados;
console.log(rankingData);

const rankingDataOrdered = rankingData.sort((a, b) => {
	if(a.DespesasTotal > b.DespesasTotal){
	   return -1;
	} else if(a.DespesasTotal < b.DespesasTotal){
		return 1;
	}
	return 0;
})

console.log(rankingDataOrdered);

let box = document.querySelector("#box-cards");

for (let a = 7; a >= 0; a--) {
    // imagem 
    img = document.createElement("img");
    img.src = rankingDataOrdered[a].urlFoto;
    console.log(img);
    // nome do deputado
    let name = document.createElement("h2");
    name.innerHTML = rankingDataOrdered[a].nome;
    console.log(name);
    // partido 
    let partido = document.createElement("h3");
    partido.innerHTML = rankingDataOrdered[a].siglaPartido;
    console.log(partido);
    // valor gasto
    let valor = document.createElement("h1");
    valor.innerHTML = rankingDataOrdered[a].DespesasTotal;
    console.log(valor);
    // div texto 
    let divTexto = document.createElement("div");
    divTexto.setAttribute("id","divTexto");
    divTexto.appendChild(name);
    divTexto.appendChild(partido);
    divTexto.appendChild(valor);
    console.log(divTexto);
    // div card
    let divCard = document.createElement("div");
    divCard.setAttribute("id","divCard");
    divCard.appendChild(img);
    divCard.appendChild(divTexto);
    console.log(divCard);
    // div linha
    let divLinha = document.createElement("div");
    divLinha.setAttribute("id","divLinha");
    // adicionando à caixa de contúdo do html 
    if (a != 7) {
        box.insertAdjacentElement("afterbegin",divLinha);
    }
    box.insertAdjacentElement("afterbegin",divCard);
}

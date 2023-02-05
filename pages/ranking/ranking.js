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
    img.src = rankingDataOrdered[a].urlfoto;
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
    // div linha
    let divLinha = document.createElement("div");
    divLinha.setAttribute("id","divLinha");
    // adicionando à caixa de contúdo do html 
    if (a != 23) {
        box.insertAdjacentElement("afterbegin",divLinha);
    }
    box.insertAdjacentElement("afterbegin",divCard);
}

const aviso = "<h3>Aviso importante</h3>"

function alerta() {
    swal({
        title: "Aviso importante!",
        text: "A Página de Ranking está passando por um processo de auditoria de dados de todos os deputados, então o ranking pode mudar até o término do processo de auditoria. Até o presente momento, os deputados auditados foram: ADJUTO AFONSO; ABDALA FRAXE; BELARMINO LINS",
        icon: "warning",
        dangerMode: true,
      })
}

alerta();

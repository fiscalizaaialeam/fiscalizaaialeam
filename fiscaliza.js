const deputadosData = window.deputados;

function main(){
let content_div = document.querySelector("#box-cards");
for (let a = 0; a < deputadosData.length; a++ ) {
    console.log(deputadosData[a].nome);

    //nome do deputado
    let name = document.createElement("h6");
    name.innerHTML = deputadosData[a].nome;

    //foto do deputado
    img = document.createElement("img");
    img.src = `./images/deputados/${deputadosData[a].foto}-min.png`;

    //card do deputado (div)
    let card = document.createElement("div");
    card.className = "card"

    //definição de atributos no card deputado
    card.setAttribute("id",deputadosData[a].id);
    card.appendChild(img);
    card.appendChild(name);

    //adição dos cards na página
    content_div.insertAdjacentElement("afterbegin",card);
    }

    //criação de lista das divs dos deputados
    const cards = document.querySelectorAll(".card");

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

}

    //pegando as informações de apenas um deputado clicado
    function getInfo(idValue) {
        let infoIdDep = deputadosData.find( elemento => elemento.id == idValue);
        console.log(infoIdDep);

        let imagem_dep = document.querySelector("#imagem_dep");
        imagem_dep.src = `./images/deputados/${infoIdDep.foto}-min.png`;

        let name_dep_card = document.querySelector("#name_dep_card");
        name_dep_card.innerHTML = infoIdDep.nome;

        let name_partido = document.querySelector("#name_partido");
        name_partido.innerHTML = `Partido: ${infoIdDep.partido}`;

        let name_civil = document.querySelector("#name_civil");
        name_civil.innerHTML = `Nome Civil: ${infoIdDep.nomeCivil}`;

        let email = document.querySelector("#email");
        email.innerHTML = `E-mail: ${infoIdDep.Email}`;

        let tel = document.querySelector("#tel");
        tel.innerHTML = `Telefone: ${infoIdDep.telefone}`;

        show();
    }

    function show(){
        const botao = document.querySelector("#popup-1");
        botao.classList.toggle('active');
    }



main();
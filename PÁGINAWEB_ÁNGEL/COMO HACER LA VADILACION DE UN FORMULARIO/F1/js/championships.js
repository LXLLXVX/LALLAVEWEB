let championships = [
{
    name: "Brazil Grand Prix",
    location: "Sao Paulo",
},{
    name: "Mexico Grand Prix",
    location: "Mexico D.F"
},{
    name: "Spain Grand Prix",
    location: "Montmello"
},
];

function showChampionshipList(){
    const CHAMPIONSHIP_LIST = document.getElementById("championship-list");

    let championshipsToShow = "";
    for(let i = 0; i < championships.length; i++){
        championshipsToShow += `
        <div>
        <h2>${championships[i].name}</h2>
        <p>${championships[i].location}</p>
        </div>
        `;
    }
    CHAMPIONSHIP_LIST.innerHTML=championshipsToShow;
}

function listenForSubmit(){
    const CHAMPIONSHIP_REGISTER_FORM = document.getElementById("championship-register-form")
    CHAMPIONSHIP_REGISTER_FORM.addEventListener("submit", introduceNewChampionshipAndShowAllChampionships);
}

function introduceNewChampionship(e){
    e.preventDefault();
    const NAME = e.target.name.value
    const LOCATION = e.target.location.value

    championships.push({
        name: NAME,
        location: LOCATION
    });
}

function introduceNewChampionshipAndShowAllChampionships(e){
    introduceNewChampionship(e);
    showChampionshipList();
}

showChampionshipList();
listenForSubmit();
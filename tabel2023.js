
function createTable(){
    const plTeams = [
        "Manchester City",
        "Arsenal",
        "Newcastle United",
        "Manchester United",
        "Liverpool",
        "Brighton & Hove Albion",
        "Tottenham Hotspur",
        "Aston Villa",
        "Brentford",
        "Fulham",
        "Chelsea",
        "Crystal Palace",
        "Wolverhampton Wanderers",
        "Boumemouth",
        "West Ham United",
        "Nottm Forest",
        "Everton",
        "Leeds United",
        "Leicester City",
        "Southampton",
    ];
    const container = document.getElementById("container");
    const table = document.createElement("table");

    for (let x=0; x<20; x++)
    {
       const  line = document.createElement("line");
        line.innerHTML = x+1 + '. ' + plTeams[x];
        table.appendChild(line);
    }
    container.appendChild(table);
}

window.onload = function (){
    createTable();
}
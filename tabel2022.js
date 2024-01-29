
function createTable(){
    const plTeams = [
        "Manchester City",
        "Liverpool",
        "Chelsea",
        "Tottenham Hotspur",
        "Arsenal",
        "Manchester United",
        "West Ham United",
        "Leicester City",
        "Brighton & Hove Albion",
        "Wolverhampton Wanderers",
        "Newcastle United",
        "Crystal Palace",
        "Brentford",
        "Aston Villa",
        "Southampton",
        "Everton",
        "Leeds United",
        "Burnley",
        "Wattford",
        "Norwich City",
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
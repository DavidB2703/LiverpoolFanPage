
function createTable(){
    const plTeams = [
        "Liverpool",
        "Manchester City",
        "Manchester United",
        "Chelsea",
        "Leicester City",
        "Tottenham Hotspur",
        "Wolverhampton Wanderers",
        "Arsenal",
        "Sheffild United",
        "Burnley",
        "Southampton",
        "Everton",
        "Newcastle United",
        "Crystal Palace",
        "Brighton & Hove Albion",
        "West Ham United",
        "Aston Villa",
        "Burnemouth",
        "Watford",
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
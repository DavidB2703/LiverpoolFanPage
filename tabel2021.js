
function createTable(){
    const plTeams = [
        "Manchester City",
        "Manchester United",
        "Liverpool",
        "Chelsea",
        "Leicester City",
        "West Ham United",
        "Tottenham Hotspur",
        "Arsenal",
        "Leeds United",
        "Everton",
        "Aston Villa",
        "Newcastle United",
        "Wolverhampton Wanderers",
        "Crystal Palace",
        "Southampton",
        "Brighton & Hove Albion",
        "Burnley",
        "Fulham",
        "West Brom",
        "Sheffild United",
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
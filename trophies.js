
function createFlex()
{

    const flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.justifyItems = 'center';
    flex.style.row= '100px';
    flex.style.justifyContent= 'space-between';
    document.body.appendChild(flex);
}


function getTrophies() {
    let i = 0;
    var urlTrophies=[ "LeagueTitle.png","UEFA-CL-100.jpg","FACup.jpg","UC.png", "Carabao.png", "51gokh.png"];
    const trophies = ["18x League Title", "6x Champions League Winner",  "8X FA CUP Winner", "3X UEFA CUP WINNER", "8x League Cup", "3 UEFA SuperCup Winner"];
    window.addEventListener("click", function() {

            if(i<trophies.length)
            {
                const Trofeu = document.createElement('div');

                Trofeu.style.display = 'block';
                Trofeu.style.width= '100%';
                Trofeu.style.height= '100px';
                Trofeu.style.background = 'none';
                Trofeu.style.textAlign = 'center';
                Trofeu.style.flexGrow = 3;
                Trofeu.style.color = 'white';
                Trofeu.innerHTML = trophies[i];
                Trofeu.style.textShadow = '8px 8px 16px #000000';
                Trofeu.style.fontSize = '50px';
                transparent_background(urlTrophies[i]);
                document.body.appendChild(Trofeu);
            }
            i++;
    });

}

function transparent_background(src) {
    // Creează un element canvas
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

// Încarcă imaginea
    var imagine = new Image();
    imagine.src = src;

// Asigură-te că imaginea este complet încărcată înainte de a o desena pe canvas
    imagine.onload = function() {
        // Setează dimensiunile canvasului pentru a se potrivi cu dimensiunile imaginii
        canvas.width = imagine.width;
        canvas.height = imagine.height;

        // Desenează imaginea pe canvas
        context.drawImage(imagine, 0, 0);

        // Obține datele pixelilor din canvas
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        var pixeli = imageData.data;

        // Parcurge fiecare pixel și setează transparența fundalului
        for (var i = 0; i < pixeli.length; i += 4) {
            // Verifică culoarea pixelului (în exemplul de mai jos, fundalul alb este considerat fundal)
            if (
                pixeli[i] === pixeli[i + 1] &&  // Componenta roșie și verde sunt egale
                pixeli[i] === pixeli[i + 2] &&  // Componenta roșie și albastră sunt egale
                (pixeli[i] === 255 || pixeli[i] === 230  || pixeli[i]===238)  // Componenta roșie este 255 sau 128 (alb sau gri)
            ) {
                // Setează transparența pixelului la 0 (complet transparent)
                pixeli[i + 3] = 0;
            }
        }

        // Repune datele pixelilor actualizate pe canvas
        context.putImageData(imageData, 0, 0);

        // Adaugă canvasul la document
        canvas.style.position = 'fixed';
        canvas.style.width = '35%';
        canvas.style.top = '13%';

        document.body.appendChild(canvas);
    };



    // Creează un element canvas
    var canvas2 = document.createElement('canvas');
    var context2 = canvas2.getContext('2d');

// Încarcă imaginea
    var imagine2 = new Image();
    imagine2.src = src;

// Asigură-te că imaginea este complet încărcată înainte de a o desena pe canvas
    imagine2.onload = function() {
        // Setează dimensiunile canvasului pentru a se potrivi cu dimensiunile imaginii
        canvas2.width = imagine2.width;
        canvas2.height = imagine2.height;

        // Desenează imaginea pe canvas
        context2.drawImage(imagine2, 0, 0);

        // Obține datele pixelilor din canvas
        var imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
        var pixeli2 = imageData2.data;

        // Parcurge fiecare pixel și setează transparența fundalului
        for (var i = 0; i < pixeli2.length; i += 4) {
            // Verifică culoarea pixelului (în exemplul de mai jos, fundalul alb este considerat fundal)
            if (
                pixeli2[i] === pixeli2[i + 1] &&  // Componenta roșie și verde sunt egale
                pixeli2[i] === pixeli2[i + 2] &&  // Componenta roșie și albastră sunt egale
                (pixeli2[i] === 255 || pixeli2[i] === 230 || pixeli2[i]===238 )  // Componenta roșie este 255 sau 128 (alb sau gri)
            ) {
                // Setează transparența pixelului la 0 (complet transparent)
                pixeli2[i + 3] = 0;
            }
        }

        // Repune datele pixelilor actualizate pe canvas
        context2.putImageData(imageData2, 0, 0);

        // Adaugă canvasul la document
        canvas2.style.position = 'absolute';
        canvas2.style.width = '35%';
        canvas2.style.marginLeft = '65%';
        canvas2.style.top = '13%';

        document.body.appendChild(canvas2);

    };

    document.body.addEventListener("click", function() {
        document.body.removeChild(canvas);
        document.body.removeChild(canvas2);

    });


}




window.onload = function() {
    document.body.style.backgroundImage = 'url("audience-1866738.jpg")';
    document.body.style.backgroundSize = 'cover';
    transparent_background();
    createFlex();
    getTrophies();
}
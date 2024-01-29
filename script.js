function blackBackround(){
    //get reference to the LFC image
    let img = document.getElementById("imagine");
    let container = document.getElementsByClassName("container-area");
    const originalStyles = {};
    let  news_area = document.getElementsByClassName("news_area");
    let animantion_text = document.getElementsByClassName("animation-text");
    let imagini = document.getElementsByTagName("img");
    img.addEventListener("mouseover", function ()
        {
            originalStyles.background = document.body.style.background;
            originalStyles.innerHTML = container.item(0).innerHTML;
            originalStyles.style = news_area.item(0).innerHTML;
            originalStyles.body = animantion_text.item(0).innerHTML;
            originalStyles.d = imagini.item(2).innerHTML = "";


            imagini.item(1).style.display= 'none';
            imagini.item(2).style.display= 'none';
            imagini.item(3).style.display= 'none';


            document.body.style.background = "black";
            container.item(0).innerHTML="";
            news_area.item(0).innerHTML=""
            animantion_text.item(0).innerHTML="";
            imagini.innerHTML = "";
        });
    img.addEventListener("mouseout", function ()
        {
            document.body.style.background = originalStyles.background;
            container.item(0).innerHTML = originalStyles.innerHTML;
            news_area.item(0).innerHTML = originalStyles.style;
            animantion_text.item(0).innerHTML = originalStyles.body;
            imagini.innerHTML=originalStyles.d;
            setTimeout(sponsor_reappear, 10000);
            hover_dropdown_content();

        });
}
function hover_dropdown_content(){

    const dropdown_content = document.getElementsByClassName("dropdown-content");

    for (let j=0; j<dropdown_content.length; j++)
    {
        let content = dropdown_content.item(j);
        let real_content = content.children;
        x = real_content.item(0).style.background;
        for (let i=0; i<real_content.length; i++)
        {
            real_content.item(i).addEventListener("mouseover", function(){
                real_content.item(i).style.backgroundColor = "grey";
            })
            real_content.item(i).addEventListener("mouseout", function (){
                real_content.item(i).style.background = x;
            })
        }
    }
}

function sponsor_reappear(){
    let imagini = document.getElementsByTagName("img");

    imagini.item(1).style.display= 'block';
    imagini.item(2).style.display= 'block';
    imagini.item(3).style.display= 'block';

}
function shuffleImages() {
    const images = Array.from(document.querySelectorAll('img:not(#imagine)')); // Select all <img> elements except the first one
    const sources = images.map(img => img.src); // Get the current sources as an array
    const shuffledSources = shuffleArray(sources); // Shuffle the array of sources

    images.forEach((img, index) => {
        img.src = shuffledSources[index]; // Assign the shuffled source to each image
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements using destructuring assignment
    }
    return array;
}



function hover_over_container_text() {
    // Get the container area element
// Get the container area element
    const containerArea = document.querySelector('.container-area');

// Add event listener to the container area
    containerArea.addEventListener('click', function(event) {
        event.stopPropagation();
        // Check if the clicked element has the class "container"
        if (event.target.classList.contains('container')) {
            // Toggle the "active" class on the clicked container
            event.target.classList.toggle('active');

            // Get the current click count from local storage
            let clickCount = localStorage.getItem('clickCount');

            // Increment the click count or set it to 0 if it doesn't exist
            clickCount = clickCount ? parseInt(clickCount) + 1 : 0;

            // Update the click count in local storage
            localStorage.setItem('clickCount', clickCount);


             if (localStorage.getItem('clickCount') % 2 === 1) {
                 event.target.style.backgroundColor = "Black";
             }
             else {
                 event.target.style.backgroundColor = "white";
                    }
        }

    });
}
window.onload = function (){
    blackBackround();
    hover_dropdown_content();
    shuffleImages();
    hover_over_container_text();
}
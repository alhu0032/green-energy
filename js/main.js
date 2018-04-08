/*<!--
HTML:
Your buttons should have data-content attribute. The value of this attribute 
should be the same as name of the corresponding sub-object in your resources. 
Example:
<button data-content="chrome">Google Chrome</button>
-->*/

// JavaScript:
let button = document.querySelectorAll(".button");
let para = [
    
    "<figure><img src=\"./img/wind.jpg\" alt=\"wind power\"><p>Wind power is the use of air flow through wind turbines to mechanically power generators for electric power.</p></figure>",
    
     "<figure><img src=\"./img/water.jpg\" alt=\"Hydroelectric power\"><p>his is called hydroelectric power or hydropower. The most common type of hydroelectric power plant uses a dam on a river to store water in a reservoir. Water released from the reservoir flows through a turbine, spinning it, which in turn activates a generator to produce electricity.</p></figure>",
    
     "<figure><img src=\"./img/solar.jpg\" alt=\"solar power\"><p>Solar power is the conversion of sunlight into electricity, either directly using photovoltaics (PV), or indirectly using concentrated solar power (CSP). CSP systems use lenses or mirrors and tracking systems to focus a large area of sunlight into a small beam.</p></figure>"

    
];

let container = document.querySelector(".container");


    // Load your images on page-load
    function preloader() {
        const imagesList = [
           "./img/Wind.jpg",
           "./img/water.jpg",
           "./img/solar.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    container.innerHTML = para[0];
    /* 
    Get all buttons in an HTMLCollection */
    function handleClick(ev) {
        console.log(ev.target.innerHTML);
//    
//    for(let i = 0; i < button.length; i += 1){
//        if(button[i].hasAttribute("class")){/*if this button has a class .active*/
//           //remove it
////           button[i].removeAttribute("class");
//           }
//    } 
    if (ev.target.innerHTML === "Wind Power"){
        container.innerHTML = para[0];
    }
     if (ev.target.innerHTML === "Hydroelectric power"){
        container.innerHTML = para[1];
    }

     if (ev.target.innerHTML === "Solar power"){
        container.innerHTML = para[2];
    }


     ev.target.parentNode.setAttribute("class","active");
}

    for(let b = 0; b < button.length; b++) {
        button[b].addEventListener("click", handleClick, false);
    
   }
     // Closing and invoking closure  
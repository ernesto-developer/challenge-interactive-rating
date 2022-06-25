const optBtns = document.querySelectorAll(".optBtn");
const btnSubmit = document.querySelector(".rating__optRating--submitBtn");
let ratingSelected = "0";

const optRatingScreen = document.querySelector(".ratingCard__optRating");
const thanksScreen = document.querySelector(".ratingCard__msjGratitude");
const msjUserFeddBack = document.querySelector(".ratingCard__msjGratitude--userFeddBack");


for (let i = 0; i < optBtns.length; i++) {
    const element = optBtns[i];
    
    element.addEventListener("click", (e)=>{
        if(e.target.classList.contains("optBtn")){
            for (let j = 0; j < optBtns.length; j++) {
                const nodo = optBtns[j];
                nodo.classList.contains("selected")&& nodo.classList.remove("selected");
            }
            e.target.classList.add("selected");
            ratingSelected = e.target.textContent;
        }else{ 
            for (let j = 0; j < optBtns.length; j++) {
                const nodo = optBtns[j];
                nodo.classList.contains("selected")&& nodo.classList.remove("selected");
            }
            e.target.parentNode.classList.add("selected");  
            ratingSelected = e.target.textContent;         
        }
    })
}


btnSubmit.addEventListener("click", function () {
        optRatingScreen.classList.add("deactivate");
        thanksScreen.classList.add("active");
        msjUserFeddBack.firstChild.textContent = `You selected ${ratingSelected} out of 5`;
    });
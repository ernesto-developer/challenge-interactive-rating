const optBtns = document.querySelectorAll(".optBtn");
//const hijo = optBtns[0].firstChild;

for (let i = 0; i < optBtns.length; i++) {
    const element = optBtns[i];
    
    element.addEventListener("click", (e)=>{
        console.log(e.target.firstChild.textContent);

        e.target.parentNode.classList.add("selected");


    })



//    console.log(element.firstChild.textContent);
}
const tgBtn = document.getElementById("toggle-button")
let count = 0;

tgBtn.addEventListener("click", () => {
    count++;
    if(count % 2 == 0){
        document.body.style.backgroundColor = "#202020"
        tgBtn.innerText = "Light"
    }
    else{
        document.body.style.backgroundColor = "#F1F1F1"
        tgBtn.innerText = "Dark"
    }
    
})
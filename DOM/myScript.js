const darkButton = document.getElementById("Dark-btn")
const lightButton = document.getElementById("Light-btn")
console.log(darkButton)
console.log(lightButton)
darkButton.addEventListener("click", () => {
    console.log("Button was click")
})
darkButton.addEventListener("click", () =>{
    document.body.style.backgroundColor = "#202020"
})
lightButton.addEventListener("click", () =>{
    document.body.style.backgroundColor = "#F0F0F0"
})
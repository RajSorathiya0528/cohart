const AddButton = document.getElementById("AddButton")
const textBox = document.getElementById('InputTask')
const listItem = document.getElementById('ListItem')
const Dateheading = document.createElement('h3')
const dateDiv = document.getElementById('date')
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

Dateheading.innerText = `${day} / ${month} / ${year}`
dateDiv.appendChild(Dateheading)



AddButton.addEventListener("click",() => {
    const clearButton = document.createElement('Button')
    
    const list = document.createElement('li')
    const textBoxValue = textBox.value;

    const Text = document.createElement('p')
    Text.innerText = textBoxValue

    clearButton.innerText = " X "
    clearButton.classList.add("clearButton")

    list.appendChild(Text)

    list.appendChild(clearButton);

    listItem.appendChild(list);

    textBox.value = " "

    clearButton.addEventListener("click",() => {
        list.remove();
    })
})


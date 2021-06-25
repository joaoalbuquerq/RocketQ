import Modal from './modal.js'

const modal = Modal()

//Pega todos os botões de classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{
    button.addEventListener("click", event =>{
        //Abre o modal chamando o arquivo modal.js
        modal.open() 
    })
})


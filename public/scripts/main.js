import Modal from './modal.js'

const modal = Modal()

//Mapeia os elementos do modal
const checkButtons = document.querySelectorAll(".actions a.check")
const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")


checkButtons.forEach(button =>{
    button.addEventListener("click", handleClick)
})


/*Procura no html a classe actions que dentro dela possui tags A com a classe delete
a cada delete encontrado irá abrir o modal */
const deleteButton = document.querySelectorAll(".actions a.delete")


deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})



function handleClick(event,check=true){

    event.preventDefault()
    const text = check ? 'Marcar como lida' : 'Excluir'
    const slug = check ? 'check' : 'delete' 
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)


    // Função que troca o conteúdo do modal de acordo com o botão clicado, e por final abre o modal
    modalTitle.innerHTML = `${text} esta pergunta `
    modalDescription.innerHTML = `Deseja realmente ${text.toLowerCase()} esta pergunta ?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")


    modal.open()
}

// alert('carregou')

function log1(message){
    console.log('> ' + message)
}

const cards = document.querySelectorAll('.card')
const dropzone = document.querySelectorAll('.dropzone')

// console.log(cards)

// laço de iteração  our cards
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart(){
    log1('CARD: Start dragging')
}

function drag(){
    log1('CARD: Is Dragging')
}

function dragend(){
    log1('CARD: Stop drag!')
}

// laço de iteração  local onde vou soltar os cartões
// place where we will drop cards zone
dropzone.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    log1('DROPZONE: Enter in zone')
}

function dragover(){
    log1('DROPZONE: Over in zone')
}

function dragleave(){
    log1('DROPZONE: Leave in zone')
}

function drop(){
    log1('DROPZONE: Drop in zone')
}
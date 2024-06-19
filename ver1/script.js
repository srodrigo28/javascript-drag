// alert('carregou')

function log(message){
    console.log('> ' + message)
}

const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

// console.log(cards)

// laço de iteração  our cards
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart(){
    // log('CARD: Start dragging')
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag(){
    log('CARD: Is Dragging')
}

function dragend(){
    // log1('CARD: Stop drag!')
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

// laço de iteração  local onde vou soltar os cartões
// place where we will drop cards zone
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    log('DROPZONE: Enter in zone')
}

function dragover(){
    // log('DROPZONE: Over in zone')
    this.classList.add('over')

    // get dragging card pegar o cartão
    const cardBeingDragged = document.querySelector('.is-dragging')

    // this = dropzone
    this.appendChild(cardBeingDragged)
}

function dragleave(){
    // log('DROPZONE: Leave in zone')
    this.classList.remove('over')
}

function drop(){
    log('DROPZONE: Drop in zone')
    this.classList.remove('over')
}
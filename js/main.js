const gridParent = document.getElementById('grid-parent');
const startButton = document.getElementById('start-button');
//creo una funzione per generare un nuovo div con classe box
function generateNewBox (){
    let item = document.createElement('div');
    item.classList.add('box');
    return item
}

//creo l'evento per il quale si genera la griglia
startButton.addEventListener('click', function(){
    //aggiungo un reset per non generare box infiniti
    gridParent.innerHTML = '';
    //ciclo for per popolare la griglia con i nuovi box
    for (let i = 1; i < 101; i++){
        let newDiv = generateNewBox();
        newDiv.innerHTML = i;
        gridParent.append(newDiv);
    }
})
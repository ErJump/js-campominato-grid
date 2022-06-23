const gridParent = document.getElementById('grid-parent');
const startButton = document.getElementById('start-button');
const difficulty = document.getElementById('difficulty');
//creo una funzione per generare un nuovo div con classe box
function generateNewBox (){
    let item = document.createElement('div');
    item.classList.add('box' , 'pointer');
    return item;
}

//creo l'evento per il quale si genera la griglia
startButton.addEventListener('click', function(){
    console.log(difficulty.value)
    //aggiungo un reset per non generare box infiniti
    gridParent.innerHTML = '';
    //ciclo for per popolare la griglia con i nuovi box
    for (let i = 1; i < 101; i++){
        let newDiv = generateNewBox();
        newDiv.innerHTML = i;
        gridParent.append(newDiv);
        //creo l'evento per il quale al click dell'elemento viene aggiunta la classe active e viene rimossa pointer
        newDiv.addEventListener('click', function(){
            newDiv.classList.add('active');
            newDiv.classList.remove('pointer');
            console.log(`La casella clickata è la numero: ${i}`);
        })
    }
})
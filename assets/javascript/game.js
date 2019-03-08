// select fighter

// move to player area

// select opponent

// move to enemy area

// fight sequence

// event listener for attak
//      click to attack

// opponent instanly counter attacks wright together

let player = false
let enemy = false
let hp
let dmg
let choice

const GameInit = _ => {

}
document.addEventListener('click', ({target}) => {
    if(player === true && enemy === true){
        return
    }
    if(target.className === 'player' && player === true){
        enemy = true
        console.log('bamboo')
        //function to move enemy to enemy div and add enemy class

    }
    if(target.className === 'player' && player === false ){
        player = true
        console.log('panda')
        //function to move player to you div and add you class
    }
    
})
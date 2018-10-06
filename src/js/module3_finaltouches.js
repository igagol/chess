function setupResetEvent(){
    document.getElementById("reset").addEventListener("click", ()=>{
        window.location.reload();
    })
}

function setTurn(who){
    window.turn = who;

    document.getElementById("turn_information").innerText = `This is your turn ${who}`;
}

function toggleTurn(){
    if(window.turn == "sheep") setTurn("wolf");
    else setTurn("sheep");
}

function checkWinner(){

    if(window.turn == "sheep"){
        var wolfrow = document.querySelector("[data-figure=\"wolf\"]")
            .closest(".row")
            .getAttribute("row");

        if(wolfrow == 1) {
            confirm("Congratulations Wolf! You won");
            window.location.reload();
        }
    }
    else {
        var wolf = document.querySelector("[data-figure=\"wolf\"]");
        var col = wolf.closest(".field").getAttribute("col");
        var row = wolf.closest(".row").getAttribute("row");
        var coln = ltor(col);
        
        var col_left = rtol(coln-1);
        var col_right = rtol(coln+1);
        
        var newrow = row-1;
        
        
        if(isFieldOccupied( col_left, newrow) && isFieldOccupied( col_right, newrow)){
            confirm("Congratulations Sheeps! You won");
            window.location.reload();
        }
        
    }

}
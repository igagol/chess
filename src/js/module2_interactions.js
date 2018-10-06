
function setUpGlobalEvents(){
    document.addEventListener("click", (event)=>{
        if(event.target.closest(".figure, .possible_move") == null){
            clearPossibleMoves();
        } 
        var possible_move = event.target.closest(".possible_move");
        if(possible_move != null){
            move(possible_move);
        }
    });
}

function move(newField){
    clearPossibleMoves();
    var fromCol = newField.dataset.fromCol;
    var fromRow = newField.dataset.fromRow;
    var to = newField.querySelector(".field-inside");
    
    var figure = findField(fromCol, fromRow).querySelector(".figure");

    to.appendChild(figure);
    toggleTurn();
    checkWinner();
};

function setOnFigureClickEvents(){
    var figures = document.querySelectorAll(".figure");
    for( var i = 0; i < figures.length; i++ ){
        figures[i].addEventListener("click", showPossibleMoves);
    }
}

function clearPossibleMoves(){
    var possible_moves = document.querySelectorAll(".possible_move");
    for(var item of possible_moves){
        item.classList.remove("possible_move");
    }
}

function showPossibleMoves(event){
    if(event.target.dataset.figure != window.turn) return;

    event.stopPropagation();
    clearPossibleMoves();

    var figureEl = event.target;
    var col = figureEl.closest(".field").getAttribute("col");
    var row = +figureEl.closest(".row").getAttribute("row");

    showMoves(figureEl, col, row);
}

function ltor(letter){
    return letter.charCodeAt(0) - 65;
}
function rtol(number){
    return String.fromCharCode( number + 65 );
}
function isFieldOccupied(col, row){
    if(row > 8 || row < 1 || ltor(col) < 0 || ltor(col) >= 8) return true;
    var field = findField(col, row);


    return !!field.children[0].children.length > 0;
}


function showMoves(figureEl, col, row){
    var coln = ltor(col);

    var col_left = rtol(coln-1);
    var col_right = rtol(coln+1);

    var newrow = figureEl.dataset.figure == "wolf" ? row-1 : Number(row)+1;


    if(!isFieldOccupied( col_left, newrow)){
        let field = findField(col_left, newrow);
        field.classList.add("possible_move");
        field.dataset.fromCol = col;
        field.dataset.fromRow = row;
    }

    if(!isFieldOccupied( col_right, newrow)){
        let field = findField(col_right, newrow);
        field.classList.add("possible_move");
        field.dataset.fromCol = col;
        field.dataset.fromRow = row;
    }

}
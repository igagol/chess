
function setOnFigureClickEvents(){
    var figures = document.querySelectorAll(".figure");
    for( var i = 0; i < figures.length; i++ ){
        figures[i].addEventListener("click", showPossibleMoves);
    }
}

function showPossibleMoves(event){
    var figureEl = event.target;
    var col = figureEl.closest(".field").getAttribute("col");
    var row = figureEl.closest(".row").getAttribute("row");

    if(figureEl.dataset.figure == "pawn"){
        showPawnMoves(figureEl, col, row);
    }
}

function ltor(letter){
    return letter.charCodeAt(0) - 65;
}
function rtol(number){
    return String.fromCharCode( number + 65 );
}
function isFieldOccupied(col, row){
    var field = findField(col, row);

    return !!field.children[0].children.length > 0;
}


function showPawnMoves(figureEl, col, row){
    var color = figureEl.dataset.color;
    var moveCount = figureEl.dataset.moveCount;

    var coln = ltor(col);

    if(child)
    
}
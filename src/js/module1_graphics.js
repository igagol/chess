
function setWolfAndSheeps(){
    placeFigure("sheep", "white", "B", 1);
    placeFigure("sheep", "white", "D", 1);
    placeFigure("sheep", "white", "F", 1);
    placeFigure("sheep", "white", "H", 1);

    placeFigure("wolf", "black", "E", 8);

}

function drawChessBoard(){
    var board = document.getElementById("board");
    for(var i = 8; i > 0; i--){
        let startFromWhite = !!(i%2);
        var row = createRowOfFields(startFromWhite, i);
        board.appendChild(row);
    }
}

function createRowOfFields(startFromWhite, row_number){
    var row = document.createElement("div");
    row.setAttribute("row", row_number);
    row.classList.add("row");
    for(var i = 0; i < 8; i++){
        var field = createField(startFromWhite, String.fromCharCode(65+i));
        row.appendChild(field);
        startFromWhite = !startFromWhite;
    }

    return row;
}

function createField(isWhite, column){
    var field = document.createElement("div");
    field.classList.add("field");
    if(isWhite){
        field.classList.add("white");
    } else {
        field.classList.add("black");
    }

    field.setAttribute("col", column);

    var fieldInside = document.createElement("div");
    fieldInside.classList.add("field-inside");

    field.appendChild(fieldInside);

    return field;
}

function findField(col, row){
    let fieldsRow = document.querySelector(`[row="${row}"]`);
    let field = fieldsRow.querySelector(`[col=${col}]`);
    return field;
}

function createFigure(figureName, color){
    var figure = document.createElement("div");
    figure.dataset.figure = figureName;
    figure.dataset.color = color;
    figure.dataset.moveCount = 0;
    figure.classList.add("figure", figureName, color);
    return figure;
}

function placeFigure(figureName, color, row, col){
    let figure = createFigure(figureName, color);
    findField(row, col).children[0].appendChild(figure);
}
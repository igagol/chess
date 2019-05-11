
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    console.log("Drawing chessboard");

    drawChessBoard();

    console.log("setting up pieces");

    setWolfAndSheeps();
    
    console.log("Setting up click events");

    setOnFigureClickEvents();
});
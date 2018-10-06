
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    drawChessBoard();
    setWolfAndSheeps();
    setUpGlobalEvents();
    setOnFigureClickEvents();
    setupResetEvent();
    setTurn("sheep");
});
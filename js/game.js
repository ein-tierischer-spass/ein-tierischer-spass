function loadGame(id) {
    var gameDiv = document.getElementById(id);
    var gameFrame = gameDiv.children.item(1);
    var gameStart = gameDiv.children.item(0);

    gameDiv.removeChild(gameStart);
    //gameStart.classList.remove("gameloader");
    //gameStart.classList.add("hidden");
    gameFrame.classList.remove("hidden");
    gameFrame.setAttribute("src", gameFrame.dataset.src);

    if (gameDiv.children.length > 1) {
        gameDiv.children.item(1).classList.remove("hidden");
        gameDiv.children.item(1).classList.add("helper");
    }
}
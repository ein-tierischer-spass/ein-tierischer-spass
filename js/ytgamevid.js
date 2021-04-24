//https://www.youtube-nocookie.com/embed/

function getGameVideoConfirmation(id) {
    var text = document.getElementById(id+"-text");
    var confirmation = document.getElementById(id+"-confirmation");

    text.classList.add("hidden");
    confirmation.classList.remove("hidden");
}

function embedGameVideo(id) {
    var iframe = document.getElementById(id+"-iframe");
    var confirmation = document.getElementById(id+"-confirmation");

    confirmation.classList.add("hidden");
    iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/"+iframe.dataset.id);
}

function hideGameVideoConfirmationToast(id) {
    var text = document.getElementById(id+"-text");
    var confirmation = document.getElementById(id+"-confirmation");

    confirmation.classList.add("hidden");
    text.classList.remove("hidden");
}
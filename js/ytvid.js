function getConfirmation() {
    var retVal = confirm("Möchtest du dieses Video von YouTube angucken? YouTube erhebt eventuell Nutzerstatistiken.");
    if (retVal == true) {
       return true;
    }
    else {
       return false;
    }
 }

 function showConfirmationToast() {
    var ytbutton = document.getElementById("ytbutton");
    var yttoast = document.getElementById("yttoast");

    ytbutton.classList.add("hidden");
    yttoast.classList.remove("hidden");
  }

  function hideConfirmationToast() {
    var ytbutton = document.getElementById("ytbutton");
    var yttoast = document.getElementById("yttoast");

    yttoast.classList.add("hidden");
    ytbutton.classList.remove("hidden");
  }

 function embedVideo() {
     /*
    var confirmed = getConfirmation();

    if (!confirmed) {
       return;
    }
    */
    var embedded = document.getElementById("embeddedvideo");
    var ytbutton = document.getElementById("ytbutton");
    var yttoast = document.getElementById("yttoast");

    ytbutton.classList.add("hidden");
    yttoast.classList.add("hidden");
    embedded.classList.remove("hidden");
    embedded.setAttribute("src", "https://www.youtube-nocookie.com/embed/4E0dwFS72gk");
 }


// Hide Django flash message after a few seconds (give or take)

document.addEventListener("DOMContentLoaded", function() {
    var messageTimeout = document.getElementById("message-timer");

    if (messageTimeout) {
        setTimeout(function() {
            messageTimeout.style.display = "none";
        }, 5000);
    }
});






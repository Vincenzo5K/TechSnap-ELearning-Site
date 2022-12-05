document.querySelector(".close-btn").addEventListener("click", toggleEventPopup);

// hide popup when clicking outside of it.
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("event-reg-popup-section")) {
        toggleEventPopup();
    }
})

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("register-btn")) {
        toggleEventPopup();
        document.querySelector(".event-reg-popup-section").scrollTo(0, 0);
        eventPopUpDetails(e.target.parentElement);
    }
})

function toggleEventPopup() {
    document.querySelector(".event-reg-popup-section").classList.toggle("open");

    document.querySelector(".popup-content").classList.toggle("open");
}


function eventPopUpDetails(eventItem) {
    document.querySelector(".popup-event-Img").src = eventItem.querySelector(".event-thumbnail-img").src;

    document.querySelector(".popup-event-info").innerHTML = eventItem.querySelector(".event-info").innerHTML;
}
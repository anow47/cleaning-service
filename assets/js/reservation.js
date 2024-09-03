// Modal functionality
var modal = document.getElementById("reservationModal");
console.log(modal)

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Form submission
document.getElementById("reservationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    fetch("submit_reservation.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
        closeModal();
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred. Please try again.");
    });
});
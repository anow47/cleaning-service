// Modal functionality
var modal = document.getElementById("reservationModal");
console.log(modal)

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}
function openModal() {
    modal.style.display = "block";
    setDefaultDate();
}
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

function setDefaultDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("reservationDate").value = today;
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
// LOGIN CHECK
if(localStorage.getItem("auth") !== "true"){
window.location.href = "login.html";
}

// SHOW SECTIONS
function show(id){
document.querySelectorAll(".section").forEach(s => s.style.display = "none");
document.getElementById(id).style.display = "block";
}

// LOAD BOOKINGS
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

document.getElementById("totalBookings").innerText = bookings.length;

let list = document.getElementById("bookingList");

bookings.forEach((b, index) => {
let div = document.createElement("div");
div.className = "card";
div.innerHTML = `
<b>Name:</b> ${b.name} <br>
<b>Room:</b> ${b.room} <br>
<b>Date:</b> ${b.date}
`;
list.appendChild(div);
});

// LOGOUT
function logout(){
localStorage.removeItem("auth");
window.location.href = "login.html";
}
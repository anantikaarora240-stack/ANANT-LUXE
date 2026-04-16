function openForm(){
document.getElementById("popup").style.display="block";
}

document.getElementById("bookingForm").onsubmit=function(e){
e.preventDefault();

document.getElementById("popup").style.display="none";
document.getElementById("payment").style.display="block";
}

function toggleMenu(){
let m=document.getElementById("menu");
m.style.display = (m.style.display==="block") ? "none" : "block";
}

function confirmPay(){

// QR REMOVAL AFTER PAYMENT
document.getElementById("qr").style.display="none";

alert("Payment Successful ✅ Receipt Generated");

let receipt = `
ANANT LUXE RESORT

Booking Confirmed
Guest: ${document.getElementById("name").value}
Check-in: ${document.getElementById("checkin").value}
Check-out: ${document.getElementById("checkout").value}

Thank You!
`;

let blob = new Blob([receipt]);
let a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "receipt.txt";
a.click();
}
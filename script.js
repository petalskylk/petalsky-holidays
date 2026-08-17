```javascript
// ==========================================
// PETALSKY HOLIDAYS
// WhatsApp Enquiry Form
// ==========================================


// IMPORTANT:
// Replace this with your real WhatsApp number.
//
// Example:
// 0771234567
//
// becomes:
// 94771234567
//
// Do NOT include +94 or spaces.

const WHATSAPP_NUMBER = "947XXXXXXXX";


function sendWhatsApp(event) {

  event.preventDefault();


  const name =
    document.getElementById("name").value.trim();


  const email =
    document.getElementById("email").value.trim();


  const dates =
    document.getElementById("dates").value.trim();


  const message =
    document.getElementById("message").value.trim();


  const text =
    `Hello PetalSky Holidays!%0A%0A` +

    `Name: ${encodeURIComponent(name)}%0A` +

    `Email: ${encodeURIComponent(email)}%0A` +

    `Travel dates: ${
      encodeURIComponent(
        dates || "Not specified"
      )
    }%0A%0A` +

    `Trip details:%0A${
      encodeURIComponent(message)
    }`;


  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
    "_blank"
  );

}


// Automatically update the copyright year.

document.getElementById("year").textContent =
  new Date().getFullYear();
```

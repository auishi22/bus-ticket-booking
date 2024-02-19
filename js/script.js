function buyTickets() {
  const mainTicketSec = document.getElementById("scrollBuyTickets");
  mainTicketSec.scrollIntoView({ behavior: "smooth" });
}
// booking entry
const bookingContainer = document.getElementById("bookingContainer");
function addBookingEntry(seatNo, classType, price) {
  const bookingEntry = document.createElement("div");
  bookingEntry.classList.add(
    "flex",
    "inter",
    "font-medium",
    "text-[#03071299]"
  );
  bookingEntry.innerHTML = `
    <h5 class="flex-1">${seatNo}</h5>
    <h5 class="flex-1">${classType}</h5>
    <h5>${price}</h5> `;

  bookingContainer.appendChild(bookingEntry);
}

// updated total price of tickets
function updateTotalPrice() {
  const totalPriceDisplay = document.getElementById("total-price");
  totalPriceDisplay.textContent = `BDT ${totalPrice}`;
}
let totalPrice = 0;
function calculateTotalPrice() {
  totalPrice = seatBooked * 550;
  //   updateTotalPrice();
  return totalPrice;
}
const seats = document.querySelectorAll(".seat");
let seatBooked = 0;
// display seat number
function updateBookedSeatsDisplay() {
  const seatBookingNo = document.getElementById("seatBookingNo");
  seatBookingNo.textContent = seatBooked.toString();
}

function clickToBookSeat() {
  seats.forEach((seat) => {
    // Get the seat number from the inner text
    const seatNo = seat.innerText;
    // Add background color to the clicked seat
    seat.addEventListener("click", () => {
      if (seatBooked < 4) {
        const seatNo = seat.innerText;
        const classType = "Economy";
        const price = "550";
        addBookingEntry(seatNo, classType, price);
        addBgColorById(seatNo);
        seatBooked++;
        calculateTotalPrice();
        updateTotalPrice();
        updateBookedSeatsDisplay();
        updateGrandTotal(0);
        updateAvaiableSeats();
      } else {
        alert("You cannot book more than 4 seats!");
      }
    });
  });
}

// updated avaiable seats
function updateAvaiableSeats() {
  const avaiableSeats = document.getElementById("available-seats");
  const remainingSeats = 40 - seatBooked;
  avaiableSeats.textContent = remainingSeats;
}

document.addEventListener("DOMContentLoaded", () => {
  clickToBookSeat();
  // Update display initially
  updateBookedSeatsDisplay();
});

// add bg color
function addBgColorById(elementId) {
  const bookSeat = document.getElementById(elementId);
  const booked = bookSeat.classList.add("bg-[#1DD100]");
}

// enter coupon code and calculate the grand total value

document.addEventListener("DOMContentLoaded", function () {
  const applyCouponBtn = document.getElementById("apply-coupon");
  applyCouponBtn.addEventListener("click", applyCoupon);
});

function applyCoupon() {
  const couponInput = document.getElementById("coupon-input");
  const couponCode = couponInput.value;

  //   check the coupon code
  if (couponCode === "NEW15") {
    updateGrandTotal(15);
    disableCouponInput();
  } else if (couponCode === "Couple 20") {
    updateGrandTotal(20);
    disableCouponInput();
  } else {
    alert("Invalid coupon code. Please enter a valid coupon code.");
  }
}

// calculate grand total
function updateGrandTotal(discountPercentage) {
  const totalPriceTicket = calculateTotalPrice();
  const discountPrice = totalPriceTicket * (1 - discountPercentage / 100);
  document.getElementById(
    "grand-total"
  ).textContent = `BDT ${discountPrice.toFixed(2)}`;
}

// disable coupon field
function disableCouponInput() {
  const disableField = document.getElementById("coupon-field");
  disableField.disabled = true;
}

// Get references to the buttons and the modal
const nextButton = document.getElementById("nextButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("my_modal_4");

// Add event listener to the "Next" button to open the modal
nextButton.addEventListener("click", () => {
  modal.showModal();
});

// Add event listener to the "Close" button inside the modal to close it
closeModalButton.addEventListener("click", () => {
  modal.close();
});

// Function to handle clicking the "Continue" button inside the modal
nextButton.addEventListener("click", () => {
  // Get a reference to the "Continue" button inside the modal
  //   const continueButton = document.getElementById("closeModalButton");
  closeModalButton.addEventListener("click", () => {
    const passengerNameInput = document.getElementById("passengerName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const emailInput = document.getElementById("email");

    if (
      passengerNameInput.checkValidity() &&
      phoneNumberInput.checkValidity() &&
      emailInput.checkValidity()
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
    
  });
});

// Function to handle form verification
document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextButton");
  const myModal = document.getElementById("my_modal_4");

  nextButton.addEventListener("click", function () {
    const passengerNameInput = document.getElementById("passengerName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const emailInput = document.getElementById("email");

    if (
      !passengerNameInput.checkValidity() ||
      !phoneNumberInput.checkValidity() ||
      !emailInput.checkValidity()
    ) {
      showAlert("Please enter valid information.");
      myModal.close;
      return;
    }

    myModal.showModal;
  });

  const closeModalButton = document.getElementById("closeModalButton");
  closeModalButton.addEventListener("click", function () {
    myModal.close;
  });
});

// Function to show an alert message
function showAlert(message) {
  alert(message);
}
// Get a reference to the "Continue" button
// const continueButton = document.getElementById("closeModalButton");

// Add event listener to the "Continue" button to reload the page when clicked
// continueButton.addEventListener("click", () => {
//   // window.location.reload();
//   window.scrollTo({ top: 0, behavior: "smooth" });
//   if (
//     passengerNameInput.checkValidity() &&
//     phoneNumberInput.checkValidity() &&
//     emailInput.checkValidity()
//   ) {
//     // If all fields are valid, reload the page after a delay
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setTimeout(() => {
//       window.location.reload();
//     }, 700);
//   }
// });

// form varification
// document.addEventListener("DOMContentLoaded", function () {
//   const nextButton = document.getElementById("nextButton");
//   const passengerNameInput = document.getElementById("passengerName");
//   const phoneNumberInput = document.getElementById("phoneNumber");
//   const emailInput = document.getElementById("email");
//   const bookingForm = document.getElementById("bookingForm");
//   const myModal = document.getElementById("my_modal_4");

//   nextButton.addEventListener("click", function (event) {
//     // Check if all fields are valid
//     if (!passengerNameInput.checkValidity()) {
//       showAlert("Please enter a valid name (only letters and spaces).");
//       myModal.close();
//       return;

//     }

//     if (!phoneNumberInput.checkValidity()) {
//       alert("Please enter a valid phone number (10 digits).");
//       myModal.close();
//       return;

//     }

//     if (!emailInput.checkValidity()) {
//       alert("Please enter a valid email address.");
//       myModal.close();
//       return;

//     }

//     // If all fields are valid, show the modal
//     else{ myModal.showModal();}

//   });

//   // Close the modal when the "Continue" button is clicked
//   const closeModalButton = document.getElementById("closeModalButton");
//   closeModalButton.addEventListener("click", function () {
//     myModal.close();
//   });
// });

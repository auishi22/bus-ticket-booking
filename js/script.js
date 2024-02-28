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
// booking remove
function removeBookingEntry(seatNo) {
  const bookingEntries = bookingContainer.querySelectorAll(".flex");
  bookingEntries.forEach((entry) => {
    const entrySeatNo = entry.querySelector("h5:nth-child(1)").textContent;
    if (entrySeatNo === seatNo) {
      entry.remove();
    }
  });
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
// remove bg color
function removeBgColorById(elementId) {
  const seat = document.getElementById(elementId);
  seat.classList.remove("bg-[#1DD100]");
}
function clickToBookSeat() {
  seats.forEach((seat) => {
    // Get the seat number from the inner text
    const seatNo = seat.innerText;
    // Add background color to the clicked seat
    seat.addEventListener("click", () => {
      const seatNo = seat.innerText;
      const classType = "Economy";
      const price = "550";
      
      if (seat.classList.contains("selected")) {
        
        // If the seat is already selected, deselect it
        removeBookingEntry(seatNo); // Remove booking entry
        removeBgColorById(seatNo); // Remove background color
        seatBooked--;
        updateTotalPrice();
        updateBookedSeatsDisplay();
        updateGrandTotal(0);
        updateAvaiableSeats();
        seat.classList.remove("selected");
      } else {
        // If the seat is not selected, select it
        if (seatBooked < 4) {
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
          seat.classList.add("selected");
        } else {
          alert("You cannot book more than 4 seats!");
        }
      }
    });
  });
}


// enter coupon code and calculate the grand total value

document.addEventListener("DOMContentLoaded", function () {
  const applyCouponBtn = document.getElementById("apply-coupon");
  applyCouponBtn.addEventListener("click", applyCoupon);
});

function applyCoupon() {
  const couponInput = document.getElementById("coupon-input");
  const couponCode = couponInput.value;
  
  // Check if any seat is selected
  const selectedSeats = document.querySelectorAll(".seat.selected");
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat before applying the coupon.");
    return;
  }
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

 // Hide the coupon input field after updating the grand total
function disableCouponInput() {
  const couponField = document.getElementById("coupon-field");
  couponField.style.display = "none";
}


// form varification
document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextButton");
  const passengerNameInput = document.getElementById("passengerName");
  const phoneNumberInput = document.getElementById("phoneNumber");
  const emailInput = document.getElementById("email");
  const bookingForm = document.getElementById("bookingForm");
  const myModal = document.getElementById("my_modal_4");

  nextButton.addEventListener("click", function (event) {
    // Check if all fields are valid
    if (!passengerNameInput.checkValidity()) {
      showAlert("Please enter a valid name (only letters and spaces).");
      //   myModal.close();
      event.preventDefault;
      return;
    }

    if (phoneNumberInput.value.length !== 11) {
      alert("Please enter a valid phone number (11 digits).");
    //   myModal.close();
    event.preventDefault;
      return;
    }

    if (!emailInput.checkValidity()) {
      alert("Please enter a valid email address.");
    //   myModal.close();
    event.preventDefault;
      return;
    }

    // If all fields are valid, show the modal
    myModal.showModal();
    event.preventDefault();
  });

  // Close the modal when the "Continue" button is clicked
  const closeModalButton = document.getElementById("closeModalButton");
  closeModalButton.addEventListener("click", function () {
    myModal.close();
  });
});

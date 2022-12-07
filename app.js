const seat = document.querySelectorAll(".seat");
const container = document.querySelector(".container");
const seatsNumber = document.querySelector(".selected-seats");
const total = document.querySelector(".total");
const movieSelect = document.getElementById("movie-select");
const price = document.getElementById("movie-select");

const ticketPrice = +price.value; //the + sign changes the type of "ticketPrice" from string to number

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll(".seat.active");
    const seatsCount = selectedSeats.length;
    seatsNumber.innerText = seatsCount;

    total.innerText = seatsCount * movieSelect.value
}

container.addEventListener('click', e =>{
     if(e.target.classList.contains('seat')) {
        console.log(e.target); 
     } {
        e.target.classList.toggle("active");

        updateSelectedCount();
     }
});
// JavaScript for booking seats in a movie theatre

// Initialize the theaterSeats array with all seats available ('O')
const theaterSeats = [
    ['O', 'O', 'O'],
    ['O', 'O', 'O'],
    ['O', 'O', 'O']
];

// Function to create the seating chart dynamically based on the theaterSeats array
function createSeatingChart() {
    const seatingChart = document.getElementById('seating-chart');
    seatingChart.innerHTML = '';
    
    for (let row = 0; row < theaterSeats.length; row++) {
        for (let col = 0; col < theaterSeats[row].length; col++) {
            const seat = document.createElement('div');
            seat.className = 'seat ' + (theaterSeats[row][col] === 'O' ? 'available' : 'booked');
            seat.innerText = String.fromCharCode(65 + row) + (col + 1);
            seat.setAttribute('onclick', `bookSeat(${row}, ${col})`);
            seatingChart.appendChild(seat);
        }
    }
}

// Function to book a specific seat
function bookSeat(row, col) {
    if (theaterSeats[row][col] === 'O') {
        theaterSeats[row][col] = 'X';
        updateSeatStatus(row, col, 'booked');
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is booked!`);
    } else {
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already taken!`);
    }
}

// Function to update the seat status on the seating chart
function updateSeatStatus(row, col, status) {
    const seats = document.getElementsByClassName('seat');
    const index = row * theaterSeats[row].length + col;
    seats[index].classList.remove('available', 'booked');
    seats[index].classList.add(status);
}

// Function to book a random available seat
function bookRandomSeat() {
    const availableSeats = [];

    for (let row = 0; row < theaterSeats.length; row++) {
        for (let col = 0; col < theaterSeats[row].length; col++) {
            if (theaterSeats[row][col] === 'O') {
                availableSeats.push({ row, col });
            }
        }
    }

    if (availableSeats.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSeats.length);
        const { row, col } = availableSeats[randomIndex];
        bookSeat(row, col);
    } else {
        alert('All seats are already booked! Resetting seats...');
        resetSeats();
    }
}

// Function to reset all seats to available
function resetSeats() {
    for (let row = 0; row < theaterSeats.length; row++) {
        for (let col = 0; col < theaterSeats[row].length; col++) {
            theaterSeats[row][col] = 'O';
        }
    }
    createSeatingChart();
    alert('All seats have been reset to available!');
}

// Create the seating chart when the page loads
window.onload = createSeatingChart;

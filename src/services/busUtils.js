export const splitOddEvenSeats = (seats) => {
  const oddSeats = {};
  const evenSeats = {};
  console.log(Object.values(seats));
  for (const seatName in seats) {
    const seatNumber = parseInt(seatName.substring(1));
    if (seatNumber % 2 === 0) {
      evenSeats[seatName] = seats[seatName];
    } else {
      oddSeats[seatName] = seats[seatName];
    }
  }

  return { oddSeats, evenSeats };
};

export const getAvailableSeatsCount = (seats) =>
  Object.values(seats).reduce((acc, seat) => acc + (!seat.booked ? 1 : 0), 0);

export const sortSeats = (seats) => {
  seats.sort((a, b) => {
    const aNumber = parseInt(a.substring(1));
    const bNumber = parseInt(b.substring(1));
    return aNumber - bNumber;
  });
  return seats;
};

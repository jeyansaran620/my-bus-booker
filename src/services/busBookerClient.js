const BUS_BOOKER_URL =
  "https://us-central1-my-bus-booker.cloudfunctions.net/app/";
const AVAILABLE_BUSES_URI = "availablebuses/";
const BUS_URI = "bus/";
const BUS_BOOKING_URI = "book/";

export const getAvailableBuses = (dataCallback, loaderCallback) => {
  return fetch(BUS_BOOKER_URL + AVAILABLE_BUSES_URI)
    .then((response) => response.json())
    .then((data) => {
      dataCallback(data);
      loaderCallback(false);
    })
    .catch(() => {
      dataCallback(null);
      loaderCallback(false);
    });
};

export const getSelectedBus = (busId, dataCallback, loaderCallback) => {
  return fetch(BUS_BOOKER_URL + BUS_URI + busId)
    .then((response) => response.json())
    .then((data) => {
      dataCallback(data);
      loaderCallback(false);
    })
    .catch(() => {
      dataCallback(null);
      loaderCallback(false);
    });
};

export const bookBus = (bookingData, paymentCallback) => {
  fetch(BUS_BOOKER_URL + BUS_BOOKING_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  })
    .then(() => {
      paymentCallback(true);
    })
    .catch(() => {
      paymentCallback(false);
    });
};

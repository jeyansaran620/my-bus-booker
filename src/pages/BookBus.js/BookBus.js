import { useParams } from "react-router-dom";
import { getSelectedBus } from "../../services/busBookerClient";
import { useEffect, useState } from "react";
import Loader from "../../components/styledComponents/Loader";
import StyledText from "../../components/styledComponents/Text";
import styles from "./BookBus.module.scss";
import { Box, Grid, Paper } from "@mui/material";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import { sortSeats, splitOddEvenSeats } from "../../services/busUtils";
import Seat from "../../components/Seat/Seat";
import StyledButton from "../../components/styledComponents/Button";
import PaymentModal from "../../components/PaymentModal/PaymentModal";
import UseAuth from "../../components/auth/UseAuth";
import Navbar from "../../components/Navbar";
import EventSeatIcon from "@mui/icons-material/EventSeat";

const BookBus = ({ setIsSnackbarOpen, setSnackBarMessage }) => {
  const [selectedBus, setSelectedBus] = useState({});
  const [busLoading, setBusLoading] = useState(true);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const { loggedInUser, signOutUser } = UseAuth();

  const params = useParams();

  const togglePaymentModal = () => {
    setIsPaymentModalOpen((prev) => !prev);
  };

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((id) => id !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  useEffect(() => {
    getSelectedBus(params.busId, setSelectedBus, setBusLoading);
  }, [params.busId]);

  if (busLoading) {
    return <Loader />;
  }

  if (!busLoading && !selectedBus) {
    return (
      <StyledText variant={"h5"} colorVariant={"link"}>
        {`Error While Fetching Bus Details :(`}
      </StyledText>
    );
  }

  const { oddSeats, evenSeats } = splitOddEvenSeats(selectedBus.seats);

  console.log(selectedBus, oddSeats, evenSeats);

  return (
    <Box>
      <Navbar
        username={loggedInUser ? loggedInUser.email : ""}
        onLogout={signOutUser}
      />
      <StyledText variant={"h5"} colorVariant={"dark"} sx={{ padding: "1rem" }}>
        {selectedBus.name}
      </StyledText>
      <Grid container className={styles.busBookingContainer}>
        <Grid item sm={6}>
          <StyledText
            variant={"h6"}
            colorVariant={"dark"}
            sx={{ padding: "1rem" }}
          >
            Select Seats
          </StyledText>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Paper
              elevation={6}
              sx={{
                mt: 2,
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
              className={styles.busBody}
            >
              <Grid item xs={6}>
                <WaterfallChartIcon
                  sx={{ margin: "1rem 1.5rem", marginLeft: "-1rem" }}
                />
              </Grid>
              <Grid item xs={6}>
                <DataUsageIcon sx={{ margin: "1rem 1.5rem" }} />
              </Grid>
              <Grid
                item
                sm={6}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {sortSeats(Object.keys(oddSeats)).map((seat) => (
                  <Seat
                    key={seat}
                    seat={seat}
                    selectedBus={selectedBus}
                    toggleSeat={toggleSeat}
                    selectedSeats={selectedSeats}
                  />
                ))}
              </Grid>
              <Grid
                item
                sm={6}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {sortSeats(Object.keys(evenSeats)).map((seat) => (
                  <Seat
                    key={seat}
                    seat={seat}
                    selectedBus={selectedBus}
                    toggleSeat={toggleSeat}
                    selectedSeats={selectedSeats}
                  />
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              margin: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <EventSeatIcon color={"primary"} />
              <StyledText
                variant={"string"}
                colorVariant={"dark"}
                sx={{ marginLeft: "0.5rem" }}
              >
                Available
              </StyledText>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <EventSeatIcon color={"disabled"} />
              <StyledText
                variant={"string"}
                colorVariant={"dark"}
                sx={{ marginLeft: "0.5rem" }}
              >
                Booked
              </StyledText>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <EventSeatIcon color={"success"} />
              <StyledText
                variant={"string"}
                colorVariant={"dark"}
                sx={{ marginLeft: "0.5rem" }}
              >
                Selected
              </StyledText>
            </Box>
          </Box>
        </Grid>

        <Grid item sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <StyledText
              variant={"h6"}
              colorVariant={"dark"}
              sx={{ padding: "1rem" }}
            >
              {`Total Price: ₹${selectedBus.price * selectedSeats.length}`}
            </StyledText>
            <StyledText
              variant={"string"}
              colorVariant={"dark"}
              sx={{ padding: "1rem" }}
            >
              {`Selected Seats: ${
                selectedSeats.length > 0 ? selectedSeats.join(", ") : "Empty"
              }`}
            </StyledText>
          </Box>
          <StyledButton
            disabled={selectedSeats.length === 0}
            onClick={() => togglePaymentModal()}
          >
            Proceed to payment
          </StyledButton>
        </Grid>
        <PaymentModal
          open={isPaymentModalOpen}
          handleClose={togglePaymentModal}
          bookingData={{
            id: params.busId,
            userId: loggedInUser.email,
            seats: selectedSeats,
          }}
          setIsSnackbarOpen={setIsSnackbarOpen}
          setSnackBarMessage={setSnackBarMessage}
        />
      </Grid>
    </Box>
  );
};

export default BookBus;

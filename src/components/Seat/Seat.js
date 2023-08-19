import EventSeatIcon from "@mui/icons-material/EventSeat";
import StyledText from "../styledComponents/Text";
import styles from "./Seat.module.scss";

const Seat = ({ selectedBus, seat, toggleSeat, selectedSeats }) => {
  const isBooked = selectedBus.seats[seat].booked;
  const seatColor = isBooked
    ? "disabled"
    : selectedSeats.includes(seat)
    ? "success"
    : "primary";
  return (
    <div
      className={` ${styles.busSeat} ${isBooked ? styles.disabled : ""}  `}
      onClick={() => {
        if (!isBooked) toggleSeat(seat);
      }}
    >
      <EventSeatIcon color={seatColor} />
      <StyledText variant={"string"} colorVariant={"dark"}>
        {seat}
      </StyledText>
    </div>
  );
};

export default Seat;

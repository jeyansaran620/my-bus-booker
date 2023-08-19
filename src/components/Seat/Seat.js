import EventSeatIcon from "@mui/icons-material/EventSeat";
import StyledText from "../styledComponents/Text";
import styles from "./Seat.module.scss";

const Seat = ({ selectedBus, seat, toggleSeat, selectedSeats }) => {
  const seatColor = selectedBus.seats[seat].booked
    ? "disabled"
    : selectedSeats.includes(seat)
    ? "success"
    : "primary";
  return (
    <div className={styles.busSeat} onClick={() => toggleSeat(seat)}>
      <EventSeatIcon color={seatColor} />
      <StyledText variant={"string"} colorVariant={"dark"}>
        {seat}
      </StyledText>
    </div>
  );
};

export default Seat;

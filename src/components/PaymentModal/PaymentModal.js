import { Modal, Paper, Box } from "@mui/material";
import StyledButton from "../styledComponents/Button";
import styles from "./PaymentModal.module.scss";
import StyledText from "../styledComponents/Text";
import { bookBus } from "../../services/busBookerClient";
import { useNavigate } from "react-router-dom";

const PaymentModal = ({ open, handleClose, bookingData }) => {
  const navigate = useNavigate();
  const paymentCallback = (isBookingSuccess) => {
    if (isBookingSuccess) {
      navigate("/");
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper elevation={6} className={styles.paymentModalContent}>
        <StyledText variant={"h5"} colorVariant={"dark"}>
          Verify your Payment
        </StyledText>
        <Box className={styles.paymentQR} />
        <StyledButton onClick={() => bookBus(bookingData, paymentCallback)}>
          Confirm payment
        </StyledButton>
      </Paper>
    </Modal>
  );
};

export default PaymentModal;

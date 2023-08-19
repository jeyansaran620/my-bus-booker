import { AppBar, Toolbar } from "@mui/material";
import styles from "./Navbar.module.scss";
import StyledText from "../styledComponents/Text";
import StyledButton from "../styledComponents/Button";
import { Link } from "react-router-dom";

const Navbar = ({ username, onLogout }) => {
  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar>
        <StyledText
          variant={"h6"}
          colorVariant={"light"}
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          <Link to={"/"}>My Bus Booker</Link>
        </StyledText>
        <StyledText
          variant={"string"}
          colorVariant={"light"}
          sx={{ marginRight: "1rem" }}
        >
          {username}
        </StyledText>
        <StyledButton onClick={() => onLogout()}>Log out</StyledButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import { Box, Grid, Paper } from "@mui/material";
import styles from "./UserSignIn.module.scss";
import StyledText from "../../components/styledComponents/Text";
import LogInForm from "../../components/LogInForm";
import SignUpForm from "../../components/SignupForm";
import { useNavigate } from "react-router-dom";

const UserSignIn = ({ signUp }) => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={6}>
        <Paper elevation={6} className={styles.homeWallpaper}>
          <div className={styles.wallpaperText}>
            <StyledText variant="h2" colorVariant={"dark"}>
              Wait is No More!
            </StyledText>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper elevation={6} className={styles.homeForm}>
          <StyledText variant={"h3"} sx={{ paddingTop: "15vh" }}>
            My Bus Booker
          </StyledText>
          {signUp ? <SignUpForm /> : <LogInForm />}

          <Box sx={{ paddingTop: "5vh" }}>
            <StyledText variant={"string"}>
              {signUp ? "Having an Account Already!" : "Don't Have an Account?"}
            </StyledText>
            <StyledText
              variant={"string"}
              colorVariant={"link"}
              onClick={() => {
                if (signUp) {
                  navigate("/login");
                } else {
                  navigate("/signup");
                }
              }}
              sx={{ marginLeft: "0.5rem", cursor: "pointer" }}
            >
              {signUp ? "Login" : "SignUp"}
            </StyledText>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserSignIn;

import { useState } from "react";
import StyledButton from "../styledComponents/Button";
import { Box, FormControl, Paper, TextField } from "@mui/material";
import styles from "./SignUpForm.module.scss";
import { AccountCircle } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import StyledText from "../styledComponents/Text";
import UseAuth from "../auth/UseAuth";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = UseAuth();

  return (
    <Paper elevation={6} className={styles.signUpForm}>
      <FormControl variant="standard" sx={{ width: "75%" }}>
        <StyledText variant="h4" colorVariant={"dark"}>
          Sign Up
        </StyledText>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            padding: "0.5rem 1rem",
          }}
        >
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            label="Email"
            variant="standard"
            placeholder="sample@email.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            padding: "0.5rem 1rem",
          }}
        >
          <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            label="Password"
            type="password"
            variant="standard"
            placeholder="*strong@^%"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Box>
        <StyledButton
          onClick={() => signUp(email, password)}
          sx={{ marginTop: "1rem" }}
        >
          SignUp
        </StyledButton>
      </FormControl>
    </Paper>
  );
};

export default SignUpForm;

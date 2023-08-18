import { useState } from "react";
import StyledButton from "../../styledComponents/Button";
import { Box, FormControl, Paper, TextField } from "@mui/material";
import styles from "./LogInForm.module.scss";
import { AccountCircle } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import StyledText from "../../styledComponents/Text";
import UseAuth from "../UseAuth";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = UseAuth();

  return (
    <Paper elevation={6} className={styles.logInForm}>
      <FormControl variant="standard">
        <StyledText variant="h4" colorVariant={"dark"}>
          Log In
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
          />
        </Box>
        <StyledButton
          onClick={() => signIn(email, password)}
          sx={{ marginTop: "1rem" }}
        >
          Log In
        </StyledButton>
      </FormControl>
    </Paper>
  );
};

export default LogInForm;

import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import UserSignIn from "./pages/UserSignIn";
import BookBus from "./components/BookBus.js";
import SnackBarPopup from "./components/styledComponents/SnackBarPopup";
import { useState } from "react";

function App() {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route
              path="/book/:busId"
              element={
                <BookBus
                  setIsSnackbarOpen={setIsSnackbarOpen}
                  setSnackBarMessage={setSnackBarMessage}
                />
              }
            />
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/login" element={<UserSignIn signUp={false} />} />
          <Route path="/signup" element={<UserSignIn signUp={true} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <SnackBarPopup
          open={isSnackbarOpen}
          message={snackBarMessage}
          onClose={handleSnackbarClose}
        />
      </StyledEngineProvider>
    </Router>
  );
}

export default App;

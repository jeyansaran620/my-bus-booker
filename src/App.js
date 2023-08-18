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

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/login" element={<UserSignIn signUp={false} />} />
          <Route path="/signup" element={<UserSignIn signUp={true} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;

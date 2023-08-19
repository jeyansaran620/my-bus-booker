import AvailableBuses from "../../components/AvailableBuses";
import Navbar from "../../components/Navbar";
import UseAuth from "../../components/auth/UseAuth";

const Home = () => {
  const { loggedInUser, signOutUser } = UseAuth();
  return (
    <>
      <Navbar
        username={loggedInUser ? loggedInUser.email : ""}
        onLogout={signOutUser}
      />
      <AvailableBuses />
    </>
  );
};

export default Home;

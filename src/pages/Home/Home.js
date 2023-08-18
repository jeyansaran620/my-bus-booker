import UseAuth from "../../components/auth/UseAuth";
import StyledButton from "../../components/styledComponents/Button";

const Home = () => {
  const { signOutUser } = UseAuth();
  return (
    <>
      <h2>Protected Page</h2>
      <StyledButton onClick={() => signOutUser()}>Sign out</StyledButton>
    </>
  );
};

export default Home;

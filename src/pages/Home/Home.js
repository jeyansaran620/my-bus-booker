import AvailableBuses from "../../components/AvailableBuses";
// import UseAuth from "../../components/auth/UseAuth";
// import StyledButton from "../../components/styledComponents/Button";
import StyledText from "../../components/styledComponents/Text";

const Home = () => {
  // const { signOutUser } = UseAuth();
  return (
    <>
      <StyledText variant={"h4"} colorVariant={"dark"}>
        My Bus Booker
      </StyledText>
      {/* <StyledButton onClick={() => signOutUser()}>Sign out</StyledButton> */}
      <AvailableBuses />
    </>
  );
};

export default Home;

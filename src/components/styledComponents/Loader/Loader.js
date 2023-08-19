import { Box, CircularProgress, circularProgressClasses } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: "#313e6f",
          animationDuration: "550ms",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-100%, -50%)",
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
      />
    </Box>
  );
};

export default Loader;

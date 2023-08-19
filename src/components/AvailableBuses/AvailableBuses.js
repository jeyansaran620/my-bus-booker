import React, { useEffect, useState } from "react";
import { getAvailableBuses } from "../../services/busBookerClient";
import Loader from "../styledComponents/Loader";
import StyledText from "../styledComponents/Text";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Grid from "@mui/material/Grid";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import StyledButton from "../styledComponents/Button/StyledButton";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAvailableSeatsCount } from "../../services/busUtils";

const AvailableBuses = () => {
  const [availableBuses, setAvailableBuses] = useState([]);
  const [busesLoading, setBusesLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getAvailableBuses(setAvailableBuses, setBusesLoading);
  }, []);

  if (busesLoading) {
    return <Loader />;
  }

  if (!busesLoading && !availableBuses) {
    return (
      <StyledText variant={"h5"} colorVariant={"link"} sx={{ mt: 6 }}>
        {`Error While Fetching Buses :(`}
      </StyledText>
    );
  }

  if (!busesLoading && availableBuses.length === 0) {
    return (
      <StyledText variant={"h5"} colorVariant={"dark"} sx={{ mt: 6 }}>
        {`There are No Available Buses :(`}
      </StyledText>
    );
  }

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item sm={12} md={6}>
        <Paper elevation={6} sx={{ mt: 2, padding: "1rem" }}>
          <StyledText variant={"h6"} colorVariant={"dark"}>
            Available Buses
          </StyledText>
          <div>
            <List dense={true}>
              {availableBuses.map((bus) => (
                <Paper key={bus.id} elevation={6} sx={{ mt: 2 }}>
                  <ListItem sx={{ padding: "0.5rem" }}>
                    <ListItemAvatar>
                      <Avatar>
                        <DepartureBoardIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <StyledText
                          sx={{ mt: 2, mb: 2 }}
                          variant={"string"}
                          colorVariant={"dark"}
                        >
                          {bus.name}
                        </StyledText>
                      }
                    />
                    <ListItemText primary={`↑ ${bus.arrival}`} />
                    <ListItemText primary={`↓  ${bus.depature}`} />

                    <ListItemText
                      primary={
                        <>
                          Only
                          <StyledText
                            sx={{ marginRight: "0.25rem" }}
                            variant={"string"}
                            colorVariant={"link"}
                          >
                            {getAvailableSeatsCount(bus.seats)}
                          </StyledText>
                          seats left
                        </>
                      }
                    />

                    <ListItemText primary={`₹ ${bus.price}`} />
                    <ListItemText
                      primary={
                        <StyledButton
                          sx={{ ml: 2 }}
                          edge="end"
                          aria-label="book"
                          onClick={() => navigate(`/book/${bus.id}`)}
                        >
                          Book
                          <ChevronRightIcon />
                        </StyledButton>
                      }
                    />
                  </ListItem>
                </Paper>
              ))}
            </List>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AvailableBuses;

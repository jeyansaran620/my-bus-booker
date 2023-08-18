import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

const CustomisedButton = styled(Button)(() => ({
    color: "#ffffff",
    borderRadius: "5px",
    background: "linear-gradient(45deg, #3f918b, #50a399)",
    boxShadow: `0 10px 10px -2px rgba(0,0,0,.25)`,
    cursor: "pointer",
    border: `0 !important`,
    fontWeight: 'bolder',
    fontSize: '1rem',
    padding: `0.75rem 1rem`,
    textAlign: "center",
    textTransform: "none",
    transition: `all 1.5s ease-in`,

   '&:focus, &:hover': {
      background: `linear-gradient( 45deg, #50a399, #3f918b)`,
      boxShadow: `0 10px 10px -2px rgba(0,0,0,.25)`
    },
     
    '&:disabled' : {
      backgroundColor: "#667676",
      color: "#ffffff"
    }
}));

const StyledButton = ({ disabled ,children, onClick, sx }) => {
  return <CustomisedButton variant="contained" disabled={disabled} onClick={onClick} sx={sx} >{children}</CustomisedButton>;
}

export default StyledButton;
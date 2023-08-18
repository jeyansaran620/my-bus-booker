
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomisedText = styled(Typography)(({color, variant}) => ({
    color,
    textShadow:`-0.5px 0.5px 0 floralWhite, 0.5px 0.5px 0 floralWhite, 0.5px -0.5px 0 floralWhite`,
    fontWeight:  variant === "string" ? "bold" : "bolder",
    textAlign: "center",
    textTransform: "none",
    transition: `all 3s ease-in`,
}));

const StyledText = ({ variant ,children, colorVariant, sx, onClick }) => {
  let color = "floralWhite"
  switch(colorVariant)
  {
    case "dark":
      color = "#313e6f"
      break
    case "link":
      color = "#ff7d2f"
      break    
    default:
      color = "floralWhite" 
  }
  return <CustomisedText variant={variant} color={color} sx={sx} onClick={onClick} > {children}</CustomisedText>;
}

export default StyledText;
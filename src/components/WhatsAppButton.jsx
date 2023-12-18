import React from "react";
import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "../assets/Img/whatsapp.png";
import { keyframes } from "@emotion/react";

function WhatsAppButton() {
  const phoneNumber = "1234567890";

  const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

  const handleClick = () => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        right: "-5px",
        top: "80%",
        animation: `${bounce} 2s infinite`,
      }}
    >
      <IconButton onClick={handleClick}>
        <img
          src={WhatsAppIcon}
          width="100px"
          sx={{ wcolor: "green" }}
        />
      </IconButton>
    </Box>
  );
}

export default WhatsAppButton;

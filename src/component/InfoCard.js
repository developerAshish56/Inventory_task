import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const InfoCard = ({ icon, title, value }) => {
  return (
    <Card
      sx={{
        minWidth: 300,
        minHeight: 100,
        backgroundColor: "#1f3627",
        color: "#fff",
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          display: "flex",
          alignItems: "top",
          justifyContent: "center",
        }}
      >
        {React.cloneElement(icon, { size: 30 })}
      </Box>
      <CardContent sx={{ flex: 1 }}>
        <Box display="flex" flexDirection="column" height="100%">
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            {title}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

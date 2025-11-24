import React from "react";
import { Box, Paper, Typography } from "@mui/material";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#050315",     
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 360,
          height: 580,
          borderRadius: 6,
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          px: 4,
          pt: 5,
          pb: 3,
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#2E2B3A",
            mb: 4,
          }}
        >
          {title}
        </Typography>

        <Box sx={{ flex: 1 }}>{children}</Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Box
            sx={{
              width: 90,
              height: 5,
              borderRadius: 3,
              bgcolor: "#1E1B4B",
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthLayout;

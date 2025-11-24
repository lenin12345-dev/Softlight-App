import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import AuthLayout from "../components/AuthLayout";
import GradientButton from "../components/GradientButton";


interface ForgotPasswordPageProps {
  goToSignIn: () => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
  goToSignIn,
}) => {
  return (
    <AuthLayout title="Forgot password">
      <Typography
        sx={{ mb: 3, color: "#6B7280", fontSize: 14, maxWidth: 260 }}
      >
        Enter the email address associated with your account and we’ll send you
        a reset link.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          InputProps={{
            sx: { borderRadius: 2, backgroundColor: "#ffffff" },
          }}
        />
      </Box>

      <Box sx={{ mt: "auto" }}>
        <GradientButton fullWidth>Send reset link</GradientButton>

        <Button
          fullWidth
          variant="text"
          sx={{
            mt: 2,
            textTransform: "none",
            fontSize: 14,
            color: "#4B5563",
          }}
          onClick={goToSignIn}
        >
          Back to sign in
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;


import React from "react";
import { Box, TextField, Button } from "@mui/material";
import AuthLayout from "../components/AuthLayout";
import GradientButton from "../components/GradientButton";

interface SignUpPageProps {
  goToSignIn: () => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ goToSignIn }) => {
  return (
    <AuthLayout title="Create account">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          fullWidth
          label="Full name"
          InputProps={{ sx: { borderRadius: 2, backgroundColor: "#ffffff" } }}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          InputProps={{ sx: { borderRadius: 2, backgroundColor: "#ffffff" } }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          InputProps={{ sx: { borderRadius: 2, backgroundColor: "#ffffff" } }}
        />
        <TextField
          fullWidth
          label="Confirm password"
          type="password"
          InputProps={{ sx: { borderRadius: 2, backgroundColor: "#ffffff" } }}
        />
      </Box>

      <Box sx={{ mt: "auto" }}>
        <GradientButton fullWidth>Create account</GradientButton>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 500,
            fontSize: 16,
            py: 1.4,
            backgroundColor: "#E5E7EB",
            color: "#111827",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#D1D5DB",
              boxShadow: "none",
            },
          }}
          onClick={goToSignIn}
        >
          Back to sign in
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default SignUpPage;


import React from "react";
import {
  Box,
  TextField,
  Button,
} from "@mui/material";
import AuthLayout from "../components/AuthLayout";
import GradientButton from "../components/GradientButton";

interface SignInPageProps {
  goToSignUp: () => void;
  goToForgot: () => void;
}

const SignInPage: React.FC<SignInPageProps> = ({
  goToSignUp,
  goToForgot,
}) => {
  return (
    <AuthLayout title="Sign in">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          fullWidth
          defaultValue="andy@gmail.com"
          InputProps={{
            sx: {
              borderRadius: 2,
              backgroundColor: "#ffffff",
            },
          }}
        />
        <TextField
          fullWidth
          type="password"
          placeholder="Password"
          InputProps={{
            sx: {
              borderRadius: 2,
              backgroundColor: "#ffffff",
            },
          }}
        />
      </Box>

      <Box sx={{ mt: "auto" }}>
        <GradientButton fullWidth>Sign in</GradientButton>

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
          onClick={goToSignUp}
        >
          Create account
        </Button>

        <Button
          onClick={goToForgot}
          sx={{
            mt: 2,
            display: "block",
            mx: "auto",
            textTransform: "none",
            fontSize: 13,
            color: "#6B7280",
          }}
        >
          Forgot password
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default SignInPage;

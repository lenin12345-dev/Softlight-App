import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import AuthLayout from "../components/AuthLayout";
import GradientButton from "../components/GradientButton";

interface SignInPageProps {
  goToSignUp: () => void;
  goToForgot: () => void;
}

const SignInPage: React.FC<SignInPageProps> = ({ goToSignUp, goToForgot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleSubmit = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email address";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Sign in:", { email, password });
    }
  };

  return (
    <AuthLayout title="Sign in">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          InputProps={{ sx: { borderRadius: 2, backgroundColor: "#ffffff" } }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{ sx: { borderRadius: 2, backgroundColor: "#ffffff" } }}
        />
      </Box>

      <Box sx={{ mt: "auto" }}>
        <GradientButton fullWidth onClick={handleSubmit}>
          Sign in
        </GradientButton>

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
          sx={{ mt: 2, display: "block", mx: "auto" }}
        >
          Forgot password
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default SignInPage;

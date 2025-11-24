import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import AuthLayout from "../components/AuthLayout";
import GradientButton from "../components/GradientButton";

interface SignUpPageProps {
  goToSignIn: () => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ goToSignIn }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = () => {
    const newErrors: typeof errors = {};
    if (!form.name) newErrors.name = "Full name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email address";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (form.password !== form.confirm) newErrors.confirm = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Sign up:", form);
    }
  };

  return (
    <AuthLayout title="Create account">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          fullWidth
          label="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          error={!!errors.name}
          helperText={errors.name}
          InputProps={{ sx: { borderRadius: 2, backgroundColor: "#ffffff" } }}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
          InputProps={{ sx: { borderRadius: 2, backgroundColor: "#ffffff" } }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{ sx: { borderRadius: 2, backgroundColor: "#ffffff" } }}
        />
        <TextField
          fullWidth
          label="Confirm password"
          type="password"
          value={form.confirm}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          error={!!errors.confirm}
          helperText={errors.confirm}
          InputProps={{ sx: { borderRadius: 2, backgroundColor: "#ffffff" } }}
        />
      </Box>

      <Box sx={{ mt: "auto" }}>
        <GradientButton fullWidth  onClick={handleSubmit}>
          Create account
        </GradientButton>

        <Button fullWidth variant="contained" sx={{ mt: 2, borderRadius: 999 }} onClick={goToSignIn}>
          Back to sign in
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default SignUpPage;

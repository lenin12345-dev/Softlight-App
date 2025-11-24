import React from "react";
import Button from "@mui/material/Button";

const GradientButton = (props: React.ComponentProps<typeof Button>) => {
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        mt: 3,
        borderRadius: 999,
        textTransform: "none",
        fontWeight: 500,
        fontSize: 16,
        py: 1.4,
        backgroundImage: "linear-gradient(90deg, #952286, #3A3CB3)",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
          backgroundImage: "linear-gradient(90deg, #4338CA, #DB2777)",
        },
        ...props.sx,
      }}
    />
  );
};

export default GradientButton;

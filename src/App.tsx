import React, { useState } from "react";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

type Screen = "signin" | "signup" | "forgot";

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("signin");

  if (screen === "signup") {
    return <SignUpPage goToSignIn={() => setScreen("signin")} />;
  }

  if (screen === "forgot") {
    return <ForgotPasswordPage goToSignIn={() => setScreen("signin")} />;
  }

  return (
    <SignInPage
      goToSignUp={() => setScreen("signup")}
      goToForgot={() => setScreen("forgot")}
    />
  );
};

export default App;

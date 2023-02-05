import { useContext } from "react";

import SignPage from "./pages/SignPage";
import UserPage from "./pages/UserPage";
import { SignInContext } from "./contexts/MainContext";

function App() {
  const { signedIn } = useContext(SignInContext);

  return signedIn ? <UserPage /> : <SignPage />;
}

export default App;

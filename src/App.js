import UserPage from "./pages/UserPage";
import MainContext from "./contexts/MainContext";

function App() {
  return (
    <MainContext>
      <UserPage />
    </MainContext>
  );
}

export default App;

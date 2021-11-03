import "./App.css";
import { Router } from "@reach/router";
import AdminSignIn from "./components/AdminSignIn";
import AdminSignUp from "./components/AdminSignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <AdminSignUp path="/signup" />
        <AdminSignIn path="/signin" />
      </Router>
    </div>
  );
}

export default App;

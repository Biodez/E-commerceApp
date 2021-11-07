import "./App.css";
import { Router } from "@reach/router";
import AdminSignIn from "./components/AdminSignIn";
import AdminSignUp from "./components/AdminSignUp";
import AdminDisplay from "./views/AdminDisplay";
import Main from "./views/Main";
import Update from "./views/Update";
import ProductEdit from "./views/ProductEdit";

function App() {
  return (
    <div className="App">
      <Router>
        <AdminSignUp path="/signup" />
        <AdminSignIn path="/signin" />
        <AdminDisplay path="/display" />
        <Main path="/product" />
        <ProductEdit path="/" />
        <Update path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;

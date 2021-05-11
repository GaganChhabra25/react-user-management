import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import AddUser from "./components/User/AddUser";
import EditUser from "./components/User/EditUser";
import ViewUser from "./components/User/ViewUser";
import ConfirmModal from "./components/Modal/ConfirmModal";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="routes">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route exact path="/users/view/:id" component={ViewUser} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

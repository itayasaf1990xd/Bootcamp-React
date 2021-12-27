import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;

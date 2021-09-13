import "./App.css";
import StateHOC from "./components/StateHOC";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/:date?" children={<StateHOC />}/>
      </Router>
    </div>
  );
}

export default App;

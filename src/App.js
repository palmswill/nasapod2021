import "./App.css";
import StateWrapper from "./components/StateWrapper";
import "semantic-ui-css/semantic.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StateWrapper/>
    </div>
  );
}

export default App;

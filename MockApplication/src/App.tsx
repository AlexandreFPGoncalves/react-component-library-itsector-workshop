import { useState } from "react";
import reactLogo from "./assets/react.png";
import { ButtonComponent } from "react-component-library-itsector-workshop";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Mock Application</h1>
      <div className="card">
        <ButtonComponent
          type="primary"
          onClick={() => setCount((count) => count + 1)}
          label={`count is ${count}`}
        />
      </div>
    </div>
  );
}

export default App;

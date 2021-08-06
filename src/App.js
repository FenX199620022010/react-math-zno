import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

// importing components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Test from "./components/Test/Test";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="contentWrapper">
          <Route exact path="/" component={Main} />
          <Route path="/test" component={Test} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import "./App.css";
import Search from "./Search";
import City from "./City";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wather-app-wrapper">
          <div className="wather-app">
            <Search />
            <City />
            <Weather />
          </div>
          <Forecast />
        </div>
      </div>
    </div>
  );
}

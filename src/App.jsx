import Header from "./components/header";
import Navigation from "./components/navigation";
import "./styles/base/app.scss";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
    </div>
  );
};

export default App;

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Header />
      <Weather city="Ituzaingó" day="Sábado" hour={14} minutes={50} />
      <Footer />
    </div>
  );
}

export default App;
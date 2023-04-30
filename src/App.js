import "./App.scss";
//Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import pages
import { Home, Cart, Category } from "./pages/index";
//import components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;

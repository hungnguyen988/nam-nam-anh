import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./component/layout/Layout";
import HomePage from "./component/home/homepage/Homepage";
import IntroductionPage from "./component/introduce/IntroductionPage";
import ProductPage from "./component/products/productPage/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />  {/* Trang chủ */}
          <Route path="/introduce" element={<IntroductionPage />} />
          <Route path="/products/*" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

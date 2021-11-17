// import logo from './logo.svg';
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import ProductPage from "./pages/ProductsPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={ <Navigate replace to="/welcome"/>}/>
        <Route path="/welcome/*" element={<WelcomePage />}>
          <Route path="new-user" element={<p> Welcome, new user! </p>}/>
        </Route>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}

export default App;

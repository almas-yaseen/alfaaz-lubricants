import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
// import About from './Components/About';  // New page (Example)
// import Contact from './Components/Contact';  // New page (Example)
import ProductDetails from './Components/ProductPage';  // Example of a product details page
import BrandProducts from './Components/BrandProducts';

function MainRouter() {
  return (
    <Router>
      <Routes>
        {/* Home route - renders the main App component */}
        <Route path="/" element={<App />} />
        
        {/* New routes for other pages */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/product/:id" element={<ProductDetails />} />  {/* Example with dynamic routing */}
        <Route path="/products/:name" element={<BrandProducts />} />  {/* Example with dynamic routing */}
      </Routes>
    </Router>
  );
}

export default MainRouter;

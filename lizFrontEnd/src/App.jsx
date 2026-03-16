import React from 'react';
import Header from './components/Header.jsx';
import MainContent from './components/Index.jsx';
import MainProductsPage from './components/MainProductsPage.jsx';
import Footer from './components/Footer.jsx';
import Dashboard from './components/admin/Dashboard.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './components/CartContext.jsx';
import { ImagesProvider } from './components/ImagesContext.jsx'; // Import the ImagesProvider
import FloatingCartButton from './components/FloatingCartButton';
import CheckOut from './components/CheckOut.jsx';
import Login from './components/admin/Login.jsx';

const ConditionalFloatingCartButton = () => {
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/admin/dashboard') {
    return null;
  }

  return <FloatingCartButton />;
};

function App() {
  return (
    <ImagesProvider> {/* Wrap the app in ImagesProvider */}
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <ConditionalFloatingCartButton />
            <main>
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/productos" element={<MainProductsPage />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ImagesProvider>
  );
}

export default App;

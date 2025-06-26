import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Hero from '../components/Hero';
import Register from '../components/Register';
import SelfTrack from '../pages/SelfTrack';
import ProtectedRoute from '../components/ProtectedRoute';
import Product from '../pages/Product';
import Features from '../pages/Features';
import About from '../pages/About';
import Company from '../pages/Company';
import ForgotPassword from '../components/ForgotPassword';
import ResetPassword from '../components/ResetPassword';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/product" element={<Product />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/company" element={<Company />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Auth Recovery Routes */}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/:me/*" element={<SelfTrack />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
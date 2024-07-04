import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./frontend/home/Home";
import About from "./frontend/about/About";
import Contact from "./frontend/contact/Contact";
import Login from "./auth/login/Login";
import SignUp from "./auth/signUp/SignUp";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
export default function Index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

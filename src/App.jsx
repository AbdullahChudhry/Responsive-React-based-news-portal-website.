import React from 'react'
import "./App.css"
import Header from './Components/common/header/header'
import { FaBars } from "react-icons/fa";
import HomePages from './Components/common/header/Home/HomePages';
import Footer from './Components/footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <HomePages />
      <Footer />
    </>

  )
}

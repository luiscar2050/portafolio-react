import './App.css';
import { Routes, Route } from "react-router-dom";
import { Container } from "./components/Container/Container.jsx";
import { Header } from "./components/Layouts/Header/Header.jsx";
import { Home } from "./components/Pages/Home/Home.jsx";
import { TechnicalSkills } from "./components/Pages/TechnicalSkills/TechnicalSkills.jsx";
import { InterpersonalSkills } from "./components/Pages/InterpersonalSkills/InterpersonalSkills.jsx";
import { Experience } from "./components/Pages/Experience/Experience.jsx";
import { Footer } from "./components/Layouts/footer/Footer.jsx";


export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InterpersonalSkills" element={<InterpersonalSkills />}/>
          <Route path="/TechnicalSkills" element={<TechnicalSkills />}/>
          <Route path="/Experience" element={<Experience />}/>
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

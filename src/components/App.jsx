import "../App.css";
import {Routes, Route} from "react-router-dom";
import { Container } from "../Container/Container";
import { Header } from "../Layouts/Header/Header";
import { Home } from "../Pages/Home"; 
import { TechnicalSkills } from "../Pages/TechnicalSkills";
import { InterpersonalSkills } from "../Pages/InterpersonalSkills";
import { Experience } from "../Pages/Experience";

export const App = () => {
    return (
        <>
        <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/InterpersonalSkills" element={<InterpersonalSkills />} />
                    <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
                    <Route path="/Experience" element={<Experience />} />
                </Routes>
            </Container>
        </>
    )
}
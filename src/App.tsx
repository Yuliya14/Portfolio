import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Home} from "./home/Home";
import {Skills2} from "./skills2/Skills2";
import {Portfolio} from "./portfolio/Portfolio";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";

/*export type SkillsType = {
    id: number
    name: string
    progress: string
}*/
function App() {

  /*  let skills: Array<SkillsType> = [
        {id: 1, name: "HTML && CSS", progress: "40%"},
        {id: 2, name: "JS", progress: "50%"},
        {id: 3, name: "React", progress: "50%"},
        {id: 3, name: "Redux", progress: "20%"},
    ]*/
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Skills2/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
}
export default App;

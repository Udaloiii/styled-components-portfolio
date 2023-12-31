import {Header} from "src/layout/header/Header.tsx";
import {Main} from "src/layout/sections/main/Main.tsx";
import {Skills} from "src/layout/sections/skills/Skills.tsx";
import {Works} from "src/layout/sections/works/Works.tsx";
import {Contacts} from "src/layout/sections/contacts/Contacts.tsx";
import {Footer} from "src/layout/footer/Footer.tsx";
import {Particle} from "src/components/particle/Particle.tsx";
import {GoTop} from "src/components/goTop/GoTop.tsx";


function App() {
    return (
        <div>
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
            <GoTop/>
        </div>
    );
}

export default App;
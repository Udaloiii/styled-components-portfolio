import {Header} from "src/layout/header/Header.tsx";
import {Main} from "src/layout/sections/main/Main.tsx";
import {Skills} from "src/layout/sections/skills/Skills.tsx";
import {Works} from "src/layout/sections/projects/Works.tsx";
import {Contacts} from "src/layout/sections/contacts/Contacts.tsx";
import {Footer} from "src/layout/footer/Footer.tsx";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
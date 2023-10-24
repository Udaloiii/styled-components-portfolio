import {Header} from "src/layout/header/Header.tsx";
import {Main} from "src/layout/sections/main/Main.tsx";
import {Skills} from "src/layout/sections/skills/Skills.tsx";


function App() {
    return (
        <div className="App">
            {/*<Title>Welcome to IT-INCUBATOR</Title>*/}
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #e91e63;
// `;
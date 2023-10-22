import {Header} from "src/components/header/Header.tsx";
import {Main} from "src/components/Main.tsx";
import {Icon} from "src/components/Icon.tsx";
import {Skill} from "src/components/skills/skill/Skill.tsx";


function App() {
    return (
        <div className="App">
            {/*<Title>Welcome to IT-INCUBATOR</Title>*/}
            <Header/>
            <Main>
                <Skill>
                    <Icon iconId={"react"} width={"150"} height={"150"}/>
                </Skill>
                <Skill>
                    <Icon iconId={"redux"} width={"150"} height={"150"}/>
                </Skill>
                <Skill>
                    <Icon iconId={"styledComponents"} width={"250"} height={"250"} viewBox={"0 0 256 256"}/>
                </Skill>
            </Main>


        </div>
    );
}

export default App;

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #e91e63;
// `;
import styled from "styled-components";
import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import {Project} from "src/layout/sections/projects/project/Project.tsx";
import {Title} from "src/components/title/Title.tsx";

export const Works = () => {
    return (
        <StyledProjects>
            <Title fontFamily={"Broadway, sans-serif"} fontSize={"1.5rem"}>
                My works
            </Title>
            <FlexWrapper width={"80%"} justify={"space-between"}>
                <Project title={"Easy Task"} text={""} link={"https://todolist-on-redux.vercel.app/"} logo={"https://img.freepik.com/free-vector/lovely-hand-drawn-list-collection_23-2147934745.jpg?w=1480&t=st=1698342879~exp=1698343479~hmac=6b5342ce997d64d383611e044c28ca4d0c59162da8ba1fb5ec9e95763cdbbe51"}/>
                <Project title={"Social network"} text={""} logo={""}/>
                <Project title={"Cards"} text={""} logo={""}/>
            </FlexWrapper>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: burlywood;
`
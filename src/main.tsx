import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "src/styles/Global.styled.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <GlobalStyle/>
        <App/>
    </BrowserRouter>
)

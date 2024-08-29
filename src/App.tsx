import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

function Application() {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    );
}

export default Application;
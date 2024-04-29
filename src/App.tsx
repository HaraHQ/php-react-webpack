import { StrictMode } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./style.css";

import Home from "./pages";
import About from "./pages/about";

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Home />} />,
        <Route path="about" element={<About />} />,
    ])
)

const App = () => {
    return (
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    )
}

export default App
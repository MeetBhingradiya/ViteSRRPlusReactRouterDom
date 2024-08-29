import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Other from "./Pages/Other";
import NotFound from "./Pages/NotFound";

export const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/other" element={<Other />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
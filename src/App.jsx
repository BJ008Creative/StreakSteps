import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { StreakPage } from "./pages/StreakPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/streak" element={<StreakPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
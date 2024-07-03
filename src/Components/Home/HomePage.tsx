import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import SignIn from "../Sign-In/Sign-In";
import Transaction from "../Transaction.tsx";
import Schedules from "../Schedules.tsx";

function HomePage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/transaction" element={<Transaction/>} />
                <Route path="/schedules" element={<Schedules/>} />
            </Routes>
        </Router>
    );
}

export default HomePage;

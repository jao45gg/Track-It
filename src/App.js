import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HojePage from "./pages/HojePage";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUpPage";
import { LevelContext } from "./constant";

export default function App() {

  const [user, setUser] = useState(null);

  return (
    <LevelContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setUser={setUser} />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje" element={<HojePage />}/>
        </Routes>
      </BrowserRouter>
    </LevelContext.Provider>
  );
}
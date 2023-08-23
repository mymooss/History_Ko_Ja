import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main"
import History from "./pages/History"
const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/historyy" element={<History />}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
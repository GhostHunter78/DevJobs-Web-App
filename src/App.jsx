import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import SelectedCompany from "./pages/SelectedCompany";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectedCompany/:name" element={<SelectedCompany />} />
      </Routes>
    </>
  );
}

export default App;
